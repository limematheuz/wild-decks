const asset = (path, alt) => ({ path, alt });

export const LOGOS = {
  en: asset("/assets/logos/wild-decks.png", "Wild Decks"),
  es: asset("/assets/logos/barajas-salvajes.png", "Barajas Salvajes"),
  pt: asset("/assets/logos/baralhos-selvagens.png", "Baralhos Selvagens")
};

export const NUMBERED_CARD_BACKDROPS = {
  en: "/assets/cards/numbered-base-en.png",
  es: "/assets/cards/numbered-base-es.png",
  pt: "/assets/cards/numbered-base-pt.png"
};

export const CHARACTER_ART = {
  A: asset("/assets/cards/ace-herald-cutout.png", "The royal herald"),
  J: asset("/assets/cards/prince-cutout.png", "The prince"),
  Q: asset("/assets/cards/queen-cutout.png", "The queen"),
  K: asset("/assets/cards/king-cutout.png", "The king"),
  joker: asset("/assets/cards/joker-cutout.png", "The joker")
};

export const NUMBERED_RANKS = new Set(["2", "3", "4", "5", "6", "7", "8", "9", "10"]);

export function getCardBack(locale) {
  return {
    path: NUMBERED_CARD_BACKDROPS[locale] ?? NUMBERED_CARD_BACKDROPS.en,
    alt: "Wild Decks card back"
  };
}

export function getCardArt(rank, locale) {
  if (NUMBERED_RANKS.has(rank)) {
    return { path: NUMBERED_CARD_BACKDROPS[locale] ?? NUMBERED_CARD_BACKDROPS.en, alt: "Wild Decks card art", numbered: true };
  }

  return { ...(CHARACTER_ART[rank] ?? CHARACTER_ART.A), numbered: false };
}
