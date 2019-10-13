const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	return {
		entry:  path.resolve(__dirname, '../src/js/index.js'),
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'js/bundle.js'
		},
		watch: env.development,
		devtool: 'eval',
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
								outputPath: './css',
								sourceMap: env.development,
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								config: {
									path: path.resolve(__dirname, '../'),
									ctx: {
										cssnano: env.production,
									},
								},
								sourceMap: env.development,
							},
						},
						{
							loader: 'sass-loader',
							options: { sourceMap: env.development },
						},
					],
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
					}
				}
			],
		},
		plugins: [

		],
	};
};
