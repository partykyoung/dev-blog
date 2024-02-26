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
const postcssPresetEnv = require("postcss-preset-env");

const mixins = require("./config/postcss/mixin");
const variables = require("./config/postcss/variables");

module.exports = () => ({
  plugins: [
<<<<<<< HEAD
    postcssImport,
>>>>>>> 9b90dc6 (feat: postcss를 사용하여  반응형 퍼블리싱 환경 작업)
=======
>>>>>>> 4704d73 (refactor: fsd 아키텍처 구조에 맞게 레이아웃 재작업)
    autoPrefixer,
    postcssSimpleVars({
      variables,
    }),
    postcssMixins({
      mixins,
    }),
    postcssNested,
<<<<<<< HEAD
<<<<<<< HEAD
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      },
    }),
=======
>>>>>>> 9b90dc6 (feat: postcss를 사용하여  반응형 퍼블리싱 환경 작업)
=======
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
      },
    }),
>>>>>>> 4704d73 (refactor: fsd 아키텍처 구조에 맞게 레이아웃 재작업)
  ],
});
