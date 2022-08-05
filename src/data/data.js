import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    scientific: "Upupa epops",
    name: "Abubilla",
    rarity: "⭐⭐",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Upupa_epops_Madrid_02.jpg/330px-Upupa_epops_Madrid_02.jpg",
    description:
      "Su plumaje puede variar desde un pardo rosado a un canela oscuro o rojizo, con las alas y la cola listadas de blanco y negro. Tiene en la cabeza de un penacho de plumas desplegables como un abanico, pero casi siempre lo mantiene cerrado. Miden de 25 a 29 cm centímetros de largo, con 44 a 48 cm de envergadura de alas. Son inconfundibles, especialmente por el vuelo errático que es como el de una mariposa gigante.",
  },
  {
    id: uuidv4(),
    scientific: "Passer domesticus",
    name: "Gorrion",
    rarity: "⭐",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Huismus%2C_man.jpg/375px-Huismus%2C_man.jpg",
    description:
      "A pesar de ser una de las aves más comunes, sus niveles poblacionales están bajando de forma alarmante. Esto se debe más que todo a contaminación. Los machos de esta especie son mucho más llamativos. Tienen la cabeza negra o marrón brillante, mientras que la hembra y los jóvenes son de un pardo homogéneo. Son tan comunes que es muy probable que veas uno si te asomas a la ventana ahora mismo.",
  },
  {
    id: uuidv4(),
    scientific: "Erithacus rubecula",
    name: "Petirrojo Europeo",
    rarity: "⭐⭐",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/European_Robin_Singing.jpg/1280px-European_Robin_Singing.jpg",
    description:
      "El petirrojo es un pájaro sociable, atrevido y curioso que acostumbra a salir del bosque y plantarse a mitad de un camino para ver quién llega a su territorio, emitiendo su característica voz de alerta: un chip-chip metálico y seco. Su canto es un gorjeo musical, muy melódico, parecido al del ruiseñor.",
  },
  {
    id: uuidv4(),
    scientific: "Panurus biarmicus",
    name: "Bigotudo",
    rarity: "⭐⭐⭐",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bartmeise.JPG/375px-Bartmeise.JPG",
    description:
      "Esta pequeña ave es castaño anaranjada con cola larga y vuelo ondulante. El macho tiene cabeza gris y bigotes negros. Las bandadas a menudo delatan su presencia en un cañizal por su característica voz.",
  },
  {
    id: uuidv4(),
    scientific: "Aythia americana",
    name: "Porron de cabeza roja",
    rarity: "⭐⭐",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Redhead_duck_%28Aythya_americana%2C_male%29.jpg/375px-Redhead_duck_%28Aythya_americana%2C_male%29.jpg",
    description:
      "Los porrones de cabeza roja son aves migratorias que se reproducen en los pantanos, lagos y lagunas del noroeste de Norteamérica y la región de los Grandes Lagos. La pérdida de hábitat reproductivo ha conducido a una caída considerable de su población. Pasan los inviernos en el sur y este de los Estados Unidos, el norte de México y el Caribe. En raras ocasiones este migrador de largas distancias aparece como divagante en Europa occidental.",
  },
];

export default data;
