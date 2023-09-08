module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "eslint-config-prettier"],
  plugins: ["import"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
