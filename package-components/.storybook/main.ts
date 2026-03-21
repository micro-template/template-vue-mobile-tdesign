import type {
  StorybookConfig
} from "@storybook/vue3-vite";
import {
  mergeConfig
} from "vite";

const config: StorybookConfig = {
  "stories": [
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": "@storybook/vue3-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: "./postcss.config.js"
      }
    });
  }
};

export default config;
