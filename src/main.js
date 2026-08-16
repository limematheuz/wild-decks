import "./styles.css";
import { CHARACTER_ART, LOGOS, getCardArt } from "./assets.js";
import { GAME_MODES, createDeck, drawRandomCard, getCopy, getModeCopy } from "./decks.js";

const app = document.querySelector("#app");

function logoImage(locale, className = "") {
  const logo = LOGOS[locale] ?? LOGOS.en;
  return `<img class="${className}" src="${logo.path}" alt="${logo.alt}" />`;
}

function artImage(rank, className = "") {
  const art = CHARACTER_ART[rank] ?? CHARACTER_ART.A;
  return `<img class="${className}" src="${art.path}" alt="${art.alt}" />`;
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
          <label class="language-picker" aria-label="Language">
            <select data-ui="locale"><option value="en">English</option><option value="es">Espanol</option><option value="pt">Portugues</option></select>
          </label>
          <button class="icon-button" data-action="open-rules-home" type="button" aria-label="Rules">?</button>
        </header>
        ${logoImage("en", "brand-logo")}
        <div class="character-cast" aria-hidden="true">
          ${artImage("Q", "cast-character cast-character--queen")}
          ${artImage("joker", "cast-character cast-character--joker")}
          ${artImage("K", "cast-character cast-character--king")}
        </div>
        <div class="home-actions">
          <button class="solid-button solid-button--pink" data-action="start" type="button" data-copy="start">Start the mess</button>
          <button class="solid-button solid-button--yellow" data-action="open-rules-home" type="button" data-copy="rules">Rules</button>
        </div>
        <footer class="age-strip"><strong>18+</strong><span data-ui="age-note">Alcohol game. Play responsibly.</span></footer>
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
          <label class="language-picker" aria-label="Language">
            <select data-ui="locale-secondary"><option value="en">EN</option><option value="es">ES</option><option value="pt">PT</option></select>
          </label>
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
        <div class="modal-actions">
          <button class="solid-button solid-button--pink" data-action="age-yes" type="button" data-copy="yes">I am 18+</button>
          <button class="solid-button solid-button--yellow" data-action="age-no" type="button" data-copy="no">No</button>
        </div>
      </div>
    </div>

    <aside class="menu-drawer" data-ui="drawer" aria-hidden="true">
      <header><h2 class="heading" data-copy="menu">Menu</h2><button class="icon-button" data-action="close-menu" type="button" aria-label="Close">&times;</button></header>
      <div class="drawer-actions">
        <button class="solid-button solid-button--blue" data-action="rules-current" type="button" data-copy="rules">Rules</button>
        <button class="solid-button solid-button--cream" data-action="reset" type="button" data-copy="reset">Reset deck</button>
        <button class="solid-button solid-button--pink" data-action="quit" type="button" data-copy="exit">Exit</button>
      </div>
    </aside>

    <div class="modal" data-ui="rules-modal" role="dialog" aria-modal="true" aria-labelledby="rules-title">
      <div class="modal-card">
        <h2 class="heading" id="rules-title" data-ui="rules-title">Rules</h2>
        <ul class="rules-list" data-ui="rules-list"></ul>
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

function getStoredLocale() {
  try { return localStorage.getItem("wild-decks-locale") || "en"; } catch { return "en"; }
}

function saveLocale() {
  try { localStorage.setItem("wild-decks-locale", locale); } catch { /* Storage is optional. */ }
}

function getAgeOk() {
  try { return localStorage.getItem("wild-decks-age-ok") === "1"; } catch { return false; }
}

function setAgeOk() {
  try { localStorage.setItem("wild-decks-age-ok", "1"); } catch { /* Storage is optional. */ }
}

function copy() { return getCopy(locale); }
function modeCopy(modeId = currentModeId) { return getModeCopy(modeId, locale); }
function showScreen(name) { screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name)); }
function setModal(node, open) { node.classList.toggle("is-open", open); }
function setDrawer(open) { ui.drawer.classList.toggle("is-open", open); ui.drawer.setAttribute("aria-hidden", String(!open)); }

