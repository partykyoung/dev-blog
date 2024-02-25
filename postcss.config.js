const autoPrefixer = require("autoprefixer");
const postcssNested = require("postcss-nested");
const postcssMixins = require("postcss-mixins");
const postcssSimpleVars = require("postcss-simple-vars");
const postcssImport = require("postcss-import");

const mixins = require("./config/postcss/mixin");
const variables = require("./config/postcss/variables");

module.exports = () => ({
  plugins: [
    postcssImport,
    autoPrefixer,
    postcssSimpleVars({
      variables,
    }),
    postcssMixins({
      mixins,
    }),
    postcssNested,
  ],
});
