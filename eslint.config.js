import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    plugins: {
      js,
    },

    extends: [
      "js/recommended",
    ],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      // Использование var считается ошибкой
      "no-var": "error",

      // Имена переменных и функций должны использовать camelCase
      "camelcase": ["error", { properties: "always" }],

      // Необъявленные переменные считаются ошибкой
      "no-undef": "error",

      // Для строк используем одинарные кавычки
      "quotes": ["error", "single"],
    },
  },

  // Рекомендуемые правила для React
  pluginReact.configs.flat.recommended,

  // Для современного JSX (React 17+)
  pluginReact.configs.flat["jsx-runtime"],
]);