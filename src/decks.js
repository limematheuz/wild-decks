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
  A: ["Spotlight", "Choose a player. They give the raw version of one bad decision or take 3 sips."],
  "2": ["Double receipt", "Choose two players. Each tells their most embarrassing party story; the table gives 3 sips to the messier one."],
  "3": ["Three-way shame", "Give three players a 30-second performance: an imitation, disaster speech or dramatic entrance. Refusing costs 3 sips."],
  "4": ["Court of shame", "The table picks one past cringe habit. Defend it like a lawyer for 30 seconds or take 3 sips."],
  "5": ["Forbidden story", "Tell the short version of a night you swore never to explain. Pass and take 3 sips."],
  "6": ["Lie detector", "The table asks one direct question. Answer in five seconds or take 2 sips."],
  "7": ["Pi", "Count aloud from 1. Replace every multiple of 3 with Pi. Make a mistake and take 2 sips."],
  "8": ["Wild rule", "Create one brutal table rule: banned word, accent, pose or ritual. Break it and take 2 sips until another rule replaces it."],
  "9": ["Hot seat", "One player gets 60 seconds of rapid-fire questions. They may pass any question for 2 sips."],
  "10": ["Last call", "Give one player a choice: a hard confession or a consensual performance dare picked by the table. Passing costs 3 sips."],
  J: ["Prince of drama", "The player on your left delivers a 30-second over-the-top apology or takes 3 sips."],
  Q: ["No-filter queen", "Ask anyone any question. They answer or take 2 sips."],
  K: ["King of ruin", "Everyone names their worst decision. The king picks one player for the table's toughest legal, consensual dare; pass: 3 sips."],
  joker: ["Black joker", "Name the table's most ruthless legal, consensual adult dare. The chosen player accepts, uses a clear pass, or takes 3 sips. Anyone may veto danger."]
};

const wildActionsEs = {
  A: ["El foco", "Elige a una persona. Cuenta la version sin maquillar de una mala decision o bebe 3 sorbos."],
  "2": ["Doble recibo", "Elige a dos personas. Cada una cuenta su peor historia de fiesta; la mesa da 3 sorbos a la mas caotica."],
  "3": ["Verguenza a tres", "Da a tres personas 30 segundos de actuacion: imitacion, discurso desastre o entrada dramatica. Negarse cuesta 3 sorbos."],
  "4": ["Tribunal de la verguenza", "La mesa elige una costumbre vergonzosa del pasado. Defiendela como abogado durante 30 segundos o bebe 3 sorbos."],
  "5": ["Historia prohibida", "Cuenta la version corta de una noche que juraste no explicar. Si pasas, bebes 3 sorbos."],
  "6": ["Detector de mentiras", "La mesa hace una pregunta directa. Responde en cinco segundos o bebe 2 sorbos."],
  "7": ["Pi", "Cuenta desde 1. Cambia cada multiplo de 3 por Pi. Si fallas, bebes 2 sorbos."],
  "8": ["Regla salvaje", "Crea una regla brutal: palabra prohibida, acento, pose o ritual. Romperla cuesta 2 sorbos hasta que otra la sustituya."],
  "9": ["Silla caliente", "Una persona recibe preguntas rapidas durante 60 segundos. Puede pasar cualquiera por 2 sorbos."],
  "10": ["Ultima ronda", "Da a una persona a elegir: confesion dura o reto de actuacion consensuado elegido por la mesa. Pasar cuesta 3 sorbos."],
  J: ["Principe del drama", "La persona a tu izquierda hace una disculpa exagerada de 30 segundos o bebe 3 sorbos."],
  Q: ["Reina sin filtro", "Haz a quien quieras cualquier pregunta. Responde o bebe 2 sorbos."],
  K: ["Rey de la ruina", "Todos nombran su peor decision. El rey elige a una persona para el reto legal y consensuado mas duro de la mesa; pasar: 3 sorbos."],
  joker: ["Joker negro", "Nombra el reto adulto legal y consensuado mas despiadado de la mesa. La persona elegida acepta, usa un pase claro o bebe 3 sorbos. Cualquiera puede vetar algo peligroso."]
};

