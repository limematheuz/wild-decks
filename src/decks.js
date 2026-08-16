export const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
export const SUITS = [
  { symbol: "♥", color: "red", name: "corazones" },
  { symbol: "♦", color: "red", name: "diamantes" },
  { symbol: "♣", color: "black", name: "treboles" },
  { symbol: "♠", color: "black", name: "picas" }
];

export const GAME_MODES = {
  clasico: {
    id: "clasico",
    label: "Barajas Clasicas",
    shortLabel: "CLASICAS",
    color: "blue",
    heroRank: "Q",
    description: "La suave: risas, bebida y caos moderado.",
    rulesTitle: "Reglas - Barajas Clasicas",
    rules: [
      "104 cartas, sin coringas. Roba una carta y cumple la accion.",
      "Si una carta crea una regla, se mantiene hasta que otra carta la sustituya.",
      "Si alguien se niega, la mesa decide una penitencia razonable.",
      "Alcohol solo para mayores de edad y siempre con responsabilidad."
    ],
    actions: {
      A: ["Elige tu victima", "Escoge a una persona para beber o contar algo que estaba evitando."],
      "2": ["Doble sentencia", "Elige dos personas: una bebe y la otra responde una pregunta de la mesa."],
      "3": ["Tres culpables", "Senala tres personas. Tienen 5 segundos para inventar una excusa creible."],
      "4": ["Stop raro", "Categoria absurda y letra. Quien repita, tarde o se bloquee, bebe."],
      "5": ["Memoria sucia", "Cada jugador repite la cadena y suma una palabra. Quien falle, bebe."],
      "6": ["Continencia", "Guarda la carta. Haz continencia cuando quieras; el ultimo en imitarte bebe."],
      "7": ["Pi", "Cuenta desde 1 cambiando multiplos de 3 por Pi. Quien falle, bebe."],
      "8": ["Regla general", "Crea una regla para todos hasta que otra regla la sustituya."],
      "9": ["Continencia turbo", "Guarda la carta. Cuando la uses, el ultimo en copiarte bebe dos sorbos."],
      "10": ["Cafofo", "Elige un tema. Cada persona dice un ejemplo sin repetir; quien se atasque bebe."],
      J: ["Principe del lado", "La persona a tu izquierda bebe y te hace una pregunta incomoda."],
      Q: ["Las reinas mandan", "Todos los hombres beben 3 tragos."],
      K: ["Rey del caos", "Todos obedecen una orden absurda del rey durante una ronda."]
    }
  },
  wild: {
    id: "wild",
    label: "Wild Decks",
    shortLabel: "WILD",
    color: "yellow",
    heroRank: "J",
    description: "La baraja que nadie deberia haber dejado suelta.",
    rulesTitle: "Reglas - Wild Decks",
    rules: [
      "Modo fuerte: preguntas incomodas, secretos suaves y retos para pasar verguenza.",
      "No se permite revelar datos sensibles de terceros ni presionar a nadie.",
      "Cada persona puede cambiar una carta por una penitencia pactada.",
      "La mesa manda, pero el consentimiento manda mas."
    ],
    actions: {
      A: ["Confesion express", "Cuenta algo que te daria verguenza que apareciera en una captura. Si pasas, bebes."],
      "2": ["Dos verdades", "Di dos verdades: una picante y una ridicula. La mesa vota cual fue peor."],
      "3": ["Ranking peligroso", "Ordena a tres personas de la mesa en una categoria elegida por los demas."],
      "4": ["Telefono boca abajo", "Deja el movil boca abajo hasta tu proximo turno. Si lo miras, bebes."],
      "5": ["Historia prohibida", "Cuenta la version corta de una noche que juraste no explicar."],
      "6": ["Actua normal", "Durante una ronda habla como si estuvieras en una entrevista de trabajo muy rara."],
      "7": ["Pi de secretos", "Cada multiplo de 3 se cambia por una mini-confesion. Quien falle, bebe."],
      "8": ["Regla toxica", "Crea una regla social ridicula: acento, palabra prohibida, pose o gesto obligatorio."],
      "9": ["Captura mental", "La mesa te hace una pregunta. Responde sin explicar demasiado o bebe dos sorbos."],
      "10": ["Cafofo salvaje", "Tema incomodo elegido por la mesa. Quien tarde mas de 5 segundos, bebe."],
      J: ["Principe del drama", "La persona a tu izquierda elige: verdad vergonzosa o reto escenico."],
      Q: ["Reina sin filtro", "La reina pregunta algo directo. Quien no quiera responder, brinda por la cobardia."],
      K: ["Rey del secreto", "Todos cuentan un secreto pequeno. El rey elige el mas sospechoso y esa persona bebe."]
    }
  }
};

export function createDeck(modeId = "clasico") {
  const mode = GAME_MODES[modeId] ?? GAME_MODES.clasico;
  const cards = [];

  for (let copy = 1; copy <= 2; copy += 1) {
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        const [title, action] = mode.actions[rank];
        cards.push({
          id: `${mode.id}-${copy}-${rank}${suit.symbol}`,
          rank,
          suit: suit.symbol,
          suitColor: suit.color,
          title,
          action,
          mode: mode.id
        });
      }
    }
  }

  return cards;
}

export function drawRandomCard(deck, random = Math.random) {
  if (!deck.length) return { card: null, deck };
  const nextDeck = [...deck];
  const index = Math.floor(random() * nextDeck.length);
  const [card] = nextDeck.splice(index, 1);
  return { card, deck: nextDeck };
}
