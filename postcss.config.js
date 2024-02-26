const autoPrefixer = require("autoprefixer");
const postcssNested = require("postcss-nested");
const postcssMixins = require("postcss-mixins");
const postcssSimpleVars = require("postcss-simple-vars");
const postcssPresetEnv = require("postcss-preset-env");

const mixins = require("./config/postcss/mixin");
const variables = require("./config/postcss/variables");

module.exports = () => ({
  plugins: [
    autoPrefixer,
    postcssSimpleVars({
      variables,
    }),
    postcssMixins({
      mixins,
    }),
    postcssNested,
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
      },
    }),
  ],
});