const wildActionsPt = {
  A: ["No holofote", "Escolhe uma pessoa. Ela conta a versao sem filtro de uma ma decisao ou bebe 3 goles."],
  "2": ["Recibo duplo", "Escolhe duas pessoas. Cada uma conta a pior historia de festa; a mesa da 3 goles a mais caotica."],
  "3": ["Vergonha a tres", "Da a tres pessoas 30 segundos de atuacao: imitacao, discurso desastre ou entrada dramatica. Recusar custa 3 goles."],
  "4": ["Tribunal da vergonha", "A mesa escolhe um habito vergonhoso do passado. Defende-o como advogado por 30 segundos ou bebe 3 goles."],
  "5": ["Historia proibida", "Conta a versao curta de uma noite que juraste nunca explicar. Passar custa 3 goles."],
  "6": ["Detetor de mentiras", "A mesa faz uma pergunta direta. Responde em cinco segundos ou bebe 2 goles."],
  "7": ["Pi", "Conta a partir de 1. Troca cada multiplo de 3 por Pi. Se falhares, bebes 2 goles."],
  "8": ["Regra selvagem", "Cria uma regra brutal: palavra proibida, sotaque, pose ou ritual. Quebrar custa 2 goles ate outra a substituir."],
  "9": ["Cadeira quente", "Uma pessoa recebe perguntas rapidas por 60 segundos. Pode passar qualquer uma por 2 goles."],
  "10": ["Ultima ronda", "Da a uma pessoa a escolha: confissao dura ou desafio de atuacao consensual escolhido pela mesa. Passar custa 3 goles."],
  J: ["Principe do drama", "A pessoa a tua esquerda faz um pedido de desculpa exagerado por 30 segundos ou bebe 3 goles."],
  Q: ["Rainha sem filtro", "Faz a quem quiseres qualquer pergunta. Responde ou bebe 2 goles."],
  K: ["Rei da ruina", "Todos dizem a pior decisao. O rei escolhe uma pessoa para o desafio legal e consensual mais duro da mesa; passar: 3 goles."],
  joker: ["Joker negro", "Nomeia o desafio adulto legal e consensual mais impiedoso da mesa. A pessoa escolhida aceita, usa um passe claro ou bebe 3 goles. Qualquer pessoa pode vetar perigo."]
};

