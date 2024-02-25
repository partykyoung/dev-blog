module.exports = {
  "min-width": function (_, width) {
    return {
      ["@media screen and (min-width: " + width + "px)"]: {
        "@mixin-content": {},
      },
    };
  },
  "max-width": function (_, width) {
    return {
      ["@media screen and (max-width: " + (width - 0.02) + "px)"]: {
        "@mixin-content": {},
      },
    };
  },
};
