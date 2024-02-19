const autoPrefixer = require("autoprefixer");
const postcssNested = require("postcss-nested");

module.exports = () => ({
  plugins: [autoPrefixer, postcssNested],
});
