const getGroupsWithSamePriority = (category) => {
    // From May
    const fromMay = ['OTHERS', 'OTHER_NON_MAINLAND_NON_ELDERLY', 'OTHER_HEALTHCARE_EMPLOYEES', 'HOME_LIVING_AT_RISK_NON_ELDERLY'];
    if(fromMay.includes(category)) return fromMay;
    // From March
    const fromMarch = ['PERSONAL_BUDGET_EMPLOYEES', 'IMMOBILE_HOME_LIVING_ELDERLY', 'HOME_LIVING_AT_HIGH_RISK_NON_ELDERLY'];
    if(fromMarch.includes(category)) return fromMarch;
    // From early March
    const fromEarlyMarch = ['SOCIAL_SUPPORT_EMPLOYEES'];
    if(fromEarlyMarch.includes(category)) return fromEarlyMarch;
    // From end of February
    const fromEndOfFebruary = ['MENTAL_CARE_PATIENTS', 'LOCAL_CARE_EMPLOYEES', 'MENTAL_CARE_EMPLOYEES'];
    if(fromEndOfFebruary.includes(category)) return fromEndOfFebruary;
    // From mid February
    const fromMidFebruary = ['ST_EUSTATIUS_AND_SABA_RESIDENTS', 'BONAIRE_RESIDENTS_ELDERLY', 'OTHER_NON_MAINLAND_ELDERLY', 'HEALTY_HOME_LIVING_MID_ELDERLY', 'FRISIAN_ISLAND_ELDERLY', 'FRISIAN_ISLAND_HEALTH_CARE_EMPLOYEES', 'NON_MAINLAND_EMPLOYEES', 'DISABLED_CARE_EMPLOYEES', 'MEDICAL_REVALIDATION_EMPLOYEES'];
    if(fromMidFebruary.includes(category)) return fromMidFebruary;
    // From end of January
    const fromEndOfJanuary = ['SMALL_HOUSING_RESIDENTS', 'MOBILE_HOME_LIVING_ELDERLY', 'GENERAL_PRACTICE_EMPLOYEES'];
    if(fromEndOfJanuary.includes(category)) return fromEndOfJanuary;
    // From 18 January
    const from18January = ['NURSING_HOME_RESIDENTS'];
    if(from18January.includes(category)) return from18January;
    // From 6 January
    const from6January = ['NURSING_HOME_EMPLOYEES', 'DIRECT_COVID_CARE_EMPLOYEES'];
    if(from6January.includes(category)) return from6January;

    return undefined;
}

const getGroupsWithHigherPriority = (category) => {
    let higherPriorities = [];

    switch (category) {
        // From May
        case 'OTHERS':
        case 'OTHER_NON_MAINLAND_NON_ELDERLY':
        case 'OTHER_HEALTHCARE_EMPLOYEES':
        case 'HOME_LIVING_AT_RISK_NON_ELDERLY': higherPriorities.push('PERSONAL_BUDGET_EMPLOYEES', 'IMMOBILE_HOME_LIVING_ELDERLY', 'HOME_LIVING_AT_HIGH_RISK_NON_ELDERLY');
        // From March
        case 'PERSONAL_BUDGET_EMPLOYEES':
        case 'IMMOBILE_HOME_LIVING_ELDERLY':
        case 'HOME_LIVING_AT_HIGH_RISK_NON_ELDERLY': higherPriorities.push('SOCIAL_SUPPORT_EMPLOYEES');
        // From early March
        case 'SOCIAL_SUPPORT_EMPLOYEES': higherPriorities.push('MENTAL_CARE_PATIENTS', 'LOCAL_CARE_EMPLOYEES', 'MENTAL_CARE_EMPLOYEES');
        // From end of February
        case 'MENTAL_CARE_PATIENTS':
        case 'LOCAL_CARE_EMPLOYEES':
        case 'MENTAL_CARE_EMPLOYEES': higherPriorities.push('ST_EUSTATIUS_AND_SABA_RESIDENTS', 'BONAIRE_RESIDENTS_ELDERLY', 'OTHER_NON_MAINLAND_ELDERLY', 'HEALTY_HOME_LIVING_MID_ELDERLY', 'FRISIAN_ISLAND_ELDERLY', 'FRISIAN_ISLAND_HEALTH_CARE_EMPLOYEES', 'NON_MAINLAND_EMPLOYEES', 'DISABLED_CARE_EMPLOYEES', 'MEDICAL_REVALIDATION_EMPLOYEES');
        // From mid February
        case 'ST_EUSTATIUS_AND_SABA_RESIDENTS':
        case 'BONAIRE_RESIDENTS_ELDERLY':
        case 'OTHER_NON_MAINLAND_ELDERLY':
        case 'HEALTY_HOME_LIVING_MID_ELDERLY':
        case 'FRISIAN_ISLAND_ELDERLY':
        case 'FRISIAN_ISLAND_HEALTH_CARE_EMPLOYEES':
        case 'NON_MAINLAND_EMPLOYEES':
        case 'DISABLED_CARE_EMPLOYEES':
        case 'MEDICAL_REVALIDATION_EMPLOYEES': higherPriorities.push('SMALL_HOUSING_RESIDENTS', 'MOBILE_HOME_LIVING_ELDERLY', 'GENERAL_PRACTICE_EMPLOYEES');
        // From end of January
        case 'SMALL_HOUSING_RESIDENTS':
        case 'MOBILE_HOME_LIVING_ELDERLY':
        case 'GENERAL_PRACTICE_EMPLOYEES': higherPriorities.push('NURSING_HOME_RESIDENTS');
        // From 18 January
        case 'NURSING_HOME_RESIDENTS': higherPriorities.push('NURSING_HOME_EMPLOYEES');
        // From 6 January
        case 'NURSING_HOME_EMPLOYEES': higherPriorities.push('DIRECT_COVID_CARE_EMPLOYEES');
        case 'DIRECT_COVID_CARE_EMPLOYEES': break;
        default: return undefined;
    }
    return higherPriorities;
}
