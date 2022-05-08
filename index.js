const floydSteinberg = require("floyd-steinberg");
const { PNG } = require("pngjs");
const { stdin, stdout } = require("process");

stdin.pipe(new PNG()).on("parsed", function () {
  floydSteinberg(this).pack().pipe(stdout);
});
