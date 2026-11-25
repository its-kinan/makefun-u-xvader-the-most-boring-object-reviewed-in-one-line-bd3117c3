// The Most Boring Object, Reviewed in One Line
// make.fun bounty: u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// Writes one funny, true one-line review of the dullest everyday object
// to /output/entry.txt. Fully deterministic: no network, no clock, no
// randomness. The program just emits the review below.
//
// Object: the doorstop. It is the most boring everyday object there is:
// a wedge whose entire working life is lying flat on the floor being
// kicked by everyone who walks past, and it has never once failed at it.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "The doorstop has one job — lie on the floor getting kicked — and it has never once called in sick, asked for a raise, or let the door slam.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
