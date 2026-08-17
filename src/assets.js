const asset = (path, alt) => ({ path, alt });

export const LOGOS = {
  en: asset("/assets/logos/wild-decks.png", "Wild Decks"),
  es: asset("/assets/logos/barajas-salvajes.png", "Barajas Salvajes"),
  pt: asset("/assets/logos/baralhos-selvagens.png", "Baralhos Selvagens")
};

export const CHARACTER_ART = {
  A: asset("/assets/cards/ace-herald-cutout.png", "The royal herald"),
  J: asset("/assets/cards/prince-cutout.png", "The prince"),
  Q: asset("/assets/cards/queen-cutout.png", "The queen"),
  K: asset("/assets/cards/king-cutout.png", "The king"),
  joker: asset("/assets/cards/joker-cutout.png", "The joker")
};

export const MODE_ART = {
  clasico: asset("/assets/cards/swedish-mode.png", "The queen rules the classic deck"),
  wild: asset("/assets/cards/wild-mode.png", "The prince brings chaos to the wild deck")
};

export const NUMBERED_RANKS = new Set(["2", "3", "4", "5", "6", "7", "8", "9", "10"]);

export function getCardBack(locale) {
  return {
    path: (LOGOS[locale] ?? LOGOS.en).path,
    alt: "Wild Decks card back"
  };
}

export function getCardArt(rank, locale) {
  if (NUMBERED_RANKS.has(rank)) {
    return { path: (LOGOS[locale] ?? LOGOS.en).path, alt: "Wild Decks card art", numbered: true };
  }

  return { ...(CHARACTER_ART[rank] ?? CHARACTER_ART.A), numbered: false };
}
