import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    env: {
      "jest/globals": true,
    },
    plugins: ["jest"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
      },

      ecmaVersion: 12,
    },
  },
  pluginJs.configs.recommended,
];
