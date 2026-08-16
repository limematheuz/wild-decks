import assert from "node:assert/strict";
import test from "node:test";
import { GAME_MODES, RANKS, SUITS, createDeck, drawRandomCard } from "../src/decks.js";

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
  assert.match(GAME_MODES.clasico.actions.Q[1], /hombres/);
  assert.match(GAME_MODES.wild.actions.K[1], /secreto/);
});

test("drawing removes exactly one card", () => {
  const deck = createDeck("wild");
  const { card, deck: nextDeck } = drawRandomCard(deck, () => 0);
  assert.equal(card.id, "wild-1-A♥");
  assert.equal(nextDeck.length, 103);
  assert.equal(deck.length, 104);
});
