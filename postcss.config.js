const postcssNested = require("postcss-nested");
const postcssSimpleVars = require("postcss-simple-vars");
const postcssMixins = require("postcss-mixins");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = () => ({
  plugins: [postcssNested, postcssSimpleVars, postcssMixins, postcssPresetEnv],
});
