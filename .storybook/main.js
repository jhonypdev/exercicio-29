/**
 * @format
 * @type { import('@storybook/react-webpack5').StorybookConfig }
 */

const path = require("path");

const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/preset-create-react-app",
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	staticDirs: ["..\\public"],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/,
			use: ["style-loader", "css-loader", "postcss-loader"],
			include: path.resolve(__dirname, "../"),
		});
		return config;
	},
};
export default config;
