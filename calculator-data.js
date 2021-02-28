// bron: CBS, 27-2-2021 https://opendata.cbs.nl/statline/#/CBS/nl/dataset/7461bev/table?ts=1614445395201
const PEOPLE_PER_AGE = {
  '0': 169497,
  '1': 169918,
  '2': 171951,
  '3': 175319,
  '4': 174787,
  '5': 179581,
  '6': 176215,
  '7': 180969,
  '8': 184787,
  '9': 189871,
  '10': 190581,
  '11': 191201,
  '12': 187633,
  '13': 190949,
  '14': 192840,
  '15': 198577,
  '16': 205420,
  '17': 207149,
  '18': 213523,
  '19': 224489,
  '20': 222532,
  '21': 221651,
  '22': 216297,
  '23': 216448,
  '24': 217657,
  '25': 224513,
  '26': 224987,
  '27': 227651,
  '28': 230336,
  '29': 231478,
  '30': 224067,
  '31': 221567,
  '32': 221012,
  '33': 220272,
  '34': 215185,
  '35': 211608,
  '36': 205694,
  '37': 206135,
  '38': 209787,
  '39': 212604,
  '40': 205400,
  '41': 205351,
  '42': 202233,
  '43': 203832,
  '44': 205192,
  '45': 214175,
  '46': 221397,
  '47': 239141,
  '48': 250414,
  '49': 260941,
  '50': 266187,
  '51': 254922,
  '52': 251934,
  '53': 252798,
  '54': 255985,
  '55': 259958,
  '56': 255085,
  '57': 249709,
  '58': 246676,
  '59': 239164,
  '60': 236163,
  '61': 228921,
  '62': 223075,
  '63': 218121,
  '64': 211518,
  '65': 207231,
  '66': 202623,
  '67': 201498,
  '68': 192697,
  '69': 191999,
  '70': 192332,
  '71': 195686,
  '72': 202910,
  '73': 206012,
  '74': 144279,
  '75': 147609,
  '76': 136821,
  '77': 123046,
  '78': 113620,
  '79': 112104,
  '80': 103556,
  '81': 96472,
  '82': 85299,
  '83': 79209,
  '84': 71520,
  '85': 64712,
  '86': 57004,
  '87': 51687,
  '88': 44320,
  '89': 38478,
  '90': 30638,
  '91': 25338,
  '92': 19731,
  '93': 15653,
  '94': 11758,
  '95': 8855,
  '96': 6362,
  '97': 4374,
  '98': 2833,
  '99': 1891,
  '100': 1074,
  '101': 590,
  '102': 357,
  '103': 185,
  '104': 90,
  '105+': 102
};

const PEOPLE_PER_CATEGORY = {
  //willekeurige groepen die ik tegenkwam:
  'specialCareResidents': 155000, // bewoners van verpleeghuizen en instellingen voor gehandicaptenzorg
  'regularHealthcareEmployees': 269000, //  zorgmedewerkers van verpleeghuizen en kleinschalige woonvormen
  'specialHealthcareEmployees': 178000, // zorgmedewerkers in de gehandicaptenzorg
  'doorToDoorHealthCareEmployees': 166000, // wijkverpleging en WMO-ondersteuning
  'acuteHealthcareEmployees': 30000, // verpleegkundigen en artsen op de intensive care, spoedeisende hulp, COVID-afdelingen en ambulancemedewerkers

  // De daadwerkelijke groepen die in de prioriteits tabellen staan
  // Zorggevers:
  '': NaN, //Medewerkers directe COVID-zorg en ambulances: Pfizer
  '': NaN, //Zorgmedewerkers verpleeghuizen en kleinschalige woonvormen: Pfizer of AstraZeneca
  '': NaN, //Huisartsen en hun medewerkers: Moderna of AstraZeneca
  '': NaN, //Zorgmedewerkers klinische medisch specialistische revalidatie: AstraZeneca
  '': NaN, //Zorgmedewerkers gehandicaptenzorg: AstraZeneca
  '': NaN, //Zorgmedewerkers GGZ en GGZ-crisisdiensten: AstraZeneca
  '': NaN, //Zorgmedewerkers BES- en CAS-eilanden: Pfizer
  '': NaN, //Zorgmedewerkers wijkverpleging: AstraZeneca
  '': NaN, //Zorgmedewerkers Wmo-ondersteuning: AstraZeneca
  '': NaN, //Pgb-zorgverleners: AstraZeneca
  '': NaN, //Alle overige zorgmedewerkers: AstraZeneca
  // Zorgnemers:
  '': NaN, //Bewoners verpleeghuizen en mensen met een verstandelijke beperking in een instelling: Pfizer
  '': NaN, //Bewoners kleinschalige woonvormen en mensen met een verstandelijke beperking in een instelling: Pfizer of Moderna
  '': NaN, //Mobiele thuiswonenden vanaf 65 jaar: Pfizer
  '': NaN, //Thuiswonenden van 60-64 (van oud naar jong): AstraZeneca
  '': NaN, //Ouderen en zorgmedewerkers Waddeneilanden: Pfizer
  '': NaN, //Intramurale GGZ-cliënten: Moderna of AstraZeneca
  '': NaN, //Niet-mobiele thuiswonenden vanaf 65 jaar: Moderna
  '': NaN, //Mensen van 18-60 jaar met medische indicatie: Pfizer, Moderna of AstraZeneca
  '': NaN, //Inwoners St. Eustatius en Saba (alle bevolkingsgroepen): Moderna
  '': NaN, //Inwoners Bonaire ouder dan 60 jaar: Pfizer
  '': NaN, //Inwoners (overige) BES- en CAS-eilanden ouder dan 60 jaar: Pfizer
  '': NaN, //Inwoners (overige) BES- en CAS-eilanden van 18 - 60 jaar: AstraZeneca
  '': NaN, //Mensen van 50 tot en met 59 jaar en daarna van 18 tot en met 49 jaar zonder medische indicatie: AstraZeneca
};