function renderModeGrid() {
  ui.modeGrid.innerHTML = Object.values(GAME_MODES).map((mode) => {
    const content = modeCopy(mode.id);
    const art = CHARACTER_ART[mode.heroRank];
    return `<article class="mode-tile mode-tile--${mode.color}">
      <div class="mode-copy"><h2 class="heading">${content.label}</h2><p>${content.description}</p><button class="solid-button solid-button--${mode.id === "clasico" ? "pink" : "yellow"}" data-action="play" data-mode="${mode.id}" type="button">${copy().play}</button></div>
      <div class="mode-art"><img src="${art.path}" alt="${art.alt}" /></div>
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
  document.querySelectorAll("[data-ui=locale], [data-ui=locale-secondary]").forEach((node) => { node.value = locale; });
  document.querySelectorAll(".brand-logo").forEach((image) => { image.src = LOGOS[locale].path; image.alt = LOGOS[locale].alt; });
  ui.modeName.textContent = modeCopy().label;
  ui.ageNote.textContent = strings.ageCopy;
  renderModeGrid();
}

function setCardVisual(card) {
  const art = getCardArt(card.rank, locale);
  ui.card.classList.toggle("is-numbered", art.numbered);
  ui.card.dataset.suitColor = card.suitColor;
  ui.cardArt.src = art.path;
  ui.cardArt.alt = art.alt;
  ui.cornerRankTop.textContent = card.rank;
  ui.cornerRankBottom.textContent = card.rank;
  ui.cornerSuitTop.textContent = card.suit;
  ui.cornerSuitBottom.textContent = card.suit;
}

function resetDeck() {
  deck = createDeck(currentModeId, locale);
  ui.remaining.textContent = deck.length;
  ui.cardCode.textContent = "A♠";
  ui.ruleTitle.textContent = copy().ready;
  ui.ruleText.textContent = copy().initialRule;
  setCardVisual({ rank: "A", suit: "♠", suitColor: "black" });
}

function setMode(modeId) {
  currentModeId = modeId;
  ui.modeName.textContent = modeCopy().label;
  resetDeck();
  showScreen("game");
}

function drawCard() {
  if (!deck.length) resetDeck();
  const result = drawRandomCard(deck);
  if (!result.card) return;
  deck = result.deck;
  ui.remaining.textContent = deck.length;
  ui.cardCode.textContent = `${result.card.rank}${result.card.suit}`;
  ui.ruleTitle.textContent = result.card.title;
  ui.ruleText.textContent = result.card.action;
  setCardVisual(result.card);
  ui.card.animate([{ transform: "rotate(-2deg) scale(.94)" }, { transform: "rotate(1deg) scale(1.025)" }, { transform: "rotate(0) scale(1)" }], { duration: 360, easing: "cubic-bezier(.2,.9,.2,1)" });
}

function openRules(modeId = currentModeId) {
  const content = modeCopy(modeId);
  ui.rulesTitle.textContent = content.rulesTitle;
  ui.rulesList.innerHTML = content.rules.map((rule) => `<li>${rule}</li>`).join("");
  setModal(ui.rulesModal, true);
}

function finishSplash() { clearTimeout(splashTimer); showScreen("home"); }

function setLocale(nextLocale) {
  locale = nextLocale;
  saveLocale();
  renderCopy();
  resetDeck();
}

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-ui=locale], [data-ui=locale-secondary]")) setLocale(event.target.value);
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, mode } = target.dataset;
  if (action === "splash") finishSplash();
  if (action === "start") getAgeOk() ? showScreen("decks") : setModal(ui.ageModal, true);
  if (action === "age-yes") { setAgeOk(); setModal(ui.ageModal, false); showScreen("decks"); }
  if (action === "age-no") setModal(ui.ageModal, false);
  if (action === "home") showScreen("home");
  if (action === "play") setMode(mode);
  if (action === "draw") drawCard();
  if (action === "menu") setDrawer(true);
  if (action === "close-menu") setDrawer(false);
  if (action === "reset") { resetDeck(); setDrawer(false); }
  if (action === "quit") { setDrawer(false); showScreen("decks"); }
  if (action === "rules-current") { setDrawer(false); openRules(); }
  if (action === "open-rules-home") openRules("clasico");
  if (action === "close-rules") setModal(ui.rulesModal, false);
});

renderCopy();
resetDeck();
splashTimer = window.setTimeout(finishSplash, 1800);
