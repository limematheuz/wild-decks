import "./styles.css";
import { CHARACTER_ART, LOGOS, getCardArt, getCardBack } from "./assets.js";
import { GAME_MODES, RANKS, createDeck, drawRandomCard, getCopy, getModeCopy } from "./decks.js";

const app = document.querySelector("#app");

function logoImage(locale, className = "") {
  const logo = LOGOS[locale] ?? LOGOS.en;
  return `<img class="${className}" src="${logo.path}" alt="${logo.alt}" />`;
}

app.innerHTML = `
  <div class="app-shell">
    <div class="page-rays" aria-hidden="true"></div>
    <div class="page-dots" aria-hidden="true"></div>

    <section class="screen splash-screen is-active" data-screen="splash" data-action="splash" aria-label="Wild Decks loading">
      <div class="splash-card" data-action="splash">
        ${logoImage("en", "splash-logo")}
        <div class="splash-burst">Ready to misbehave?</div>
      </div>
    </section>

    <section class="screen home-screen" data-screen="home">
      <div class="home-layout">
        <header class="home-topline">
          <nav class="locale-switcher" aria-label="Language" data-ui="locale-switcher">
            <button class="locale-button" data-action="locale" data-locale="en" type="button" aria-label="English">EN</button>
            <button class="locale-button" data-action="locale" data-locale="es" type="button" aria-label="Espanol">ES</button>
            <button class="locale-button" data-action="locale" data-locale="pt" type="button" aria-label="Portugues">PT</button>
          </nav>
          <button class="icon-button icon-button--help" data-action="open-info" type="button" aria-label="Information">?</button>
        </header>
        <div class="home-hero">${logoImage("en", "brand-logo")}</div>
        <div class="home-message"><p class="eyebrow" data-copy="tagline">Two decks. No mercy.</p><p data-ui="age-note">Only for the legal drinking age in your country.</p></div>
        <div class="home-actions">
          <button class="solid-button solid-button--pink" data-action="start" type="button" data-copy="start">Start the mess</button>
          <button class="solid-button solid-button--yellow" data-action="open-rules-home" type="button" data-copy="rules">Rules</button>
        </div>
        <footer class="age-strip"><strong>18+</strong><span data-copy="ageCopy">Alcohol game. Play responsibly.</span></footer>
      </div>
    </section>

    <section class="screen selection-screen" data-screen="decks">
      <div class="selection-layout">
        <header class="selection-header">
          <h1 class="heading" data-copy="selectDeck">Choose your deck</h1>
          <button class="icon-button" data-action="home" type="button" aria-label="Back">&larr;</button>
        </header>
        <div class="selection-subhead">
          <p class="eyebrow" data-copy="appName">Wild Decks</p>
          <nav class="locale-switcher locale-switcher--compact" aria-label="Language" data-ui="locale-switcher-secondary">
            <button class="locale-button" data-action="locale" data-locale="en" type="button" aria-label="English">EN</button>
            <button class="locale-button" data-action="locale" data-locale="es" type="button" aria-label="Espanol">ES</button>
            <button class="locale-button" data-action="locale" data-locale="pt" type="button" aria-label="Portugues">PT</button>
          </nav>
        </div>
        <div class="mode-grid" data-ui="mode-grid"></div>
      </div>
    </section>

    <section class="screen game-screen" data-screen="game">
      <div class="game-layout">
        <header class="game-header">
          <button class="icon-button" data-action="menu" type="button" aria-label="Open menu">&#9776;</button>
          <p class="game-mode-name" data-ui="mode-name">SUECA BEBADA</p>
          <div class="remaining-pill"><strong data-ui="remaining">104</strong><span data-copy="remaining">left</span></div>
        </header>
        <main class="game-stage">
          <article class="playing-card" data-ui="card">
            <div class="card-corner card-corner--top"><span data-ui="corner-rank-top">A</span><span data-ui="corner-suit-top">&#9824;</span></div>
            <div class="card-corner card-corner--bottom"><span data-ui="corner-rank-bottom">A</span><span data-ui="corner-suit-bottom">&#9824;</span></div>
            <div class="card-figure"><img data-ui="card-art" src="${CHARACTER_ART.A.path}" alt="${CHARACTER_ART.A.alt}" /></div>
          </article>
          <section class="rule-panel" aria-live="polite">
            <p class="eyebrow" data-ui="card-code">A&#9824;</p>
            <p data-ui="rule-title">Pick your poison</p>
            <p data-ui="rule-text">Draw a card. The consequence appears below it.</p>
          </section>
          <button class="solid-button solid-button--pink draw-button" data-action="draw" type="button" data-copy="draw">Draw card</button>
        </main>
      </div>
    </section>

    <div class="modal" data-ui="age-modal" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div class="modal-card">
        <h2 class="heading" id="age-title" data-copy="ageQuestion">Are you 18 or older?</h2>
        <p data-copy="ageCopy">This game can involve alcohol. Play responsibly and respect local law.</p>
        <label class="age-check"><input data-ui="age-confirm" type="checkbox" /><span data-copy="ageCheck">I confirm I am of legal drinking age where I live.</span></label>
        <div class="modal-actions">
          <button class="solid-button solid-button--pink" data-ui="age-yes" data-action="age-yes" type="button" data-copy="yes" disabled>Continue</button>
          <button class="solid-button solid-button--yellow" data-action="age-no" type="button" data-copy="no">No</button>
        </div>
      </div>
    </div>

    <div class="modal" data-ui="info-modal" role="dialog" aria-modal="true" aria-labelledby="info-title">
      <div class="modal-card modal-card--compact">
        <h2 class="heading" id="info-title">18+</h2>
        <p data-ui="info-content"></p>
        <button class="solid-button solid-button--pink" data-action="close-info" type="button" data-copy="close">Close</button>
      </div>
    </div>

    <button class="drawer-scrim" data-ui="drawer-scrim" data-action="close-menu" type="button" aria-label="Close menu"></button>
    <aside class="menu-drawer" data-ui="drawer" aria-hidden="true">
      <header><h2 class="heading" data-copy="menu">Menu</h2><button class="icon-button" data-action="close-menu" type="button" aria-label="Close">&times;</button></header>
      <nav class="locale-switcher locale-switcher--menu" aria-label="Language">
        <button class="locale-button" data-action="locale" data-locale="en" type="button" aria-label="English">EN</button>
        <button class="locale-button" data-action="locale" data-locale="es" type="button" aria-label="Espanol">ES</button>
        <button class="locale-button" data-action="locale" data-locale="pt" type="button" aria-label="Portugues">PT</button>
      </nav>
      <div class="drawer-actions">
        <button class="solid-button solid-button--blue" data-action="rules-current" type="button" data-copy="rules">Rules</button>
        <button class="solid-button solid-button--cream" data-action="reset" type="button" data-copy="reset">Reset deck</button>
        <button class="solid-button solid-button--pink" data-action="quit" type="button" data-copy="exit">Exit</button>
      </div>
    </aside>

    <div class="modal" data-ui="rules-modal" role="dialog" aria-modal="true" aria-labelledby="rules-title">
      <div class="modal-card">
        <h2 class="heading" id="rules-title" data-ui="rules-title">Rules</h2>
        <div class="rules-list" data-ui="rules-list"></div>
        <button class="solid-button solid-button--pink" data-action="close-rules" type="button" data-copy="close">Close</button>
      </div>
    </div>
  </div>`;

