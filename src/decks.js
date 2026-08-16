export const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
export const SUITS = [
  { symbol: "♥", color: "red", name: "hearts" },
  { symbol: "♦", color: "red", name: "diamonds" },
  { symbol: "♣", color: "black", name: "clubs" },
  { symbol: "♠", color: "black", name: "spades" }
];

export const GAME_MODES = {
  clasico: { id: "clasico", color: "blue", heroRank: "A" },
  wild: { id: "wild", color: "pink", heroRank: "joker" }
};

const classicActions = {
  A: ["Choose one", "Choose 1 person to drink."],
  "2": ["Choose two", "Choose 2 people to drink."],
  "3": ["Choose three", "Choose 3 people to drink."],
  "4": ["Stop", "Pick a category and a letter. Give the first answer; go around the table. Whoever freezes or repeats drinks."],
  "5": ["Memory", "Say a word. Each player repeats the full sequence and adds one new word. Miss the sequence and drink."],
  "6": ["Salute", "Keep the card. Salute secretly whenever you want; the last person to notice and copy drinks."],
  "7": ["Pi", "Count aloud from 1, replacing each multiple of 3 with Pi. Mistakes drink."],
  "8": ["House rule", "Create a rule for everyone until another rule replaces it. Anyone who breaks it drinks."],
  "9": ["Salute", "Keep the card. Use it whenever you want; the last person to copy the salute drinks."],
  "10": ["Cafofo", "Choose a topic. Everyone gives one answer without repeating; whoever freezes drinks."],
  J: ["Prince's neighbour", "The player on the left drinks one shot."],
  Q: ["Queens rule", "All women at the table drink one shot."],
  K: ["King's decree", "All men at the table drink one shot."]
};

const wildActions = {
  A: ["Fast confession", "Tell the table something that would be painful to see in a screenshot. Pass, and drink."],
  "2": ["Two truths", "Give two truths: one spicy, one ridiculous. The table votes for the worst."],
  "3": ["Danger ranking", "Rank three players in a category chosen by the group."],
  "4": ["Phone down", "Leave your phone face-down until your next turn. Look at it and drink."],
  "5": ["Forbidden story", "Tell the short version of a night you swore not to explain."],
  "6": ["Act normal", "For one round, speak as if you are in a very strange job interview."],
  "7": ["Secret Pi", "Replace every multiple of 3 with a tiny confession. Make a mistake and drink."],
  "8": ["Wild rule", "Create an absurd social rule: accent, banned word, pose or gesture."],
  "9": ["Mental screenshot", "Answer the table's question without overexplaining, or drink two sips."],
  "10": ["Wild cafofo", "The group picks an awkward topic. More than five seconds of silence means a drink."],
  J: ["Prince of drama", "The player on your left chooses: embarrassing truth or stage challenge."],
  Q: ["No-filter queen", "The queen asks something direct. Anyone who passes raises a toast to cowardice."],
  K: ["Secret king", "Everyone shares a small secret. The king chooses the most suspicious player to drink."]
};

const translatedActions = (actions, locale) => {
  if (locale === "en") return actions;
  const suffix = locale === "pt" ? " Beba se preferir passar." : " Bebe si prefieres pasar.";
  return Object.fromEntries(Object.entries(actions).map(([rank, [title, action]]) => [rank, [title, `${action}${suffix}`]]));
};

