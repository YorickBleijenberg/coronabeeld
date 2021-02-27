const minAge = 18;
const maxAge = 60;
const initAge = 50;

const ageSlider = document.getElementById("myRange");
const ageNumber = document.getElementById("myNumber");
const output = document.getElementById("demo");
output.innerHTML = initAge;

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

const getPeopleBeforeAge = (age) => {
    let olderPeople = 0;
    Object.entries(PEOPLE_PER_CATEGORY).forEach(([ageString, amount]) => {
        if (Number(ageString) >= age || (ageString === '105+' && age < 105)) {
            olderPeople += amount;
        }
    });
    return olderPeople;
}

const getOutputForAge = (age) => {
    const test3 = parseInt((61 - age) * 1.6);
    const overDagen = parseInt(47 + ((61 - age) * 1.14));
    const d = new Date(2021, 4, 1);

    d.setDate(d.getDate() + test3);

    return age + ". <br> Er zijn " + getPeopleBeforeAge(age) + " mensen voor jou aan de beurt. <br> Aan de beurt over: " + overDagen + " dagen. <br> Dat is na: " + d.toDateString();
}

ageSlider.oninput = function() {
    updateAgeNumber(this.value);
    output.innerHTML = getOutputForAge(this.value);
}
ageNumber.oninput = function() {
    if(this.value <= maxAge && this.value >= minAge) {
        updateAgeSlider(this.value);
        output.innerHTML = getOutputForAge(this.value);
    }
}
