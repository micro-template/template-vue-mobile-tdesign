import tsParser from "@typescript-eslint/parser";
import {
  importX
} from "eslint-plugin-import-x";

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

      // 防止重复 import
      "import-x/no-duplicates": "error",

      // 禁止无效路径
      "import-x/no-unresolved": "error",
      "import-x/no-cycle": "error",
      "import-x/first": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-relative-parent-imports": "warn",
      "import-x/export": "error",

      // 🔥 必开

      // 🔥 强烈推荐
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            [
              "parent",
              "sibling",
              "index"
            ]
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],

      "import-x/no-default-export": "off"
    }
  }
].filter(Boolean);

export default configs;
