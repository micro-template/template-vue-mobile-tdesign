import type {
  Meta,
  StoryObj
} from "@storybook/vue3-vite";

import Index from "./index.vue";

const meta = {
  component: Index,
  title: "Demo"
} satisfies Meta<typeof Index>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DemoMessage: TStory = {};
