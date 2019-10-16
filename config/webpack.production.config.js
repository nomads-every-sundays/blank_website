const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = ( env = 'production' ) => merge(baseConfig(env), {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, '../images'), to: path.resolve(__dirname, '../dist/images')
			},
		]),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			pngquant: {
				quality: '75',
			},
			jpegtran: {
				progressive: false,
			}
		}),
	],
});
