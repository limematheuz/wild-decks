import "./styles.css";
import { ASSETS, CHARACTER_ART } from "./assets.js";
import { GAME_MODES, createDeck, drawRandomCard } from "./decks.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="app-shell">
    <div class="burst" aria-hidden="true"></div>
    <div class="dot-noise" aria-hidden="true"></div>

    <section class="screen screen-home is-active" data-screen="home">
      <header class="home-header">
        <div class="brand-mark" aria-label="Barajas Salvajes">
          <span>Barajas</span>
          <strong>Salvajes</strong>
        </div>
        <p class="tagline">El juego que manana negaras</p>
      </header>
      <figure class="hero-art">
        <img src="${ASSETS.board}" alt="Personajes locos de Barajas Salvajes" />
      </figure>
      <div class="home-actions">
        <button class="comic-button pink" data-action="start" type="button">Empezar</button>
        <button class="comic-button blue" data-action="open-rules-home" type="button">Reglas</button>
      </div>
      <footer class="age-strip">
        <strong>18+</strong>
        <span>Juego con alcohol. Juega con responsabilidad y respeta la ley de tu pais.</span>
      </footer>
    </section>

    <section class="screen screen-decks" data-screen="decks">
      <div class="pick-topbar">
        <h1>Elige tu baraja</h1>
        <button class="comic-button mini" data-action="home" type="button">Volver</button>
      </div>
      <div class="deck-grid">
        ${Object.values(GAME_MODES).map((mode) => `
          <article class="deck-tile ${mode.color}">
            <div class="deck-image">
              <img src="${mode.id === "wild" ? ASSETS.queen : ASSETS.deckWide}" alt="${mode.label}" />
            </div>
            <h2>${mode.label}</h2>
            <p>${mode.description}</p>
            <button class="comic-button ${mode.color === "pink" ? "yellow" : "pink"}" data-action="play" data-mode="${mode.id}" type="button">Jugar</button>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="screen screen-game" data-screen="game">
      <header class="game-topbar">
        <button class="icon-button" data-action="menu" type="button" aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>
        <div class="mode-pill" data-ui="mode-name">Barajas Salvajes</div>
        <div class="remaining-pill"><strong data-ui="remaining">104</strong><span>restantes</span></div>
      </header>

      <main class="game-stage">
        <p class="draw-kicker" data-ui="draw-kicker">Quien se atreve?</p>
        <article class="playing-card" data-ui="card" data-rank="A">
          <div class="card-corner top-left">
            <strong data-ui="corner-rank-top">?</strong>
            <span data-ui="corner-suit-top">♠</span>
          </div>
          <div class="card-corner bottom-right">
            <strong data-ui="corner-rank-bottom">?</strong>
            <span data-ui="corner-suit-bottom">♠</span>
          </div>
          <div class="card-art-frame">
            <img data-ui="card-art" src="${ASSETS.board}" alt="Personaje de la carta" />
            <div class="queen-hairs" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="card-copy">
            <h2 data-ui="card-title">Tira una carta</h2>
            <p data-ui="card-code">?</p>
          </div>
        </article>

        <section class="rule-panel">
          <h2 data-ui="rule-title">Preparados?</h2>
          <p data-ui="rule-text">Pulsa tirar carta y deja que el caos haga su trabajo.</p>
        </section>

        <button class="draw-button" data-action="draw" type="button">Tirar carta</button>
      </main>
    </section>

    <div class="modal" data-ui="age-modal" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div class="modal-card">
        <h2 id="age-title">Tienes 18 anos?</h2>
        <p>Este juego puede incluir alcohol. Confirma que tienes la edad legal aplicable antes de continuar.</p>
        <div class="modal-actions">
          <button class="comic-button pink" data-action="age-yes" type="button">Si, tengo 18+</button>
          <button class="comic-button yellow" data-action="age-no" type="button">No</button>
        </div>
      </div>
    </div>

    <div class="drawer" data-ui="drawer" aria-hidden="true">
      <div class="drawer-panel">
        <div class="drawer-head">
          <h2>Menu</h2>
          <button class="close-button" data-action="close-menu" type="button" aria-label="Cerrar menu">×</button>
        </div>
        <button class="menu-option blue" data-action="rules-current" type="button">Normas</button>
        <button class="menu-option yellow" data-action="reset" type="button">Reiniciar baraja</button>
        <button class="menu-option pink" data-action="quit" type="button">Salir</button>
      </div>
    </div>

    <div class="modal" data-ui="rules-modal" role="dialog" aria-modal="true" aria-labelledby="rules-title">
      <div class="modal-card rules-card">
        <h2 id="rules-title" data-ui="rules-title">Reglas</h2>
        <ul data-ui="rules-list"></ul>
        <button class="comic-button pink" data-action="close-rules" type="button">Volver</button>
      </div>
    </div>
  </div>
`;

const screens = [...document.querySelectorAll("[data-screen]")];
const toCamelCase = (value) => value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
const ui = Object.fromEntries(
  [...document.querySelectorAll("[data-ui]")].map((node) => [toCamelCase(node.dataset.ui), node])
);

let currentModeId = "salvajes";
let deck = createDeck(currentModeId);
let lastCard = null;

function showScreen(name) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name));
}

