import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const width = 768;
const height = 1024;
const outputDir = resolve("public/assets/cards");

const characters = [
  { rank: "A", name: "El Capo del Vaso", skin: "#f28d50", hair: "#1f1715", shirt: "#ffd21f", pants: "#00aeea", accent: "#ff3d94", item: "cup", vibe: "party host" },
  { rank: "2", name: "Lola Lata", skin: "#f7b28c", hair: "#ff5f2a", shirt: "#ff3d94", pants: "#ffd21f", accent: "#00aeea", item: "phone", vibe: "beach dancer" },
  { rank: "3", name: "Pablito Pop", skin: "#c67b52", hair: "#312127", shirt: "#00aeea", pants: "#ff3d94", accent: "#ffd21f", item: "boombox", vibe: "club kid" },
  { rank: "4", name: "Tia Stop", skin: "#eb9d76", hair: "#7b2e4c", shirt: "#ffd21f", pants: "#00aeea", accent: "#ff3d94", item: "paddle", vibe: "door bouncer" },
  { rank: "5", name: "Memo Moco", skin: "#b96e4a", hair: "#b726b3", shirt: "#ff3d94", pants: "#00aeea", accent: "#ffd21f", item: "notes", vibe: "forgetful aunt" },
  { rank: "6", name: "Marinero Miki", skin: "#f0af7a", hair: "#1b1718", shirt: "#00aeea", pants: "#ffd21f", accent: "#ff3d94", item: "salute", vibe: "sailor" },
  { rank: "7", name: "Pili Pi", skin: "#eea480", hair: "#ffcf28", shirt: "#ffd21f", pants: "#ff3d94", accent: "#00aeea", item: "calculator", vibe: "math nerd" },
  { rank: "8", name: "Regla Rolo", skin: "#8e523d", hair: "#19171c", shirt: "#ff3d94", pants: "#00aeea", accent: "#ffd21f", item: "whistle", vibe: "referee" },
  { rank: "9", name: "Nando Nueve", skin: "#d98459", hair: "#00aeea", shirt: "#00aeea", pants: "#ffd21f", accent: "#ff3d94", item: "trumpet", vibe: "party veteran" },
  { rank: "10", name: "Dani Disco", skin: "#ce7758", hair: "#1c1821", shirt: "#ff3d94", pants: "#00aeea", accent: "#ffd21f", item: "headphones", vibe: "lesbian DJ" },
  { rank: "J", name: "Jota Joy", skin: "#e9ad83", hair: "#ff3d94", shirt: "#ffd21f", pants: "#00aeea", accent: "#ff3d94", item: "fan", vibe: "gay club prince" },
  { rank: "Q", name: "Reina Rosi", skin: "#f3a77f", hair: "#ffd21f", shirt: "#00aeea", pants: "#ff3d94", accent: "#ffd21f", item: "crown", vibe: "party queen" },
  { rank: "K", name: "Rey Rufi", skin: "#bf7049", hair: "#7c361c", shirt: "#ffd21f", pants: "#00aeea", accent: "#ff3d94", item: "beer", vibe: "party king" }
];

function hex(value) {
  const safe = value.replace("#", "");
  return [Number.parseInt(safe.slice(0, 2), 16), Number.parseInt(safe.slice(2, 4), 16), Number.parseInt(safe.slice(4, 6), 16), 255];
}

function createCanvas() {
  return new Uint8Array(width * height * 4);
}

function pixel(buffer, x, y, color) {
  const px = Math.round(x);
  const py = Math.round(y);
  if (px < 0 || py < 0 || px >= width || py >= height) return;
  const index = (py * width + px) * 4;
  buffer[index] = color[0];
  buffer[index + 1] = color[1];
  buffer[index + 2] = color[2];
  buffer[index + 3] = color[3] ?? 255;
}

function ellipse(buffer, cx, cy, rx, ry, color) {
  const minX = Math.max(0, Math.floor(cx - rx));
  const maxX = Math.min(width - 1, Math.ceil(cx + rx));
  const minY = Math.max(0, Math.floor(cy - ry));
  const maxY = Math.min(height - 1, Math.ceil(cy + ry));
  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      if (dx * dx + dy * dy <= 1) pixel(buffer, x, y, color);
    }
  }
}

function rect(buffer, x, y, w, h, color) {
  for (let py = Math.max(0, Math.floor(y)); py < Math.min(height, Math.ceil(y + h)); py += 1) {
    for (let px = Math.max(0, Math.floor(x)); px < Math.min(width, Math.ceil(x + w)); px += 1) pixel(buffer, px, py, color);
  }
}

