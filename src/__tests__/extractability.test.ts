import { test } from "bun:test";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { assertSeam } from "@bounded-systems/seam-check";

const SRC = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// audit-context is a zero-import leaf: ambient runtime context (verb, actor,
// truth reason) for audit attribution, scoped not global-forever. The harness
// proves it imports nothing external and holds no ambient authority.
test("@bounded-systems/audit-context upholds its seam claim (zero-dependency leaf)", () => {
  assertSeam({
    root: SRC,
    prod: [],
    test: ["@bounded-systems/audit-context", "@bounded-systems/seam-check"],
  });
});