function setModal(node, open) {
  node.classList.toggle("is-open", open);
}

function setDrawer(open) {
  ui.drawer.classList.toggle("is-open", open);
  ui.drawer.setAttribute("aria-hidden", String(!open));
}

function getAgeOk() {
  try {
    return localStorage.getItem("barajas-age-ok") === "1";
  } catch {
    return false;
  }
}

function setAgeOk() {
  try {
    localStorage.setItem("barajas-age-ok", "1");
  } catch {
    return;
  }
}

function resetDeck() {
  deck = createDeck(currentModeId);
  lastCard = null;
  ui.remaining.textContent = deck.length;
  ui.drawKicker.textContent = "Quien se atreve?";
  ui.cardTitle.textContent = "Tira una carta";
  ui.cardCode.textContent = "?";
  ui.ruleTitle.textContent = "Preparados?";
  ui.ruleText.textContent = "Pulsa tirar carta y deja que el caos haga su trabajo.";
  setCardVisual({ rank: "A", suit: "♠", suitColor: "black" });
}

function setMode(modeId) {
  currentModeId = modeId;
  const mode = GAME_MODES[currentModeId];
  ui.modeName.textContent = mode.label;
  resetDeck();
  showScreen("game");
}

function setCardVisual(card) {
  const art = CHARACTER_ART[card.rank] ?? CHARACTER_ART.A;
  ui.card.dataset.rank = card.rank;
  ui.card.dataset.suitColor = card.suitColor;
  ui.cardArt.src = art.src;
  ui.cardArt.style.objectPosition = art.position;
  ui.cardArt.alt = `Personaje loco: ${art.label}`;
  ui.cornerRankTop.textContent = card.rank;
  ui.cornerRankBottom.textContent = card.rank;
  ui.cornerSuitTop.textContent = card.suit;
  ui.cornerSuitBottom.textContent = card.suit;
}

function drawCard() {
  if (!deck.length) resetDeck();
  const result = drawRandomCard(deck);
  if (!result.card) return;
  deck = result.deck;
  lastCard = result.card;
  ui.remaining.textContent = deck.length;
  ui.drawKicker.textContent = "Te toco!";
  ui.cardTitle.textContent = lastCard.title;
  ui.cardCode.textContent = `${lastCard.rank}${lastCard.suit}`;
  ui.ruleTitle.textContent = `${lastCard.rank}${lastCard.suit} · ${lastCard.title}`;
  ui.ruleText.textContent = lastCard.action;
  setCardVisual(lastCard);
  ui.card.animate(
    [
      { transform: "rotate(-2deg) translateY(10px) scale(.96)" },
      { transform: "rotate(1deg) translateY(-4px) scale(1.02)" },
      { transform: "rotate(-1deg) translateY(0) scale(1)" }
    ],
    { duration: 380, easing: "cubic-bezier(.22,.9,.24,1)" }
  );
}

function openRules(modeId = currentModeId) {
  const mode = GAME_MODES[modeId] ?? GAME_MODES.salvajes;
  ui.rulesTitle.textContent = mode.rulesTitle;
  ui.rulesList.innerHTML = mode.rules.map((rule) => `<li>${rule}</li>`).join("");
  setModal(ui.rulesModal, true);
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const { action, mode } = actionTarget.dataset;

  if (action === "start") {
    if (getAgeOk()) showScreen("decks");
    else setModal(ui.ageModal, true);
  }
  if (action === "age-yes") {
    setAgeOk();
    setModal(ui.ageModal, false);
    showScreen("decks");
  }
  if (action === "age-no") setModal(ui.ageModal, false);
  if (action === "home") showScreen("home");
  if (action === "play") setMode(mode);
  if (action === "draw") drawCard();
  if (action === "menu") setDrawer(true);
  if (action === "close-menu") setDrawer(false);
  if (action === "reset") {
    resetDeck();
    setDrawer(false);
  }
  if (action === "quit") {
    setDrawer(false);
    showScreen("decks");
  }
  if (action === "rules-current") {
    setDrawer(false);
    openRules(currentModeId);
  }
  if (action === "open-rules-home") openRules("salvajes");
  if (action === "close-rules") setModal(ui.rulesModal, false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setDrawer(false);
  setModal(ui.ageModal, false);
  setModal(ui.rulesModal, false);
});

resetDeck();
