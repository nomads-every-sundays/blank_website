const path = require('path');

const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = ( env = 'development' ) => merge(baseConfig(env), {
	mode: 'development',
	plugins: [
		new CopyPlugin([
			{
				from: path.resolve(__dirname, '../images'), to: path.resolve(__dirname, '../dist/images')
			},
		]),
	]
});
