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

const classicActionsEs = {
  A: ["Elige a uno", "Elige a 1 persona para beber."],
  "2": ["Elige a dos", "Elige a 2 personas para beber."],
  "3": ["Elige a tres", "Elige a 3 personas para beber."],
  "4": ["Stop", "Elige una categoria y una letra. Da el primer ejemplo; seguid la ronda. Quien se bloquee o repita, bebe."],
  "5": ["Memoria", "Di una palabra. Cada jugador repite toda la cadena y suma una nueva. Quien falle, bebe."],
  "6": ["Continencia", "Guarda la carta. Saluda militarmente en secreto cuando quieras; el ultimo en notarlo e imitarte, bebe."],
  "7": ["Pi", "Cuenta desde 1 cambiando cada multiplo de 3 por Pi. Quien falle, bebe."],
  "8": ["Regla general", "Crea una regla para todos hasta que otra carta la sustituya. Quien la incumpla, bebe."],
  "9": ["Continencia", "Guarda la carta. Usala cuando quieras; el ultimo en imitarte, bebe."],
  "10": ["Cafofo", "Elige un tema. Todos dicen un ejemplo sin repetir; quien se bloquee, bebe."],
  J: ["Vecino del principe", "La persona a tu izquierda bebe un chupito."],
  Q: ["Las reinas mandan", "Todas las mujeres de la mesa beben un chupito."],
  K: ["Decreto del rey", "Todos los hombres de la mesa beben un chupito."]
};

const classicActionsPt = {
  A: ["Escolhe um", "Escolhe 1 pessoa para beber."],
  "2": ["Escolhe dois", "Escolhe 2 pessoas para beber."],
  "3": ["Escolhe tres", "Escolhe 3 pessoas para beber."],
  "4": ["Stop", "Escolhe uma categoria e uma letra. Da o primeiro exemplo; seguem em roda. Quem travar ou repetir, bebe."],
  "5": ["Memoria", "Diz uma palavra. Cada jogador repete tudo e acrescenta uma palavra. Quem errar a sequencia, bebe."],
  "6": ["Continencia", "Guarda a carta. Faz continencia escondido quando quiseres; o ultimo a reparar e imitar, bebe."],
  "7": ["Pi", "Conta a partir de 1, trocando cada multiplo de 3 por Pi. Quem errar bebe."],
  "8": ["Regra geral", "Cria uma regra para todos ate ser substituida. Quem a quebrar, bebe."],
  "9": ["Continencia", "Guarda a carta. Usa quando quiseres; o ultimo a imitar, bebe."],
  "10": ["Cafofo", "Escolhe um tema. Cada pessoa da um exemplo sem repetir; quem travar, bebe."],
  J: ["Vizinho do principe", "O jogador a tua esquerda bebe uma dose."],
  Q: ["As rainhas mandam", "Todas as mulheres da mesa bebem uma dose."],
  K: ["Decreto do rei", "Todos os homens da mesa bebem uma dose."]
};

const wildActions = {
  A: ["Spotlight", "Choose a player. They share an awkward but safe confession, or take 2 sips."],
  "2": ["Double receipt", "Choose two players. Each tells one bad decision; the table picks the messier one for 2 sips."],
  "3": ["Three-way dare", "Give three players a harmless 20-second pose or voice challenge. Anyone who refuses takes 2 sips."],
  "4": ["Phone down", "Leave your phone face-down until your next turn. Check it early and take 2 sips."],
  "5": ["Forbidden story", "Tell the short version of a night you swore not to explain. Pass and take 2 sips."],
  "6": ["Act normal", "For one round, speak as if you are in a very strange job interview. Break character: 1 sip."],
  "7": ["Secret Pi", "Count from 1. Replace multiples of 3 with a tiny confession. Miss one: 1 sip."],
  "8": ["Wild rule", "Create one absurd rule: accent, banned word, pose or gesture. Breaking it costs 1 sip."],
  "9": ["Mental screenshot", "Answer one direct question with a short answer. Pass is always allowed for 2 sips."],
  "10": ["Wild cafofo", "The group picks an awkward topic. Five seconds of silence, repetition or a pass costs 2 sips."],
  J: ["Prince of drama", "The player on your left chooses: an embarrassing truth or a safe stage challenge. Pass: 2 sips."],
  Q: ["No-filter queen", "Ask the table one direct but respectful question. Anyone may pass for 1 sip."],
  K: ["Secret king", "Everyone shares one harmless secret. The king picks the most suspicious answer for 2 sips."]
};