export const COPY = {
  en: {
    appName: "WILD DECKS", tagline: "Two decks. No mercy.", start: "Start the mess", rules: "Rules", selectDeck: "Choose your deck", play: "Play", draw: "Draw card", remaining: "cards left", menu: "Menu", reset: "Reset deck", exit: "Exit", close: "Close", ready: "Pick your poison", initialRule: "Draw a card. The consequence appears below it.", ageQuestion: "Are you of legal drinking age where you live?", ageCopy: "This game can involve alcohol. Play responsibly and follow the law in your country.", ageNotice: "Only for the legal drinking age in your country.", ageCheck: "I confirm I am of legal drinking age where I live.", yes: "Continue", no: "Cancel",
    modes: {
      clasico: { label: "DRUNKEN SUECA", description: "The classic drinking deck. Two decks, 104 cards, no jokers.", rulesTitle: "Drunken Sueca rules", rules: ["Play with two full decks: 104 cards, no jokers.", "Nobody leaves the game in the middle of a round.", "Draw a card and complete the action shown.", "Drink responsibly; non-alcoholic alternatives count too."], actions: classicActions },
      wild: { label: "WILD DECKS", description: "Hardcore confessions, dares and consequences for consenting adults. 106 cards, 2 jokers.", rulesTitle: "Wild Decks rules", rules: ["Adults only. Keep it legal and agreed by everyone at the table.", "Challenges can be ruthless; no touching, private data or people outside the game without explicit consent.", "A clear pass is always valid: use the stated penalty or a non-alcoholic alternative.", "The table can veto anything unsafe. Consent is the one rule nobody breaks."], actions: wildActions }
    }
  },
  es: {
    appName: "BARAJAS SALVAJES", tagline: "Dos barajas. Sin piedad.", start: "Empezar el caos", rules: "Normas", selectDeck: "Elige tu baraja", play: "Jugar", draw: "Tirar carta", remaining: "cartas", menu: "Menu", reset: "Reiniciar baraja", exit: "Salir", close: "Cerrar", ready: "Elige tu veneno", initialRule: "Tira una carta. La consecuencia aparece debajo.", ageQuestion: "Tienes la edad legal para beber en tu pais?", ageCopy: "Este juego puede incluir alcohol. Juega con responsabilidad y respeta la ley de tu pais.", ageNotice: "Solo para quien tenga la edad legal en su pais.", ageCheck: "Confirmo que tengo la edad legal para beber donde vivo.", yes: "Continuar", no: "Cancelar",
    modes: {
      clasico: { label: "SUECA BEBIDA", description: "La clasica de beber. Dos barajas, 104 cartas, sin comodines.", rulesTitle: "Reglas de Sueca Bebida", rules: ["Se juega con dos barajas completas: 104 cartas y sin comodines.", "Nadie sale de la partida a mitad de una ronda.", "Tira una carta y cumple la accion que aparece.", "Bebe con responsabilidad; vale una alternativa sin alcohol."], actions: classicActionsEs },
      wild: { label: "BARAJAS SALVAJES", description: "Confesiones, retos y castigos hardcore para adultos que consienten. 106 cartas, 2 jokers.", rulesTitle: "Reglas de Barajas Salvajes", rules: ["Solo adultos. Todo debe ser legal y estar aceptado por la mesa.", "Los retos pueden ser duros: sin tocar, datos privados ni gente fuera del juego sin consentimiento explicito.", "Un pase claro siempre vale: usa el castigo indicado o una alternativa sin alcohol.", "La mesa puede vetar cualquier cosa peligrosa. El consentimiento es la unica regla intocable."], actions: wildActionsEs }
    }
  },
  pt: {
    appName: "BARALHOS SELVAGENS", tagline: "Dois baralhos. Sem piedade.", start: "Comecar o caos", rules: "Regras", selectDeck: "Escolhe o baralho", play: "Jogar", draw: "Tirar carta", remaining: "cartas", menu: "Menu", reset: "Reiniciar baralho", exit: "Sair", close: "Fechar", ready: "Escolhe o veneno", initialRule: "Tira uma carta. A consequencia aparece abaixo.", ageQuestion: "Tens idade legal para beber no teu pais?", ageCopy: "Este jogo pode incluir alcool. Joga com responsabilidade e respeita a lei do teu pais.", ageNotice: "So para quem tem a idade legal no teu pais.", ageCheck: "Confirmo que tenho a idade legal para beber onde vivo.", yes: "Continuar", no: "Cancelar",
    modes: {
      clasico: { label: "SUECA BEBADA", description: "A versao de bebida. Dois baralhos, 104 cartas, sem coringas.", rulesTitle: "Regras - Sueca Bebada", rules: ["Versao de bebida da sueca, jogada com 2 baralhos completos: 104 cartas e sem coringas.", "Regra de ouro: ninguem pode sair do jogo em nenhum momento.", "Tira uma carta no app e faz a acao apresentada.", "Joga com responsabilidade; bebida sem alcool tambem vale."], actions: classicActionsPt },
      wild: { label: "BARALHOS SELVAGENS", description: "Confissoes, desafios e castigos hardcore para adultos que consentem. 106 cartas, 2 jokers.", rulesTitle: "Regras - Baralhos Selvagens", rules: ["So para adultos. Tudo deve ser legal e aceite por toda a mesa.", "Os desafios podem ser duros: sem tocar, dados privados ou pessoas fora do jogo sem consentimento explicito.", "Um passe claro vale sempre: usa a prenda indicada ou uma alternativa sem alcool.", "A mesa pode vetar qualquer coisa perigosa. Consentimento e a unica regra intocavel."], actions: wildActionsPt }
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
    if (mode.id === "wild") {
      const [title, action] = actions.joker;
      cards.push({ id: `${mode.id}-${copy}-joker`, rank: "joker", suit: "★", suitColor: "black", title, action, mode: mode.id });
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
