const minAge = 18;
const maxAge = 60;
const initAge = 50;

const ageSlider = document.getElementById("myRange");
const ageNumber = document.getElementById("myNumber");
const ageSpan = document.getElementById("age");
const descriptionParagraph = document.getElementById("description");

ageSpan.innerHTML = initAge;

ageSlider.min = minAge;
ageSlider.max = maxAge;
ageSlider.value = initAge;
ageNumber.min = minAge;
ageNumber.max = maxAge;
ageNumber.value = initAge;

const updateAgeSlider = (age) => {
    ageSlider.value = age;
};

const updateAgeNumber = (age) => {
    ageNumber.value = age;
};

const onSelectGroup = () => {
    const group = document.getElementById("group-selector").value;
    const dates = getStartDatesForGroup(group);

    document.getElementById("demo").innerHTML = "Vanaf " + dates[0].toDateString();
}

const getStartDatesForGroup = (group) => {
    const vaccins = getVaccinsPerCategory(group);
    const priorities = getGroupsWithHigherPriority(group);

    return vaccins.map( (vaccin) => {
        const priorityGroups = priorities.filter( (priorityGroup) => getVaccinsPerCategory(priorityGroup).some( priorityVaccin => priorityVaccin === vaccin) );
        let totalPeople = 0;
        priorityGroups.forEach( (priorityGroup) => {
            const amount = getPeoplePerCategory(priorityGroup);
            if(!isNaN(amount)) totalPeople += amount;
        });
        return getDateForNthVaccine(vaccin, totalPeople * 2);
    });
}

const getPeopleBeforeAge = (age) => {
    let olderPeople = 0;
    Object.entries(PEOPLE_PER_AGE).forEach(([ageString, amount]) => {
        if (Number(ageString) >= age || (ageString === '105+' && age < 105)) {
            olderPeople += amount;
        }
    });
    return olderPeople;
}

const setAgeSpan = (age) => {
    ageSpan.innerText = String(age);
}

const setDescriptionDiv = (age) => {
    descriptionParagraph.innerHTML = `
    Als je moet wachten op AstraZenica, ben je aan de beurt tussen ${getDateForNthVaccine('AstraZeneca', getPeopleBeforeAge(age)).toDateString()}
    en ${getDateForNthVaccine('AstraZeneca', getPeopleBeforeAge(age-1)).toDateString()}.`;
}

const setOutput = (age) => {
    setAgeSpan(age);
    setDescriptionDiv(age);
}

ageSlider.oninput = function() {
    updateAgeNumber(this.value);
    setOutput(this.value);
}
ageNumber.oninput = function() {
    if(this.value <= maxAge && this.value >= minAge) {
        updateAgeSlider(this.value);
        setOutput(this.value);
    }
}