const screens = [...document.querySelectorAll("[data-screen]")];
const toCamelCase = (value) => value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
const ui = Object.fromEntries([...document.querySelectorAll("[data-ui]")].map((node) => [toCamelCase(node.dataset.ui), node]));

let locale = getStoredLocale();
let currentModeId = "clasico";
let deck = createDeck(currentModeId, locale);
let splashTimer;
let isRevealingCard = false;
let audioContext;

function getStoredLocale() {
  try { return localStorage.getItem("wild-decks-locale") || "en"; } catch { return "en"; }
}

function saveLocale() {
  try { localStorage.setItem("wild-decks-locale", locale); } catch { /* Storage is optional. */ }
}

function copy() { return getCopy(locale); }
function modeCopy(modeId = currentModeId) { return getModeCopy(modeId, locale); }
function showScreen(name) { screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name)); }
function setModal(node, open) { node.classList.toggle("is-open", open); }
function setDrawer(open) {
  ui.drawer.classList.toggle("is-open", open);
  ui.drawer.setAttribute("aria-hidden", String(!open));
  ui.drawerScrim.classList.toggle("is-open", open);
}

function renderModeGrid() {
  ui.modeGrid.innerHTML = Object.values(GAME_MODES).map((mode) => {
    const content = modeCopy(mode.id);
    return `<article class="mode-tile mode-tile--${mode.color}">
      <div class="mode-copy"><p class="mode-tag">${mode.id === "clasico" ? "104 / NO JOKERS" : "106 / 2 JOKERS"}</p><h2 class="heading">${content.label}</h2><p>${content.description}</p></div>
      <div class="mode-art-placeholder" aria-hidden="true"><span>${mode.id === "clasico" ? "104" : "WILD"}</span></div>
      <button class="solid-button solid-button--${mode.id === "clasico" ? "pink" : "yellow"}" data-action="play" data-mode="${mode.id}" type="button">${copy().play}</button>
    </article>`;
  }).join("");
}

