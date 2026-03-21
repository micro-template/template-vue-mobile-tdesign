import {
  importSpecifierNewline
} from "../plugins/index.js";

export default {
  plugins: {
    mt: {
      rules: {
        ...importSpecifierNewline.rules
      }
    }
  },
  rules: {
    "mt/import-specifier-newline": "error"
  }
};
