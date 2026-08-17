import assert from "node:assert/strict";
import test from "node:test";
import { GAME_MODES, RANKS, SUITS, createDeck, drawRandomCard, getCopy, getModeCopy } from "../src/decks.js";

test("there are two playable game modes", () => {
  assert.deepEqual(Object.keys(GAME_MODES), ["clasico", "wild"]);
});

test("each mode creates two complete decks without jokers", () => {
  for (const modeId of Object.keys(GAME_MODES)) {
    const deck = createDeck(modeId);
    assert.equal(deck.length, 104);

    for (const rank of RANKS) {
      for (const suit of SUITS) {
        const copies = deck.filter((card) => card.rank === rank && card.suit === suit.symbol);
        assert.equal(copies.length, 2, `${modeId} should include two ${rank}${suit.symbol}`);
      }
    }
  }
});

test("classic and wild modes keep their separate card actions", () => {
  assert.match(getModeCopy("clasico", "en").actions.Q[1], /women/i);
  assert.match(getModeCopy("wild", "en").actions.K[1], /secret/i);
});

test("every rank has a visible action in both modes", () => {
  for (const locale of ["en", "es", "pt"]) {
    for (const modeId of Object.keys(GAME_MODES)) {
      const actions = getModeCopy(modeId, locale).actions;
      for (const rank of RANKS) {
        assert.equal(actions[rank].length, 2, `${locale}/${modeId}/${rank} needs title and action`);
      }
    }
  }
});

test("the home tagline is translated for every supported language", () => {
  assert.equal(getCopy("en").tagline, "Two decks. No mercy.");
  assert.equal(getCopy("es").tagline, "Dos barajas. Sin piedad.");
  assert.equal(getCopy("pt").tagline, "Dois baralhos. Sem piedade.");
});

test("the localized decks keep the same 104-card structure", () => {
  for (const locale of ["en", "es", "pt"]) {
    assert.equal(createDeck("clasico", locale).length, 104);
    assert.equal(createDeck("wild", locale).length, 104);
  }
});

test("wild cards keep their rules in the selected language", () => {
  assert.match(getModeCopy("wild", "es").actions.A[1], /confesion/i);
  assert.match(getModeCopy("wild", "pt").actions.A[1], /confissao/i);
});

test("classic cards keep their rules in the selected language", () => {
  assert.match(getModeCopy("clasico", "es").actions["3"][1], /personas/i);
  assert.match(getModeCopy("clasico", "pt").actions["3"][1], /pessoas/i);
});

test("drawing removes exactly one card", () => {
  const deck = createDeck("wild");
  const { card, deck: nextDeck } = drawRandomCard(deck, () => 0);
  assert.equal(card.id, "wild-1-A♥");
  assert.equal(nextDeck.length, 103);
  assert.equal(deck.length, 104);
});
