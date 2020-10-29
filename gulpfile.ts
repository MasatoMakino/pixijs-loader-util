const { parallel, series } = require("gulp");

const doc = require("gulptask-tsdoc").generateTask();
const server = require("gulptask-dev-server").generateTask("./docs/demo", {
  usePhpDevServer: false,
});
const {
  bundleDemo,
  cleanDemo,
  watchDemo,
} = require("gulptask-demo-page").generateTasks({
  externalScripts: [],
  copyTargets: ["png", "jpg", "jpeg", "mp4"],
});

const { tsc, tscClean, watchTsc } = require("gulptask-tsc").generateTasks({
  projects: ["tsconfig.cjs.json", "tsconfig.esm.json"],
});

const watchTasks = async () => {
  watchDemo();
  watchTsc();
};

exports.start_dev = series(watchTasks, server);
exports.build = series(tsc, parallel(bundleDemo, doc));
exports.build_clean = series(tscClean, parallel(cleanDemo, doc));