function line(buffer, x1, y1, x2, y2, thickness, color) {
  const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  for (let step = 0; step <= steps; step += 1) {
    const t = steps === 0 ? 0 : step / steps;
    ellipse(buffer, x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, thickness / 2, thickness / 2, color);
  }
}

function outlinedEllipse(buffer, cx, cy, rx, ry, fill, outline = "#111111", stroke = 15) {
  ellipse(buffer, cx, cy, rx + stroke, ry + stroke, hex(outline));
  ellipse(buffer, cx, cy, rx, ry, hex(fill));
}

function outlinedLine(buffer, x1, y1, x2, y2, thickness, fill) {
  line(buffer, x1, y1, x2, y2, thickness + 14, hex("#111111"));
  line(buffer, x1, y1, x2, y2, thickness, hex(fill));
}

function drawItem(buffer, character) {
  const black = hex("#111111");
  const white = hex("#fff9ef");
  const cyan = hex("#00aeea");
  const pink = hex("#ff3d94");
  const yellow = hex("#ffd21f");
  const x = 555;
  const y = 620;

  if (character.item === "cup" || character.item === "beer") {
    rect(buffer, x - 38, y - 92, 76, 120, black); rect(buffer, x - 27, y - 80, 54, 95, character.item === "beer" ? yellow : pink);
    line(buffer, x + 35, y - 62, x + 72, y - 25, 17, black); line(buffer, x + 35, y - 62, x + 72, y - 25, 7, white);
  } else if (character.item === "phone") {
    outlinedEllipse(buffer, x, y - 35, 48, 85, "#ff3d94"); outlinedEllipse(buffer, x, y - 55, 31, 45, "#fff9ef", "#111111", 9);
  } else if (character.item === "boombox") {
    rect(buffer, x - 70, y - 70, 140, 92, black); rect(buffer, x - 57, y - 57, 114, 66, cyan); outlinedEllipse(buffer, x - 31, y - 24, 19, 19, "#ff3d94"); outlinedEllipse(buffer, x + 31, y - 24, 19, 19, "#ff3d94");
  } else if (character.item === "paddle") {
    outlinedEllipse(buffer, x, y - 62, 56, 56, "#ff3d94"); outlinedLine(buffer, x, y - 8, x, y + 78, 17, "#ffd21f");
  } else if (character.item === "notes") {
    rect(buffer, x - 46, y - 72, 92, 112, black); rect(buffer, x - 34, y - 60, 68, 88, white); line(buffer, x - 20, y - 38, x + 20, y - 38, 8, pink); line(buffer, x - 20, y - 10, x + 12, y - 10, 8, cyan);
  } else if (character.item === "salute") {
    outlinedLine(buffer, x - 70, y - 100, x - 15, y - 138, 22, character.accent); outlinedEllipse(buffer, x - 1, y - 148, 22, 22, character.accent);
  } else if (character.item === "calculator") {
    rect(buffer, x - 47, y - 74, 94, 122, black); rect(buffer, x - 34, y - 61, 68, 96, yellow); rect(buffer, x - 20, y - 49, 40, 20, cyan);
    for (let dy = 0; dy < 3; dy += 1) for (let dx = 0; dx < 3; dx += 1) outlinedEllipse(buffer, x - 20 + dx * 20, y - 6 + dy * 19, 6, 6, "#ff3d94", "#111111", 3);
  } else if (character.item === "whistle") {
    outlinedEllipse(buffer, x, y - 45, 45, 28, "#ffd21f"); outlinedLine(buffer, x - 32, y - 28, x - 70, y + 25, 12, "#00aeea");
  } else if (character.item === "trumpet") {
    outlinedLine(buffer, x - 62, y - 62, x + 35, y - 95, 20, "#ffd21f"); outlinedEllipse(buffer, x + 52, y - 100, 34, 34, "#ffd21f");
  } else if (character.item === "headphones") {
    outlinedEllipse(buffer, x, y - 72, 62, 62, "#00aeea", "#111111", 12); outlinedEllipse(buffer, x - 57, y - 28, 25, 36, "#ff3d94"); outlinedEllipse(buffer, x + 57, y - 28, 25, 36, "#ff3d94");
  } else if (character.item === "fan") {
    for (let index = 0; index < 5; index += 1) outlinedLine(buffer, x, y, x - 70 + index * 34, y - 100 - Math.abs(2 - index) * 14, 13, ["#ff3d94", "#00aeea", "#ffd21f"][index % 3]);
  } else if (character.item === "crown") {
    rect(buffer, x - 56, y - 72, 112, 37, black); rect(buffer, x - 42, y - 62, 84, 20, yellow);
    outlinedLine(buffer, x - 42, y - 48, x - 48, y - 108, 17, "#ffd21f"); outlinedLine(buffer, x, y - 48, x, y - 120, 17, "#ffd21f"); outlinedLine(buffer, x + 42, y - 48, x + 48, y - 108, 17, "#ffd21f");
  }
}

