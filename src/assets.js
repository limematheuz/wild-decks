export const ASSETS = {
  board: "/assets/barajas-style-board.jpeg",
  queen: "/assets/queen-card-reference.png",
  wildCard: "/assets/wild-card-reference.png",
  homeWide: "/assets/home-wide-reference.png",
  deckWide: "/assets/deck-wide-reference.png"
};

export const CHARACTER_ART = {
  A: { src: ASSETS.board, position: "12% 52%", label: "la fiestera del caos" },
  "2": { src: ASSETS.board, position: "64% 40%", label: "el principe con cerveza" },
  "3": { src: ASSETS.board, position: "77% 52%", label: "el pelirrojo alarmado" },
  "4": { src: ASSETS.board, position: "20% 74%", label: "la carta voladora" },
  "5": { src: ASSETS.board, position: "50% 42%", label: "el bocazas" },
  "6": { src: ASSETS.deckWide, position: "57% 44%", label: "la bailarina secreta" },
  "7": { src: ASSETS.deckWide, position: "41% 36%", label: "el corredor perdido" },
  "8": { src: ASSETS.board, position: "28% 42%", label: "la reina del desastre" },
  "9": { src: ASSETS.deckWide, position: "82% 60%", label: "el colega del brindis" },
  "10": { src: ASSETS.homeWide, position: "52% 46%", label: "el trio culpable" },
  J: { src: ASSETS.wildCard, position: "50% 16%", label: "el principe salvaje" },
  Q: { src: ASSETS.queen, position: "50% 18%", label: "la reina bebada" },
  K: { src: ASSETS.deckWide, position: "38% 38%", label: "el rey del cafofo" }
};