const wildActionsEs = {
  A: ["El foco", "Elige a una persona. Cuenta una confesion incomoda pero segura, o bebe 2 sorbos."],
  "2": ["Doble recibo", "Elige a dos personas. Cada una cuenta una mala decision; la mesa elige la peor para 2 sorbos."],
  "3": ["Reto de tres", "Da a tres personas un reto inocente de voz o pose durante 20 segundos. Quien no quiera, bebe 2 sorbos."],
  "4": ["Movil boca abajo", "Deja el movil boca abajo hasta tu siguiente turno. Si lo miras antes, bebes 2 sorbos."],
  "5": ["Historia prohibida", "Cuenta la version corta de una noche que juraste no explicar. Si pasas, bebes 2 sorbos."],
  "6": ["Actua normal", "Durante una ronda habla como si estuvieras en una entrevista muy rara. Si rompes el papel, bebe 1 sorbo."],
  "7": ["Pi secreto", "Cuenta desde 1. Cambia los multiplos de 3 por una mini confesion. Si fallas, bebe 1 sorbo."],
  "8": ["Regla salvaje", "Crea una regla absurda: acento, palabra prohibida, pose o gesto. Romperla cuesta 1 sorbo."],
  "9": ["Captura mental", "Responde una pregunta directa de forma corta. Puedes pasar bebiendo 2 sorbos."],
  "10": ["Cafofo salvaje", "La mesa elige un tema incomodo. Cinco segundos de silencio, repetir o pasar cuesta 2 sorbos."],
  J: ["Principe del drama", "La persona a tu izquierda elige: verdad vergonzosa o reto escenico seguro. Pasar cuesta 2 sorbos."],
  Q: ["Reina sin filtro", "Haz a la mesa una pregunta directa pero respetuosa. Cualquiera puede pasar por 1 sorbo."],
  K: ["Rey del secreto", "Todos cuentan un secreto inofensivo. El rey elige el mas sospechoso para 2 sorbos."]
};

const wildActionsPt = {
  A: ["No holofote", "Escolhe uma pessoa. Ela conta uma confissao constrangedora mas segura, ou bebe 2 goles."],
  "2": ["Recibo duplo", "Escolhe duas pessoas. Cada uma conta uma ma decisao; a mesa escolhe a pior para 2 goles."],
  "3": ["Desafio de tres", "Da a tres pessoas um desafio inocente de voz ou pose por 20 segundos. Quem nao quiser bebe 2 goles."],
  "4": ["Telemovel virado", "Deixa o telemovel virado ate ao proximo turno. Se olhares antes, bebes 2 goles."],
  "5": ["Historia proibida", "Conta a versao curta de uma noite que juraste nao explicar. Passar custa 2 goles."],
  "6": ["Age normal", "Durante uma ronda fala como se estivesses numa entrevista muito estranha. Sair do papel custa 1 gole."],
  "7": ["Pi secreto", "Conta desde 1. Troca os multiplos de 3 por uma mini confissao. Falhar custa 1 gole."],
  "8": ["Regra selvagem", "Cria uma regra absurda: sotaque, palavra proibida, pose ou gesto. Quebrar custa 1 gole."],
  "9": ["Screenshot mental", "Responde uma pergunta direta de forma curta. Podes passar bebendo 2 goles."],
  "10": ["Cafofo selvagem", "A mesa escolhe um tema desconfortavel. Cinco segundos de silencio, repetir ou passar custa 2 goles."],
  J: ["Principe do drama", "A pessoa a tua esquerda escolhe: verdade vergonhosa ou desafio cenico seguro. Passar custa 2 goles."],
  Q: ["Rainha sem filtro", "Faz uma pergunta direta mas respeitosa a mesa. Qualquer pessoa pode passar por 1 gole."],
  K: ["Rei do segredo", "Todos contam um segredo inofensivo. O rei escolhe o mais suspeito para 2 goles."]
};