export const COPY = {
  en: {
    appName: "WILD DECKS", start: "Start the mess", rules: "Rules", selectDeck: "Choose your deck", play: "Play", draw: "Draw card", remaining: "left", menu: "Menu", reset: "Reset deck", exit: "Exit", close: "Close", ready: "Pick your poison", initialRule: "Draw a card. The consequence appears below it.", ageQuestion: "Are you 18 or older?", ageCopy: "This game can involve alcohol. Play responsibly and respect local law.", yes: "I am 18+", no: "No",
    modes: {
      clasico: { label: "SUECA BEBADA", description: "The classic drinking deck. Two decks, 104 cards, no jokers.", rulesTitle: "Sueca Bebada rules", rules: ["Play with two full decks: 104 cards, no jokers.", "Nobody leaves the game in the middle of a round.", "Draw a card and complete the action shown.", "Drink responsibly; non-alcoholic alternatives count too."], actions: classicActions },
      wild: { label: "WILD DECKS", description: "The louder deck: messy confessions and chaotic challenges.", rulesTitle: "Wild Decks rules", rules: ["Harder questions and awkward challenges, never pressure.", "No personal data or secrets about people who are not playing.", "Anyone may swap a card for a table-approved penalty.", "Consent wins every round."], actions: wildActions }
    }
  },
  es: {
    appName: "BARAJAS SALVAJES", start: "Empezar el caos", rules: "Normas", selectDeck: "Elige tu baraja", play: "Jugar", draw: "Tirar carta", remaining: "restantes", menu: "Menu", reset: "Reiniciar baraja", exit: "Salir", close: "Cerrar", ready: "Elige tu veneno", initialRule: "Tira una carta. La consecuencia aparece debajo.", ageQuestion: "Tienes 18 anos?", ageCopy: "Este juego puede incluir alcohol. Juega con responsabilidad y respeta la ley local.", yes: "Si, 18+", no: "No",
    modes: {
      clasico: { label: "SUECA BEBADA", description: "La clasica de beber. Dos barajas, 104 cartas, sin comodines.", rulesTitle: "Reglas de Sueca Bebada", rules: ["Se juega con dos barajas completas: 104 cartas y sin comodines.", "Nadie sale de la partida a mitad de una ronda.", "Tira una carta y cumple la accion que aparece.", "Bebe con responsabilidad; vale una alternativa sin alcohol."], actions: translatedActions(classicActions, "es") },
      wild: { label: "BARAJAS SALVAJES", description: "La baraja ruidosa: confesiones incomodas y retos de caos.", rulesTitle: "Reglas de Barajas Salvajes", rules: ["Preguntas mas duras y retos incomodos, sin presionar a nadie.", "No reveles datos ni secretos de gente que no juega.", "Cualquiera puede cambiar una carta por una penitencia pactada.", "El consentimiento manda en cada ronda."], actions: translatedActions(wildActions, "es") }
    }
  },
  pt: {
    appName: "BARALHOS SELVAGENS", start: "Comecar o caos", rules: "Regras", selectDeck: "Escolhe o baralho", play: "Jogar", draw: "Tirar carta", remaining: "restantes", menu: "Menu", reset: "Reiniciar baralho", exit: "Sair", close: "Fechar", ready: "Escolhe o veneno", initialRule: "Tira uma carta. A consequencia aparece abaixo.", ageQuestion: "Tens 18 anos ou mais?", ageCopy: "Este jogo pode incluir alcool. Joga com responsabilidade e respeita a lei local.", yes: "Tenho 18+", no: "Nao",
    modes: {
      clasico: { label: "SUECA BEBADA", description: "A versao de bebida. Dois baralhos, 104 cartas, sem coringas.", rulesTitle: "Regras - Sueca Bebada", rules: ["Versao de bebida da sueca, jogada com 2 baralhos completos: 104 cartas e sem coringas.", "Regra de ouro: ninguem pode sair do jogo em nenhum momento.", "Tira uma carta no app e faz a acao apresentada.", "Joga com responsabilidade; bebida sem alcool tambem vale."], actions: translatedActions(classicActions, "pt") },
      wild: { label: "BARALHOS SELVAGENS", description: "O baralho mais pesado: segredos, desafios e caos.", rulesTitle: "Regras - Baralhos Selvagens", rules: ["Perguntas mais fortes e desafios vergonhosos, sem pressionar ninguem.", "Nao exponhas dados ou segredos de quem nao esta a jogar.", "Qualquer pessoa pode trocar uma carta por uma prenda combinada.", "Consentimento manda em todas as rondas."], actions: translatedActions(wildActions, "pt") }
    }
  }
};

export function getCopy(locale = "en") { return COPY[locale] ?? COPY.en; }
export function getModeCopy(modeId, locale = "en") { return getCopy(locale).modes[(GAME_MODES[modeId] ?? GAME_MODES.clasico).id]; }

export function createDeck(modeId = "clasico", locale = "en") {
  const mode = GAME_MODES[modeId] ?? GAME_MODES.clasico;
  const actions = getModeCopy(mode.id, locale).actions;
  const cards = [];
  for (let copy = 1; copy <= 2; copy += 1) {
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        const [title, action] = actions[rank];
        cards.push({ id: `${mode.id}-${copy}-${rank}${suit.symbol}`, rank, suit: suit.symbol, suitColor: suit.color, title, action, mode: mode.id });
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
