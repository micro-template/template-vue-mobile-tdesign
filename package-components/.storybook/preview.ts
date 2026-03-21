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

// 👇 就放在这里（和 export default 同级）
export const decorators = [
  () => ({
    template: `
      <div>
        <style>
          html {
            font-size: 37.5px;
          }
        </style>
        <story />
      </div>
    `
  })
];
