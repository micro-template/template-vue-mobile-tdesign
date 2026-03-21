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
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-unresolved": "off",
      "import/no-webpack-loader-syntax": "error",
      "import/namespace": "error",
      "import/no-cycle": [
        "error",
        {
          ignoreExternal: false,
          maxDepth: 4
        }
      ],
      "import/no-useless-path-segments": 1,
      "import/exports-last": 1,
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          pathGroups: [
            {
              pattern: "@/**", // alias
              group: "internal"
            }
          ],
          pathGroupsExcludedImportTypes: [], // 否则厂内二方包和三方包之间不可加空行
          "newlines-between": "always"
        }
      ]
    }
  }
].filter(Boolean);

export default configs;
