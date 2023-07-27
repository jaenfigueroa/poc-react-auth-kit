module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    /* comillas simple */
    quotes: ["error", "single"],
    /* comillas simples en jsx */
    "jsx-quotes": ["error", "prefer-single"],
    /* no punto y coma */
    semi: ["error", "never"],
    /* no console.log */
    // "no-console": ["warn"],
    /* no var */
    "no-var": ["error"],
    /* usar const */
    "prefer-const": ["error"],
    /* no espacios en blanco al final */
    "no-trailing-spaces": ["error"],
    /* comas final en listas */
    "comma-dangle": ["error", "always-multiline"],
    /* tab 2 espacios */
    indent: ["error", 2],
  },
};
