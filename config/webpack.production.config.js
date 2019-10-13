const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = ( env = 'production' ) => merge(baseConfig(env), {
	mode: 'production',
	plugins: [
	    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
	],
});
