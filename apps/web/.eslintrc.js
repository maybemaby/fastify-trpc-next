module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: [
    "custom",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
};
