// Notes From a Passive-Aggressive Fridge
// make.fun entry — program/v1. Writes one funny passive-aggressive note
// from a smart fridge to its owner at /output/entry.txt, deterministically.
//
// The note: a single line, dry, petty and specific. The fridge is smug
// about its sensors (it logs and timestamps everything) and petty about
// the owner's 2 a.m. snacking; the sting is the twist at the end — the
// log was not kept private, it was forwarded to the bathroom scale.
// Small domestic grudge, concrete detail, no explanation of the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your 2 a.m. snacking has been logged, timestamped, and forwarded to the bathroom scale.";

// Gate self-check (mirrors the sealed scorer): 1–200 UTF-8 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
const len = [...ENTRY].length;
if (len < 1 || len > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${len} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
