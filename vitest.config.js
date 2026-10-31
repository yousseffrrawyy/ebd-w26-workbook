// Vitest configuration. Students never need to edit this file.
//
// `include` is why the runner only picks up exercise.test.js files: every
// module keeps its tests in one predictably named file, so `npm test` from
// the repo root runs the whole workbook and nothing else.
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/exercise.test.js", "**/solution.test.js"],
    environment: "node",
    // A typo in a module name should be an error, not a silent pass.
    passWithNoTests: false,
  },
});
