<<<<<<< HEAD
const autoPrefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssPresetEnv = require('postcss-preset-env');

const mixins = require('./config/postcss/mixin');
const variables = require('./config/postcss/variables');

module.exports = () => ({
  plugins: [
=======
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
>>>>>>> 9b90dc6 (feat: postcss를 사용하여  반응형 퍼블리싱 환경 작업)
    autoPrefixer,
    postcssSimpleVars({
      variables,
    }),
    postcssMixins({
      mixins,
    }),
    postcssNested,
<<<<<<< HEAD
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      },
    }),
=======
>>>>>>> 9b90dc6 (feat: postcss를 사용하여  반응형 퍼블리싱 환경 작업)
  ],
});
