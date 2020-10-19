/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  plugins: [
    "prettier",
    "react",
    "filenames",
    "promise",
    "security",
    "no-secrets",
    "unicorn",
    "optimize-regex",
    "react-hooks",
  ],
  extends: [
    "plugin:react/recommended",
    "prettier",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:unicorn/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // general
    "no-console": "error",
    "no-dupe-keys": "error",
    "object-shorthand": "error",
    "no-undef": "error",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_+",
      },
    ],
    "no-use-before-define": "error",
    "no-warning-comments": [
      "error",
      {
        terms: ["no commit"],
        location: "anywhere",
      },
    ],
    curly: "error",
    "no-unneeded-ternary": "error",
    "no-nested-ternary": "error",

    // filenames
    "filenames/match-regex": ["error", "^[a-z0-9.-]+$", false],
    "filenames/match-exported": "off",

    // react
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/boolean-prop-naming": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/no-unused-prop-types": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/require-default-props": "off",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",

    // prettier
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        semi: false,
        arrowParens: "always",
      },
    ],

    // promise
    "promise/prefer-await-to-then": "error",
    "promise/prefer-await-to-callbacks": "error",

    // no-secrets
    "no-secrets/no-secrets": "error",

    // regex
    "optimize-regex/optimize-regex": "warn",

    // react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // unicorn
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: false,
          ctx: false,
        },
      },
    ],

    "max-lines": ["error", 500],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "case",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "default",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      },
    ],

    // async
    "no-restricted-syntax": [
      "error",
      {
        selector: "FunctionDeclaration[async=false][id.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector: "FunctionDeclaration[async=true][id.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
      {
        selector: "MethodDefinition[value.async=false][key.name=/Async$/]",
        message: "Method ending in 'Async' must be declared async",
      },
      {
        selector: "MethodDefinition[value.async=true][key.name!=/Async$/]",
        message: "Async method name must end in 'Async'",
      },
      {
        selector:
          "Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          "Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
      {
        selector:
          "VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          "VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
    ],
  },
}
