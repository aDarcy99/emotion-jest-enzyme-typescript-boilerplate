module.exports = {
  extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "airbnb",
      "plugin:jest/recommended",
      "plugin:jest/style",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
      tsconfigRootDir: "./",
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        directory: "./tsconfig.json"
      },
    },
  },
  plugins: [
      "react",
      "@typescript-eslint",
      "import",
      "react-hooks",
      "emotion",
      "jest",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "max-len": "off",
    "import/extensions": "off",
  },
  globals: {
    React: "writable",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  }
};
