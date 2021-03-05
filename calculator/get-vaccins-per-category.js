const getVaccinsPerCategory = (category) => {
    if( category === 'DIRECT_COVID_CARE_EMPLOYEES') return ['Pfizer']; //Medewerkers directe COVID-zorg en ambulances
    if( category === 'NURSING_HOME_EMPLOYEES') return ['Pfizer', 'AstraZeneca']; //Zorgmedewerkers verpleeghuizen en kleinschalige woonvormen
    if( category === 'GENERAL_PRACTICE_EMPLOYEES') return ['Moderna', 'AstraZeneca']; //Huisartsen en hun medewerkers
    if( category === 'MEDICAL_REVALIDATION_EMPLOYEES') return ['AstraZeneca']; //Zorgmedewerkers klinische medisch specialistische revalidatie
    if( category === 'DISABLED_CARE_EMPLOYEES') return ['AstraZeneca']; //Zorgmedewerkers gehandicaptenzorg
    if( category === 'MENTAL_CARE_EMPLOYEES') return ['AstraZeneca']; //Zorgmedewerkers GGZ en GGZ-crisisdiensten
    if( category === 'NON_MAINLAND_EMPLOYEES') return ['Pfizer']; //Zorgmedewerkers BES- en CAS-eilanden
    if( category === 'LOCAL_CARE_EMPLOYEES') return ['AstraZeneca']; //Zorgmedewerkers wijkverpleging
    if( category === 'SOCIAL_SUPPORT_EMPLOYEES') return ['AstraZeneca']; //Zorgmedewerkers Wmo-ondersteuning
    if( category === 'PERSONAL_BUDGET_EMPLOYEES') return ['AstraZeneca']; //Pgb-zorgverleners
    if( category === 'OTHER_HEALTHCARE_EMPLOYEES') return ['AstraZeneca']; //Alle overige zorgmedewerkers
    if( category === 'NURSING_HOME_RESIDENTS') return ['Pfizer']; //Bewoners verpleeghuizen en mensen met een verstandelijke beperking in een instelling
    if( category === 'SMALL_HOUSING_RESIDENTS') return ['Pfizer', 'Moderna']; //Bewoners kleinschalige woonvormen en mensen met een verstandelijke beperking in een instelling
    if( category === 'MOBILE_HOME_LIVING_ELDERLY') return ['Pfizer']; //Mobiele thuiswonenden vanaf 65 jaar
    if( category === 'HEALTY_HOME_LIVING_MID_ELDERLY') return ['AstraZeneca']; //Thuiswonenden van 60-64 (van oud naar jong)
    if( category === 'FRISIAN_ISLAND_ELDERLY') return ['Pfizer']; //Ouderen Waddeneilanden
    if( category === 'FRISIAN_ISLAND_HEALTH_CARE_EMPLOYEES') return ['Pfizer']; //Zorgmedewerkers Waddeneilanden
    if( category === 'MENTAL_CARE_PATIENTS') return ['Moderna', 'AstraZeneca']; //Intramurale GGZ-cliënten
    if( category === 'IMMOBILE_HOME_LIVING_ELDERLY') return ['Moderna']; //Niet-mobiele thuiswonenden vanaf 65 jaar
    if( category === 'HOME_LIVING_AT_HIGH_RISK_NON_ELDERLY') return ['Pfizer', 'Moderna', 'AstraZeneca']; //Mensen van 18-60 jaar met medische indicatie (hoog risico)
    if( category === 'HOME_LIVING_AT_RISK_NON_ELDERLY') return ['Pfizer', 'Moderna', 'AstraZeneca']; //Mensen van 18-60 jaar met medische indicatie
    if( category === 'ST_EUSTATIUS_AND_SABA_RESIDENTS') return ['Moderna']; //Inwoners St. Eustatius en Saba (alle bevolkingsgroepen)
    if( category === 'BONAIRE_RESIDENTS_ELDERLY') return ['Pfizer']; //Inwoners Bonaire ouder dan 60 jaar
    if( category === 'OTHER_NON_MAINLAND_ELDERLY') return ['Pfizer']; //Inwoners (overige) BES- en CAS-eilanden ouder dan 60 jaar
    if( category === 'OTHER_NON_MAINLAND_NON_ELDERLY') return ['AstraZeneca']; //Inwoners (overige) BES- en CAS-eilanden van 18 - 60 jaar
    if( category === 'OTHERS') return ['AstraZeneca']; //Mensen van 50 tot en met 59 jaar en daarna van 18 tot en met 49 jaar zonder medische indicatie

    return [];
};
