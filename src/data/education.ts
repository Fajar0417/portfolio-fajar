export interface Education {
  id: string;

  degreeKey: string;
  levelKey: string;
  majorKey: string;
  schoolKey: string;
  locationKey: string;
  periodKey: string;
  durationKey: string;
  descriptionKey: string;

  achievementsKeys: string[];

  logo: string;
}

export const educations: Education[] = [
  {
    id: "smkn1kawali",

    degreeKey: "items.smkn1.degree",

    levelKey: "items.smkn1.level",

    majorKey: "items.smkn1.major",

    schoolKey: "items.smkn1.school",

    locationKey: "items.smkn1.location",

    periodKey: "items.smkn1.period",

    durationKey: "items.smkn1.duration",

    descriptionKey: "items.smkn1.description",

    achievementsKeys: [
      "items.smkn1.achievements.0",
      "items.smkn1.achievements.1",
      "items.smkn1.achievements.2",
      "items.smkn1.achievements.3",
      "items.smkn1.achievements.4",
    ],

    logo: "/images/logos/smk.jpeg",
  },
];