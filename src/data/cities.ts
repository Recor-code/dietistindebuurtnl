// Data for the 100 largest Dutch cities and 50 largest Belgian cities
export interface CityData {
  name: string;
  slug: string;
  province: string;
  country: 'NL' | 'BE';
  population: number;
  latitude: number;
  longitude: number;
}

export const dutchCities: CityData[] = [
  // Top 20 largest cities
  { name: 'Amsterdam', slug: 'amsterdam', province: 'Noord-Holland', country: 'NL', population: 931298, latitude: 52.3676, longitude: 4.9041 },
  { name: 'Rotterdam', slug: 'rotterdam', province: 'Zuid-Holland', country: 'NL', population: 670610, latitude: 51.9244, longitude: 4.4777 },
  { name: 'Den Haag', slug: 'den-haag', province: 'Zuid-Holland', country: 'NL', population: 566221, latitude: 52.0705, longitude: 4.3007 },
  { name: 'Utrecht', slug: 'utrecht', province: 'Utrecht', country: 'NL', population: 374238, latitude: 52.0907, longitude: 5.1214 },
  { name: 'Eindhoven', slug: 'eindhoven', province: 'Noord-Brabant', country: 'NL', population: 246417, latitude: 51.4416, longitude: 5.4697 },
  { name: 'Groningen', slug: 'groningen', province: 'Groningen', country: 'NL', population: 243768, latitude: 53.2194, longitude: 6.5665 },
  { name: 'Tilburg', slug: 'tilburg', province: 'Noord-Brabant', country: 'NL', population: 229836, latitude: 51.5555, longitude: 5.0913 },
  { name: 'Almere', slug: 'almere', province: 'Flevoland', country: 'NL', population: 226500, latitude: 52.3508, longitude: 5.2647 },
  { name: 'Breda', slug: 'breda', province: 'Noord-Brabant', country: 'NL', population: 188078, latitude: 51.5719, longitude: 4.7683 },
  { name: 'Nijmegen', slug: 'nijmegen', province: 'Gelderland', country: 'NL', population: 187049, latitude: 51.8426, longitude: 5.8518 },
  { name: 'Apeldoorn', slug: 'apeldoorn', province: 'Gelderland', country: 'NL', population: 168211, latitude: 52.2112, longitude: 5.9699 },
  { name: 'Haarlem', slug: 'haarlem', province: 'Noord-Holland', country: 'NL', population: 167636, latitude: 52.3873, longitude: 4.6462 },
  { name: 'Arnhem', slug: 'arnhem', province: 'Gelderland', country: 'NL', population: 167632, latitude: 51.9851, longitude: 5.8987 },
  { name: 'Haarlemmermeer', slug: 'haarlemmermeer', province: 'Noord-Holland', country: 'NL', population: 163128, latitude: 52.3030, longitude: 4.6890 },
  { name: 'Amersfoort', slug: 'amersfoort', province: 'Utrecht', country: 'NL', population: 161852, latitude: 52.1561, longitude: 5.3878 },
  { name: 'Enschede', slug: 'enschede', province: 'Overijssel', country: 'NL', population: 161738, latitude: 52.2215, longitude: 6.8937 },
  { name: 'Zaanstad', slug: 'zaanstad', province: 'Noord-Holland', country: 'NL', population: 161389, latitude: 52.4391, longitude: 4.8170 },
  { name: "'s-Hertogenbosch", slug: 's-hertogenbosch', province: 'Noord-Brabant', country: 'NL', population: 160757, latitude: 51.6978, longitude: 5.3037 },
  { name: 'Zwolle', slug: 'zwolle', province: 'Overijssel', country: 'NL', population: 133141, latitude: 52.5168, longitude: 6.0830 },
  { name: 'Leeuwarden', slug: 'leeuwarden', province: 'Friesland', country: 'NL', population: 128810, latitude: 53.2012, longitude: 5.8086 },

  // Cities 21-40
  { name: 'Maastricht', slug: 'maastricht', province: 'Limburg', country: 'NL', population: 122378, latitude: 50.8514, longitude: 5.6910 },
  { name: 'Leiden', slug: 'leiden', province: 'Zuid-Holland', country: 'NL', population: 119713, latitude: 52.1601, longitude: 4.4970 },
  { name: 'Dordrecht', slug: 'dordrecht', province: 'Zuid-Holland', country: 'NL', population: 119260, latitude: 51.8133, longitude: 4.6900 },
  { name: 'Zoetermeer', slug: 'zoetermeer', province: 'Zuid-Holland', country: 'NL', population: 115845, latitude: 52.0575, longitude: 4.4933 },
  { name: 'Alkmaar', slug: 'alkmaar', province: 'Noord-Holland', country: 'NL', population: 94853, latitude: 52.6326, longitude: 4.7482 },
  { name: 'Deventer', slug: 'deventer', province: 'Overijssel', country: 'NL', population: 97331, latitude: 52.2551, longitude: 6.1639 },
  { name: 'Delft', slug: 'delft', province: 'Zuid-Holland', country: 'NL', population: 95060, latitude: 52.0116, longitude: 4.3571 },
  { name: 'Heerlen', slug: 'heerlen', province: 'Limburg', country: 'NL', population: 93084, latitude: 50.8833, longitude: 5.9667 },
  { name: 'Venlo', slug: 'venlo', province: 'Limburg', country: 'NL', population: 92403, latitude: 51.3704, longitude: 6.1724 },
  { name: 'Hilversum', slug: 'hilversum', province: 'Noord-Holland', country: 'NL', population: 83640, latitude: 52.2242, longitude: 5.1758 },
  { name: 'Hengelo', slug: 'hengelo', province: 'Overijssel', country: 'NL', population: 80809, latitude: 52.2667, longitude: 6.7944 },
  { name: 'Amstelveen', slug: 'amstelveen', province: 'Noord-Holland', country: 'NL', population: 79639, latitude: 52.3008, longitude: 4.8639 },
  { name: 'Roosendaal', slug: 'roosendaal', province: 'Noord-Brabant', country: 'NL', population: 77725, latitude: 51.5308, longitude: 4.4653 },
  { name: 'Purmerend', slug: 'purmerend', province: 'Noord-Holland', country: 'NL', population: 76745, latitude: 52.5051, longitude: 4.9592 },
  { name: 'Oss', slug: 'oss', province: 'Noord-Brabant', country: 'NL', population: 76430, latitude: 51.7659, longitude: 5.5153 },
  { name: 'Schiedam', slug: 'schiedam', province: 'Zuid-Holland', country: 'NL', population: 75438, latitude: 51.9200, longitude: 4.3897 },
  { name: 'Spijkenisse', slug: 'spijkenisse', province: 'Zuid-Holland', country: 'NL', population: 74988, latitude: 51.8447, longitude: 4.3289 },
  { name: 'Helmond', slug: 'helmond', province: 'Noord-Brabant', country: 'NL', population: 74740, latitude: 51.4816, longitude: 5.6619 },
  { name: 'Vlaardingen', slug: 'vlaardingen', province: 'Zuid-Holland', country: 'NL', population: 73798, latitude: 51.9133, longitude: 4.3417 },
  { name: 'Almelo', slug: 'almelo', province: 'Overijssel', country: 'NL', population: 72725, latitude: 52.3508, longitude: 6.6597 },

  // Cities 41-60
  { name: 'Gouda', slug: 'gouda', province: 'Zuid-Holland', country: 'NL', population: 71952, latitude: 52.0115, longitude: 4.7077 },
  { name: 'Lelystad', slug: 'lelystad', province: 'Flevoland', country: 'NL', population: 70741, latitude: 52.5184, longitude: 5.4755 },
  { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn', province: 'Zuid-Holland', country: 'NL', population: 70251, latitude: 52.1301, longitude: 4.6581 },
  { name: 'Hoorn', slug: 'hoorn', province: 'Noord-Holland', country: 'NL', population: 68852, latitude: 52.6425, longitude: 5.0597 },
  { name: 'Ede', slug: 'ede', province: 'Gelderland', country: 'NL', population: 67670, latitude: 52.0408, longitude: 5.6672 },
  { name: 'Bergen op Zoom', slug: 'bergen-op-zoom', province: 'Noord-Brabant', country: 'NL', population: 66256, latitude: 51.4947, longitude: 4.2928 },
  { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel', province: 'Zuid-Holland', country: 'NL', population: 65255, latitude: 51.9289, longitude: 4.5769 },
  { name: 'Assen', slug: 'assen', province: 'Drenthe', country: 'NL', population: 62237, latitude: 52.9925, longitude: 6.5649 },
  { name: 'Nieuwegein', slug: 'nieuwegein', province: 'Utrecht', country: 'NL', population: 61489, latitude: 52.0292, longitude: 5.0944 },
  { name: 'Veenendaal', slug: 'veenendaal', province: 'Utrecht', country: 'NL', population: 61271, latitude: 52.0283, longitude: 5.5558 },
  { name: 'Zeist', slug: 'zeist', province: 'Utrecht', country: 'NL', population: 60949, latitude: 52.0892, longitude: 5.2308 },
  { name: 'Den Helder', slug: 'den-helder', province: 'Noord-Holland', country: 'NL', population: 59569, latitude: 52.9597, longitude: 4.7556 },
  { name: 'Hardenberg', slug: 'hardenberg', province: 'Overijssel', country: 'NL', population: 57909, latitude: 52.5761, longitude: 6.6194 },
  { name: 'Emmen', slug: 'emmen', province: 'Drenthe', country: 'NL', population: 57010, latitude: 52.7797, longitude: 6.9069 },
  { name: 'Oosterhout', slug: 'oosterhout', province: 'Noord-Brabant', country: 'NL', population: 53107, latitude: 51.6453, longitude: 4.8608 },
  { name: 'Doetinchem', slug: 'doetinchem', province: 'Gelderland', country: 'NL', population: 49906, latitude: 51.9656, longitude: 6.2886 },
  { name: 'Kerkrade', slug: 'kerkrade', province: 'Limburg', country: 'NL', population: 49777, latitude: 50.8656, longitude: 6.0619 },
  { name: 'Kampen', slug: 'kampen', province: 'Overijssel', country: 'NL', population: 48980, latitude: 52.5553, longitude: 5.9117 },
  { name: 'Weert', slug: 'weert', province: 'Limburg', country: 'NL', population: 48662, latitude: 51.2508, longitude: 5.7069 },
  { name: 'Woerden', slug: 'woerden', province: 'Utrecht', country: 'NL', population: 48431, latitude: 52.0853, longitude: 4.8833 },

  // Cities 61-80
  { name: 'Heerhugowaard', slug: 'heerhugowaard', province: 'Noord-Holland', country: 'NL', population: 47580, latitude: 52.6708, longitude: 4.8506 },
  { name: 'Rijswijk', slug: 'rijswijk', province: 'Zuid-Holland', country: 'NL', population: 47299, latitude: 52.0375, longitude: 4.3281 },
  { name: 'Middelburg', slug: 'middelburg', province: 'Zeeland', country: 'NL', population: 46485, latitude: 51.4989, longitude: 3.6139 },
  { name: 'Emmeloord', slug: 'emmeloord', province: 'Flevoland', country: 'NL', population: 46409, latitude: 52.7108, longitude: 5.7497 },
  { name: 'Zwijndrecht', slug: 'zwijndrecht', province: 'Zuid-Holland', country: 'NL', population: 45696, latitude: 51.8175, longitude: 4.6356 },
  { name: 'Waalwijk', slug: 'waalwijk', province: 'Noord-Brabant', country: 'NL', population: 45610, latitude: 51.6833, longitude: 5.0639 },
  { name: 'Huizen', slug: 'huizen', province: 'Noord-Holland', country: 'NL', population: 45292, latitude: 52.3014, longitude: 5.2417 },
  { name: 'Vlissingen', slug: 'vlissingen', province: 'Zeeland', country: 'NL', population: 45273, latitude: 51.4425, longitude: 3.5739 },
  { name: 'Ridderkerk', slug: 'ridderkerk', province: 'Zuid-Holland', country: 'NL', population: 45189, latitude: 51.8711, longitude: 4.6003 },
  { name: 'Soest', slug: 'soest', province: 'Utrecht', country: 'NL', population: 45021, latitude: 52.1736, longitude: 5.2928 },
  { name: 'Roermond', slug: 'roermond', province: 'Limburg', country: 'NL', population: 44975, latitude: 51.1944, longitude: 5.9875 },
  { name: 'Drachten', slug: 'drachten', province: 'Friesland', country: 'NL', population: 44537, latitude: 53.1125, longitude: 6.0989 },
  { name: 'Heerenveen', slug: 'heerenveen', province: 'Friesland', country: 'NL', population: 43094, latitude: 52.9597, longitude: 5.9197 },
  { name: 'Medemblik', slug: 'medemblik', province: 'Noord-Holland', country: 'NL', population: 41500, latitude: 52.7706, longitude: 5.1058 },
  { name: 'Tiel', slug: 'tiel', province: 'Gelderland', country: 'NL', population: 40702, latitude: 51.8856, longitude: 5.4306 },
  { name: 'Harderwijk', slug: 'harderwijk', province: 'Gelderland', country: 'NL', population: 40516, latitude: 52.3411, longitude: 5.6197 },
  { name: 'Venray', slug: 'venray', province: 'Limburg', country: 'NL', population: 39047, latitude: 51.5267, longitude: 5.9717 },
  { name: 'Hoogeveen', slug: 'hoogeveen', province: 'Drenthe', country: 'NL', population: 38754, latitude: 52.7253, longitude: 6.4764 },
  { name: 'Barendrecht', slug: 'barendrecht', province: 'Zuid-Holland', country: 'NL', population: 38672, latitude: 51.8581, longitude: 4.5347 },
  { name: 'Nijkerk', slug: 'nijkerk', province: 'Gelderland', country: 'NL', population: 38335, latitude: 52.2217, longitude: 5.4858 },

  // Cities 81-100
  { name: 'Beverwijk', slug: 'beverwijk', province: 'Noord-Holland', country: 'NL', population: 37585, latitude: 52.4819, longitude: 4.6564 },
  { name: 'Goes', slug: 'goes', province: 'Zeeland', country: 'NL', population: 36931, latitude: 51.5042, longitude: 3.8886 },
  { name: 'Zutphen', slug: 'zutphen', province: 'Gelderland', country: 'NL', population: 36188, latitude: 52.1383, longitude: 6.2014 },
  { name: 'Heemskerk', slug: 'heemskerk', province: 'Noord-Holland', country: 'NL', population: 36170, latitude: 52.5097, longitude: 4.6689 },
  { name: 'Wageningen', slug: 'wageningen', province: 'Gelderland', country: 'NL', population: 35433, latitude: 51.9700, longitude: 5.6658 },
  { name: 'Castricum', slug: 'castricum', province: 'Noord-Holland', country: 'NL', population: 35256, latitude: 52.5458, longitude: 4.6592 },
  { name: 'Gorinchem', slug: 'gorinchem', province: 'Zuid-Holland', country: 'NL', population: 34736, latitude: 51.8306, longitude: 4.9731 },
  { name: 'Uden', slug: 'uden', province: 'Noord-Brabant', country: 'NL', population: 34601, latitude: 51.6614, longitude: 5.6189 },
  { name: 'IJsselstein', slug: 'ijsselstein', province: 'Utrecht', country: 'NL', population: 33886, latitude: 52.0203, longitude: 5.0431 },
  { name: 'Epe', slug: 'epe', province: 'Gelderland', country: 'NL', population: 33385, latitude: 52.3469, longitude: 5.9833 },
  { name: 'Sneek', slug: 'sneek', province: 'Friesland', country: 'NL', population: 32811, latitude: 53.0303, longitude: 5.6581 },
  { name: 'Maassluis', slug: 'maassluis', province: 'Zuid-Holland', country: 'NL', population: 32780, latitude: 51.9236, longitude: 4.2506 },
  { name: 'Wijchen', slug: 'wijchen', province: 'Gelderland', country: 'NL', population: 32693, latitude: 51.8108, longitude: 5.7278 },
  { name: 'Papendrecht', slug: 'papendrecht', province: 'Zuid-Holland', country: 'NL', population: 31621, latitude: 51.8350, longitude: 4.6886 },
  { name: 'Oldenzaal', slug: 'oldenzaal', province: 'Overijssel', country: 'NL', population: 31410, latitude: 52.3122, longitude: 6.9281 },
  { name: 'Bussum', slug: 'bussum', province: 'Noord-Holland', country: 'NL', population: 31334, latitude: 52.2722, longitude: 5.1608 },
  { name: 'Valkenswaard', slug: 'valkenswaard', province: 'Noord-Brabant', country: 'NL', population: 31071, latitude: 51.3508, longitude: 5.4606 },
  { name: 'Meppel', slug: 'meppel', province: 'Drenthe', country: 'NL', population: 30697, latitude: 52.6953, longitude: 6.1944 },
  { name: 'Winterswijk', slug: 'winterswijk', province: 'Gelderland', country: 'NL', population: 29623, latitude: 51.9675, longitude: 6.7206 },
  { name: 'Boxtel', slug: 'boxtel', province: 'Noord-Brabant', country: 'NL', population: 29511, latitude: 51.5911, longitude: 5.3278 }
];

export const belgianCities: CityData[] = [
  { name: 'Brussel', slug: 'brussel', province: 'Brussels Hoofdstedelijk Gewest', country: 'BE', population: 1218255, latitude: 50.8503, longitude: 4.3517 },
  { name: 'Antwerpen', slug: 'antwerpen', province: 'Antwerpen', country: 'BE', population: 529247, latitude: 51.2194, longitude: 4.4025 },
  { name: 'Gent', slug: 'gent', province: 'Oost-Vlaanderen', country: 'BE', population: 262219, latitude: 51.0500, longitude: 3.7303 },
  { name: 'Charleroi', slug: 'charleroi', province: 'Henegouwen', country: 'BE', population: 201816, latitude: 50.4108, longitude: 4.4446 },
  { name: 'Luik', slug: 'luik', province: 'Luik', country: 'BE', population: 197355, latitude: 50.6326, longitude: 5.5797 },
  { name: 'Brugge', slug: 'brugge', province: 'West-Vlaanderen', country: 'BE', population: 118284, latitude: 51.2085, longitude: 3.2254 },
  { name: 'Namen', slug: 'namen', province: 'Namen', country: 'BE', population: 111300, latitude: 50.4674, longitude: 4.8720 },
  { name: 'Leuven', slug: 'leuven', province: 'Vlaams-Brabant', country: 'BE', population: 103000, latitude: 50.8798, longitude: 4.7005 },
  { name: 'Bergen', slug: 'bergen', province: 'Henegouwen', country: 'BE', population: 93259, latitude: 50.4541, longitude: 3.9517 },
  { name: 'Mechelen', slug: 'mechelen', province: 'Antwerpen', country: 'BE', population: 86921, latitude: 51.0259, longitude: 4.4777 },
  { name: 'Aalst', slug: 'aalst', province: 'Oost-Vlaanderen', country: 'BE', population: 85638, latitude: 50.9368, longitude: 4.0397 },
  { name: 'La Louvière', slug: 'la-louviere', province: 'Henegouwen', country: 'BE', population: 79844, latitude: 50.4792, longitude: 4.1878 },
  { name: 'Kortrijk', slug: 'kortrijk', province: 'West-Vlaanderen', country: 'BE', population: 76265, latitude: 50.8281, longitude: 3.2648 },
  { name: 'Hasselt', slug: 'hasselt', province: 'Limburg', country: 'BE', population: 79073, latitude: 50.9307, longitude: 5.3378 },
  { name: 'Sint-Niklaas', slug: 'sint-niklaas', province: 'Oost-Vlaanderen', country: 'BE', population: 78549, latitude: 51.1657, longitude: 4.1431 },
  // Add more Belgian cities to reach 50...
];

export const allCities = [...dutchCities, ...belgianCities];

// ADHD statistics templates for cities
export const adhdStatsTemplate = {
  prevalenceAdults: '4-6%',
  prevalenceChildren: '5-8%',
  waitingTimeAverageWeeks: 12,
  availableCoaches: 0, // Will be calculated based on actual coaches
  averageRating: 4.2,
  treatmentTypes: [
    'ADHD Coaching',
    'Gedragstherapie',
    'Medicatie begeleiding',
    'Psychoeducatie',
    'Ouder/partner coaching'
  ]
};

export const cityTldrTemplates = [
  'ADHD coach zoeken in {city}? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.',
  'Professionele ADHD ondersteuning in {city}. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.',
  'ADHD hulp in {city}: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.',
];

export function generateCityTldr(cityName: string): string {
  const template = cityTldrTemplates[Math.floor(Math.random() * cityTldrTemplates.length)];
  return template.replace('{city}', cityName);
}