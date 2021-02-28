const getDateForNthAstraVaccine = (amount) => {
    const vaccinsPerDay = 161040/7; //first week of AstraZeneca vaccins
    const days = Math.round(amount / vaccinsPerDay);
    const startDate = new Date(2021, 1, 11);

    var result = new Date(startDate);
    result.setDate(startDate.getDate() + days);
    return result;
}
