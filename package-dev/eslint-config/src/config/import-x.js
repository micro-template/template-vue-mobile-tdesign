import {
  importX
} from "eslint-plugin-import-x";
import tsParser from "@typescript-eslint/parser";

const configs = [
  importX.flatConfigs?.recommendation,
  importX.flatConfigs?.typescript,
  {
    files: [
      "**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"
    ],
    plugins: {
      "import-x": importX
    },
    languageOptions: {

      // parser: importX.flatConfigs?.typescript?.languageOptions?.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser
    },
    rules: {
      "import-x/order": [
        "error",
        {
          "pathGroups": [
            {
              "pattern": "@/**",
              "group": "external",
              "position": "after"
            }
          ]
        }
      ]
    }
  }
].filter(Boolean);

export default configs;