function renderCopy() {
  const strings = copy();
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const key = node.dataset.copy;
    if (strings[key]) node.textContent = strings[key];
  });
  document.querySelectorAll(".locale-button").forEach((node) => {
    const isActive = node.dataset.locale === locale;
    node.classList.toggle("is-active", isActive);
    node.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll(".brand-logo").forEach((image) => { image.src = LOGOS[locale].path; image.alt = LOGOS[locale].alt; });
  ui.modeName.textContent = modeCopy().label;
  ui.ageNote.textContent = strings.ageNotice;
  ui.infoContent.textContent = strings.ageCopy;
  renderModeGrid();
}

function setCardVisual(card) {
  const art = getCardArt(card.rank, locale);
  ui.card.classList.remove("is-card-back");
  ui.card.classList.toggle("is-numbered", art.numbered);
  ui.card.classList.toggle("is-joker", card.rank === "joker");
  ui.card.dataset.suitColor = card.suitColor;
  ui.cardArt.src = art.path;
  ui.cardArt.alt = art.alt;
  const cardRank = card.rank === "joker" ? "JOKER" : card.rank;
  ui.cornerRankTop.textContent = cardRank;
  ui.cornerRankBottom.textContent = cardRank;
  ui.cornerSuitTop.textContent = card.suit;
  ui.cornerSuitBottom.textContent = card.suit;
}

function showCardBack() {
  const art = getCardBack(locale);
  ui.card.classList.remove("is-numbered");
  ui.card.classList.remove("is-joker");
  ui.card.classList.add("is-card-back");
  ui.cardArt.src = art.path;
  ui.cardArt.alt = art.alt;
}

function resetDeck() {
  deck = createDeck(currentModeId, locale);
  ui.remaining.textContent = deck.length;
  ui.cardCode.textContent = modeCopy().label;
  ui.ruleTitle.textContent = copy().ready;
  ui.ruleText.textContent = copy().initialRule;
  showCardBack();
}

function setMode(modeId) {
  currentModeId = modeId;
  ui.modeName.textContent = modeCopy().label;
  resetDeck();
  showScreen("game");
}

function drawCard() {
  if (isRevealingCard) return;
  if (!deck.length) resetDeck();
  const result = drawRandomCard(deck);
  if (!result.card) return;
  deck = result.deck;
  ui.remaining.textContent = deck.length;
  ui.cardCode.textContent = `${result.card.rank === "joker" ? "JOKER" : result.card.rank}${result.card.suit}`;
  ui.ruleTitle.textContent = result.card.title;
  ui.ruleText.textContent = result.card.action;
  if (ui.card.classList.contains("is-card-back")) {
    playSound("flip");
    isRevealingCard = true;
    ui.card.animate([
      { transform: "perspective(900px) rotateY(0deg)" },
      { transform: "perspective(900px) rotateY(90deg)" },
      { transform: "perspective(900px) rotateY(180deg)" }
    ], { duration: 560, easing: "cubic-bezier(.2,.78,.25,1)" });
    window.setTimeout(() => setCardVisual(result.card), 280);
    window.setTimeout(() => { isRevealingCard = false; }, 580);
    return;
  }
  playSound("draw");
  setCardVisual(result.card);
  ui.card.animate([{ transform: "rotate(-2deg) scale(.94)" }, { transform: "rotate(1deg) scale(1.025)" }, { transform: "rotate(0) scale(1)" }], { duration: 360, easing: "cubic-bezier(.2,.9,.2,1)" });
}

function openRules() {
  ui.rulesTitle.textContent = copy().rules;
  ui.rulesList.innerHTML = ["clasico", "wild"].map((modeId) => {
    const content = modeCopy(modeId);
    const ranks = modeId === "wild" ? [...RANKS, "joker"] : RANKS;
    const cardRules = ranks.map((rank) => {
      const [title, action] = content.actions[rank];
      return `<li><strong>${rank} - ${title}</strong><span>${action}</span></li>`;
    }).join("");
    return `<section class="rules-group"><h3>${content.rulesTitle}</h3><p>${content.rules.join(" ")}</p><ul>${cardRules}</ul></section>`;
  }).join("");
  setModal(ui.rulesModal, true);
}

function finishSplash() { clearTimeout(splashTimer); showScreen("home"); }

function playSound(kind = "click") {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioContext ??= new AudioContextClass();
  if (audioContext.state === "suspended") void audioContext.resume();

  const now = audioContext.currentTime;
  const output = audioContext.createGain();
  output.gain.setValueAtTime(.0001, now);
  output.connect(audioContext.destination);

  const tone = (from, to, duration, type = "square", volume = .055, delay = 0) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(from, start);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(28, to), start + duration);
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain).connect(output);
    oscillator.start(start);
    oscillator.stop(start + duration + .02);
  };

  if (kind === "flip") {
    tone(920, 180, .24, "square", .055);
    tone(230, 640, .16, "triangle", .04, .18);
  } else if (kind === "draw") {
    tone(190, 680, .12, "square", .05);
    tone(670, 260, .22, "triangle", .045, .11);
  } else if (kind === "start") {
    tone(260, 900, .22, "square", .05);
    tone(960, 1300, .12, "triangle", .035, .11);
  } else if (kind === "success") {
    tone(440, 880, .13, "square", .05);
    tone(660, 1320, .18, "triangle", .04, .1);
  } else {
    tone(560, 350, .07, "square", .045);
  }
  output.gain.exponentialRampToValueAtTime(.0001, now + .6);
}

