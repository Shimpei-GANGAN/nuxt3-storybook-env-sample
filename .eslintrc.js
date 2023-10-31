// @ts-check
/**
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/nuxt/eslint-config/ | nuxt/eslint-config}
 * @see GitHub: {@link https://github.com/storybookjs/eslint-plugin-storybook | eslint-plugin-storybook}
 */
module.exports = {
  root: true,
  ignorePatterns: ["!./storybook/*"],
  extends: ["@nuxt/eslint-config", "plugin:storybook/recommended"],
};
