const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

	console.log(env);
	console.log((env.production));

	return {
		mode: env,
		entry:  path.resolve(__dirname, '../src/js/index.js'),
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'js/bundle.js'
		},
		watch: env.development,
		devtool: 'source-map',
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
								sourceMap: true,
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
							},
						},
						{
							loader: 'sass-loader',
							options: { sourceMap: true },
						},
					],
				},
			],
		},
		plugins: [
			// new MiniCssExtractPlugin({
			// 	// Options similar to the same options in webpackOptions.output
			// 	// all options are optional
			// 	filename: 'css/[name].css',
			// 	chunkFilename: 'css/[id].css',
			// 	ignoreOrder: false, // Enable to remove warnings about conflicting order
			// }),
		],
	};
};
