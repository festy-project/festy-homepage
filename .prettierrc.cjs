/** @type {import("prettier").Config} */
module.exports = {
  useTabs: false,
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  requirePragma: false,
  trailingComma: "all",
  arrowParens: "always",
  proseWrap: "never",
  endOfLine: "auto",
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};