function drawCharacter(character) {
  const buffer = createCanvas();
  const black = hex("#111111");
  const white = hex("#fff9ef");
  const skin = hex(character.skin);
  const hair = hex(character.hair);
  const shirt = hex(character.shirt);
  const pants = hex(character.pants);
  const accent = hex(character.accent);
  const offset = characters.indexOf(character) % 3 === 0 ? -12 : characters.indexOf(character) % 3 === 1 ? 9 : 0;

  // Shoes and 90s baggy legs.
  outlinedLine(buffer, 315 + offset, 770, 282 + offset, 906, 54, character.pants);
  outlinedLine(buffer, 448 + offset, 770, 498 + offset, 906, 54, character.pants);
  outlinedEllipse(buffer, 256 + offset, 924, 76, 34, "#fff9ef");
  outlinedEllipse(buffer, 528 + offset, 924, 76, 34, "#fff9ef");

  // Torso and oversized head.
  outlinedEllipse(buffer, 383 + offset, 680, 168, 176, character.shirt);
  outlinedEllipse(buffer, 383 + offset, 437, 187, 203, character.skin);
  outlinedEllipse(buffer, 383 + offset, 301, 174, 92, character.hair);
  outlinedEllipse(buffer, 274 + offset, 421, 70, 91, "#fff9ef");
  outlinedEllipse(buffer, 482 + offset, 408, 82, 106, "#fff9ef");
  outlinedEllipse(buffer, 279 + offset, 435, 26, 35, "#111111", "#111111", 0);
  outlinedEllipse(buffer, 487 + offset, 420, 29, 38, "#111111", "#111111", 0);
  outlinedEllipse(buffer, 267 + offset, 423, 8, 11, "#fff9ef", "#fff9ef", 0);
  outlinedEllipse(buffer, 477 + offset, 408, 9, 12, "#fff9ef", "#fff9ef", 0);
  outlinedEllipse(buffer, 383 + offset, 508, 40, 26, character.skin, "#111111", 10);
  outlinedEllipse(buffer, 385 + offset, 569, 106, 73, "#471123");
  rect(buffer, 320 + offset, 540, 26, 35, white); rect(buffer, 354 + offset, 540, 26, 35, white); rect(buffer, 388 + offset, 540, 26, 35, white); rect(buffer, 422 + offset, 540, 26, 35, white);
  outlinedEllipse(buffer, 391 + offset, 615, 49, 22, "#ff3d94", "#111111", 8);

  // Arms, jewelry and 90s accessories.
  outlinedLine(buffer, 247 + offset, 664, 161 + offset, 716, 38, character.skin);
  outlinedLine(buffer, 517 + offset, 665, 586 + offset, 596, 38, character.skin);
  outlinedEllipse(buffer, 144 + offset, 728, 38, 42, character.skin);
  outlinedEllipse(buffer, 603 + offset, 581, 38, 42, character.skin);
  outlinedLine(buffer, 230 + offset, 766, 528 + offset, 766, 22, character.accent);
  outlinedEllipse(buffer, 383 + offset, 766, 20, 20, character.accent);
  if (character.rank === "J" || character.rank === "10") {
    outlinedEllipse(buffer, 383 + offset, 647, 34, 18, "#ff3d94", "#111111", 7);
    outlinedEllipse(buffer, 383 + offset, 670, 16, 16, "#ffd21f", "#111111", 6);
  }
  if (character.rank === "Q" || character.rank === "K") {
    outlinedEllipse(buffer, 383 + offset, 216, 83, 36, "#ffd21f");
    outlinedLine(buffer, 321 + offset, 220, 302 + offset, 150, 18, "#ffd21f");
    outlinedLine(buffer, 383 + offset, 217, 383 + offset, 133, 18, "#ffd21f");
    outlinedLine(buffer, 445 + offset, 220, 465 + offset, 150, 18, "#ffd21f");
  }
  drawItem(buffer, character);
  return buffer;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const name = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([length, name, data, checksum]);
}

function writePng(file, pixels) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let row = 0; row < height; row += 1) {
    raw[row * (width * 4 + 1)] = 0;
    Buffer.from(pixels.buffer, pixels.byteOffset + row * width * 4, width * 4).copy(raw, row * (width * 4 + 1) + 1);
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  const png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", header), chunk("IDAT", deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
  writeFileSync(file, png);
}

mkdirSync(outputDir, { recursive: true });
for (const character of characters) writePng(resolve(outputDir, `${character.rank}.png`), drawCharacter(character));
writeFileSync(resolve(outputDir, "characters.json"), `${JSON.stringify(characters, null, 2)}\n`);
