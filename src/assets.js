const characters = {
  A: ["A.png", "El Capo del Vaso"],
  "2": ["2.png", "Lola Lata"],
  "3": ["3.png", "Pablito Pop"],
  "4": ["4.png", "Tia Stop"],
  "5": ["5.png", "Memo Moco"],
  "6": ["6.png", "Marinero Miki"],
  "7": ["7.png", "Pili Pi"],
  "8": ["8.png", "Regla Rolo"],
  "9": ["9.png", "Nando Nueve"],
  "10": ["10.png", "Dani Disco"],
  J: ["J.png", "Jota Joy"],
  Q: ["Q.png", "Reina Rosi"],
  K: ["K.png", "Rey Rufi"]
};

export const CHARACTER_ART = Object.fromEntries(
  Object.entries(characters).map(([rank, [file, label]]) => [rank, { src: `/assets/cards/${file}`, label }])
);
