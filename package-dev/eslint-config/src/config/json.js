import json from "@eslint/json";

export default [
  {
    files: [
      "**/*.json"
    ],
    plugins: {
      json
    },
    language: "json/json",
    rules: {
      ...json.configs.recommended.rules
    }
  },
  {
    files: [
      "**/*.jsonc"
    ],
    plugins: {
      json
    },
    language: "json/jsonc",
    rules: {
      ...json.configs.recommended.rules
    }
  },
  {
    files: [
      "**/*.json5"
    ],
    plugins: {
      json
    },
    language: "json/json5",
    rules: {
      ...json.configs.recommended.rules
    }
  }
];
