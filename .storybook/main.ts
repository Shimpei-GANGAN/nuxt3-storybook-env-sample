import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    // case1: /stories構成の場合
    "./stories/**/*.mdx",
    "./stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",

    // case2: /components/**/*.stories.*の場合
    "./components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./layouts/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
