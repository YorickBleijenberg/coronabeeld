const getDateForNthVaccine = (vaccin, amount) => {

    if (amount === 0) {
        return new Date(2021,0,10);
    }

    let vaccinData;

    switch(vaccin) {
        case 'AstraZeneca': vaccinData = astraVaccinesGiven; break;
        case 'Moderna': vaccinData = modernaVaccinesGiven; break;
        case 'Pfizer': vaccinData = pfizerVaccinesGiven; break;
        default: return new Date(2030, 11, 31);
    }

    let previousAmount, nextAmount, previousDate, nextDate;
    let index = vaccinData.length - 1;

    for (let i=1; i<vaccinData.length; i++) {
        if (vaccinData[i - 1][0] < amount && vaccinData[i][0] >= amount) {
            index = i;
            break;
        }
    }

    previousAmount = vaccinData[index - 1][0];
    nextAmount = vaccinData[index][0];
    previousDate = vaccinData[index - 1][1];
    nextDate = vaccinData[index][1];

    const progress = (amount - previousAmount) / (nextAmount - previousAmount);

    return getInterpolatedDate(previousDate, nextDate, progress);
}

const getInterpolatedDate = (startDate, endDate, progress) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const progressDays = Math.ceil(progress * (endDate - startDate) / oneDay);
    let result = new Date(startDate);
    result.setDate(startDate.getDate() + progressDays);
    return result;
}

const astraVaccinesGiven = [
    [0, new Date(2021,0,10)],
    [0, new Date(2021,0,17)],
    [0, new Date(2021,0,24)],
    [0, new Date(2021,0,31)],
    [0, new Date(2021,1,7)],
    [0, new Date(2021,1,14)],
    [63170, new Date(2021,1,21)],
    [187107, new Date(2021,1,28)],
    [247874, new Date(2021,2,7)],
    [319091, new Date(2021,2,14)],
    [491501, new Date(2021,2,21)],
    [655721, new Date(2021,2,28)],
    [870732, new Date(2021,3,4)],
    [1077248, new Date(2021,3,11)],
];

const modernaVaccinesGiven = [
    [0, new Date(2021,0,10)],
    [0, new Date(2021,0,17)],
    [0, new Date(2021,0,24)],
    [12350, new Date(2021,0,31)],
    [19475, new Date(2021,1,7)],
    [25080, new Date(2021,1,14)],
    [63080, new Date(2021,1,21)],
    [64980, new Date(2021,1,28)],
    [102790, new Date(2021,2,7)],
    [108395, new Date(2021,2,14)],
    [135660, new Date(2021,2,21)],
    [195320, new Date(2021,2,28)],
    [226860, new Date(2021,3,4)],
    [266523, new Date(2021,3,11)],
];

const pfizerVaccinesGiven = [
    [35500, new Date(2021,0,10)],
    [86804, new Date(2021,0,17)],
    [160538, new Date(2021,0,24)],
    [331531, new Date(2021,0,31)],
    [551886, new Date(2021,1,7)],
    [758526, new Date(2021,1,14)],
    [888040, new Date(2021,1,21)],
    [1084583, new Date(2021,1,28)],
    [1281718, new Date(2021,2,7)],
    [1488496, new Date(2021,2,14)],
    [1644106, new Date(2021,2,21)],
    [1850475, new Date(2021,2,28)],
    [2051286, new Date(2021,3,4)],
    [2278773, new Date(2021,3,11)],
];
