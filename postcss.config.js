const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	parser: 'postcss-scss',
	plugins: [
		postcssPresetEnv({
			autoprefixer: true,
		}),
	],
};