export const COPY = {
  en: {
    appName: "WILD DECKS", tagline: "Two decks. No mercy.", start: "Start the mess", rules: "Rules", selectDeck: "Choose your deck", play: "Play", draw: "Draw card", remaining: "cards left", menu: "Menu", reset: "Reset deck", exit: "Exit", close: "Close", ready: "Pick your poison", initialRule: "Draw a card. The consequence appears below it.", ageQuestion: "Are you of legal drinking age where you live?", ageCopy: "This game can involve alcohol. Play responsibly and follow the law in your country.", ageNotice: "Only for the legal drinking age in your country.", yes: "I am of age", no: "No",
    modes: {
      clasico: { label: "DRUNKEN SUECA", description: "The classic drinking deck. Two decks, 104 cards, no jokers.", rulesTitle: "Drunken Sueca rules", rules: ["Play with two full decks: 104 cards, no jokers.", "Nobody leaves the game in the middle of a round.", "Draw a card and complete the action shown.", "Drink responsibly; non-alcoholic alternatives count too."], actions: classicActions },
      wild: { label: "WILD DECKS", description: "Confessions, dares and penalties with a way to pass.", rulesTitle: "Wild Decks rules", rules: ["Challenges should be embarrassing, never unsafe or cruel.", "No personal data or secrets about people who are not playing.", "Anyone may pass a prompt by taking the stated penalty or using a non-alcoholic alternative.", "Consent wins every round."], actions: wildActions }
    }
  },
  es: {
    appName: "BARAJAS SALVAJES", tagline: "Dos barajas. Sin piedad.", start: "Empezar el caos", rules: "Normas", selectDeck: "Elige tu baraja", play: "Jugar", draw: "Tirar carta", remaining: "cartas", menu: "Menu", reset: "Reiniciar baraja", exit: "Salir", close: "Cerrar", ready: "Elige tu veneno", initialRule: "Tira una carta. La consecuencia aparece debajo.", ageQuestion: "Tienes la edad legal para beber en tu pais?", ageCopy: "Este juego puede incluir alcohol. Juega con responsabilidad y respeta la ley de tu pais.", ageNotice: "Solo para quien tenga la edad legal en su pais.", yes: "Tengo edad legal", no: "No",
    modes: {
      clasico: { label: "SUECA BEBIDA", description: "La clasica de beber. Dos barajas, 104 cartas, sin comodines.", rulesTitle: "Reglas de Sueca Bebida", rules: ["Se juega con dos barajas completas: 104 cartas y sin comodines.", "Nadie sale de la partida a mitad de una ronda.", "Tira una carta y cumple la accion que aparece.", "Bebe con responsabilidad; vale una alternativa sin alcohol."], actions: classicActionsEs },
      wild: { label: "BARAJAS SALVAJES", description: "Confesiones, retos y castigos con derecho a pasar.", rulesTitle: "Reglas de Barajas Salvajes", rules: ["Los retos deben dar verguenza, nunca ser peligrosos ni crueles.", "No reveles datos ni secretos de gente que no juega.", "Cualquiera puede pasar pagando el castigo indicado o con una bebida sin alcohol.", "El consentimiento manda en cada ronda."], actions: wildActionsEs }
    }
  },
  pt: {
    appName: "BARALHOS SELVAGENS", tagline: "Dois baralhos. Sem piedade.", start: "Comecar o caos", rules: "Regras", selectDeck: "Escolhe o baralho", play: "Jogar", draw: "Tirar carta", remaining: "cartas", menu: "Menu", reset: "Reiniciar baralho", exit: "Sair", close: "Fechar", ready: "Escolhe o veneno", initialRule: "Tira uma carta. A consequencia aparece abaixo.", ageQuestion: "Tens idade legal para beber no teu pais?", ageCopy: "Este jogo pode incluir alcool. Joga com responsabilidade e respeita a lei do teu pais.", ageNotice: "So para quem tem a idade legal no teu pais.", yes: "Tenho idade legal", no: "Nao",
    modes: {
      clasico: { label: "SUECA BEBADA", description: "A versao de bebida. Dois baralhos, 104 cartas, sem coringas.", rulesTitle: "Regras - Sueca Bebada", rules: ["Versao de bebida da sueca, jogada com 2 baralhos completos: 104 cartas e sem coringas.", "Regra de ouro: ninguem pode sair do jogo em nenhum momento.", "Tira uma carta no app e faz a acao apresentada.", "Joga com responsabilidade; bebida sem alcool tambem vale."], actions: classicActionsPt },
      wild: { label: "BARALHOS SELVAGENS", description: "Confissoes, desafios e castigos com direito de passar.", rulesTitle: "Regras - Baralhos Selvagens", rules: ["Os desafios devem dar vergonha, nunca ser perigosos ou crueis.", "Nao exponhas dados ou segredos de quem nao esta a jogar.", "Qualquer pessoa pode passar tomando a prenda indicada ou uma bebida sem alcool.", "Consentimento manda em todas as rondas."], actions: wildActionsPt }
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