function setLocale(nextLocale) {
  locale = nextLocale;
  saveLocale();
  renderCopy();
  resetDeck();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, mode } = target.dataset;
  if (action === "splash") finishSplash();
  if (action === "locale") { playSound(); setLocale(target.dataset.locale); }
  if (action === "start") { ui.ageConfirm.checked = false; ui.ageYes.disabled = true; playSound("start"); setModal(ui.ageModal, true); }
  if (action === "age-yes") { if (!ui.ageConfirm.checked) return; playSound("success"); setModal(ui.ageModal, false); showScreen("decks"); }
  if (action === "age-no") { playSound(); setModal(ui.ageModal, false); }
  if (action === "home") { playSound(); showScreen("home"); }
  if (action === "play") { playSound("start"); setMode(mode); }
  if (action === "draw") drawCard();
  if (action === "menu") { playSound(); setDrawer(true); }
  if (action === "close-menu") { playSound(); setDrawer(false); }
  if (action === "reset") { playSound(); resetDeck(); setDrawer(false); }
  if (action === "quit") { playSound(); setDrawer(false); showScreen("decks"); }
  if (action === "rules-current") { playSound(); setDrawer(false); openRules(); }
  if (action === "open-rules-home") { playSound(); openRules(); }
  if (action === "open-info") { playSound(); setModal(ui.infoModal, true); }
  if (action === "close-info") { playSound(); setModal(ui.infoModal, false); }
  if (action === "close-rules") { playSound(); setModal(ui.rulesModal, false); }
});

ui.ageConfirm.addEventListener("change", () => { ui.ageYes.disabled = !ui.ageConfirm.checked; });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setDrawer(false);
    setModal(ui.rulesModal, false);
    setModal(ui.infoModal, false);
  }
});

renderCopy();
resetDeck();
splashTimer = window.setTimeout(finishSplash, 1800);
