/* eslint-disable @typescript-eslint/no-var-requires */

const baseConfig = require("../eslint");

const {
  "import/order": [_, importRule],
} = baseConfig.rules;

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "prettier/prettier": "error",
    "import/order": ["error", importRule],
    "no-debugger": "error",
  },
};
