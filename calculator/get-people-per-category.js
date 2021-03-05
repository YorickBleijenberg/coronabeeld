const getPeoplePerCategory = (category) => {
    if(category === 'DIRECT_COVID_CARE_EMPLOYEES') return 40000; //Medewerkers directe COVID-zorg en ambulances
    if(category === 'NURSING_HOME_EMPLOYEES') return 273000; //Zorgmedewerkers verpleeghuizen en kleinschalige woonvormen
    if(category === 'GENERAL_PRACTICE_EMPLOYEES') return 38000; //Huisartsen en hun medewerkers
    if(category === 'MEDICAL_REVALIDATION_EMPLOYEES') return NaN; //Zorgmedewerkers klinische medisch specialistische revalidatie
    if(category === 'DISABLED_CARE_EMPLOYEES') return 258000; //Zorgmedewerkers gehandicaptenzorg
    if(category === 'MENTAL_CARE_EMPLOYEES') return 25000; //Zorgmedewerkers GGZ en GGZ-crisisdiensten
    if(category === 'NON_MAINLAND_EMPLOYEES') return 8400; //Zorgmedewerkers BES- en CAS-eilanden
    if(category === 'LOCAL_CARE_EMPLOYEES') return 102000; //Zorgmedewerkers wijkverpleging *Helft van samen met 'SOCIAL_SUPPORT_EMPLOYEES'
    if(category === 'SOCIAL_SUPPORT_EMPLOYEES') return 102000; //Zorgmedewerkers Wmo-ondersteuning *Helft van samen met 'LOCAL_CARE_EMPLOYEES'
    if(category === 'PERSONAL_BUDGET_EMPLOYEES') return NaN; //Pgb-zorgverleners
    if(category === 'OTHER_HEALTHCARE_EMPLOYEES') return NaN; //Alle overige zorgmedewerkers
    if(category === 'NURSING_HOME_RESIDENTS') return 155000; //Bewoners verpleeghuizen en mensen met een verstandelijke beperking in een instelling
    if(category === 'SMALL_HOUSING_RESIDENTS') return 77000; //Bewoners kleinschalige woonvormen en mensen met een verstandelijke beperking in een instelling
    if(category === 'MOBILE_HOME_LIVING_ELDERLY') return NaN; //Mobiele thuiswonenden vanaf 65 jaar
    if(category === 'HEALTY_HOME_LIVING_MID_ELDERLY') return NaN; //Thuiswonenden van 60-64 (van oud naar jong)
    if(category === 'FRISIAN_ISLAND_ELDERLY') return NaN; //Ouderen Waddeneilanden
    if(category === 'FRISIAN_ISLAND_HEALTH_CARE_EMPLOYEES') return NaN; //Zorgmedewerkers Waddeneilanden
    if(category === 'MENTAL_CARE_PATIENTS') return 60000; //Intramurale GGZ-cliënten
    if(category === 'IMMOBILE_HOME_LIVING_ELDERLY') return NaN; //Niet-mobiele thuiswonenden vanaf 65 jaar
    if(category === 'HOME_LIVING_AT_HIGH_RISK_NON_ELDERLY') return NaN; //Mensen van 18-60 jaar met medische indicatie (hoog risico)
    if(category === 'HOME_LIVING_AT_RISK_NON_ELDERLY') return NaN; //Mensen van 18-60 jaar met medische indicatie
    if(category === 'ST_EUSTATIUS_AND_SABA_RESIDENTS') return NaN; //Inwoners St. Eustatius en Saba (alle bevolkingsgroepen)
    if(category === 'BONAIRE_RESIDENTS_ELDERLY') return NaN; //Inwoners Bonaire ouder dan 60 jaar
    if(category === 'OTHER_NON_MAINLAND_ELDERLY') return NaN; //Inwoners (overige) BES- en CAS-eilanden ouder dan 60 jaar
    if(category === 'OTHER_NON_MAINLAND_NON_ELDERLY') return NaN; //Inwoners (overige) BES- en CAS-eilanden van 18 - 60 jaar
    if(category === 'OTHERS') return 7100000; //Mensen van 50 tot en met 59 jaar en daarna van 18 tot en met 49 jaar zonder medische indicatie

    return -1;
};
