import type {
  Preview
} from "@storybook/vue3-vite";
import {
  INITIAL_VIEWPORTS
} from "storybook/viewport";

const preview: Preview = {
  parameters: {
    options: {
      panelPosition: "right"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      options: INITIAL_VIEWPORTS
    }
  },
  initialGlobals: {
    viewport: {
      value: "iphone14pro",
      isRotated: false
    }
  }
};

export default preview;
