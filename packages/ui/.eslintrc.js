module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: [
    "custom",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
    "react/react-in-jsx-scope": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
