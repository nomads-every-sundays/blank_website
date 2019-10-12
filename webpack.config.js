const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
	console.log(env);
	return {
		mode: env.production ? 'production' : 'development',
		entry: './src/js/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/bundle.js'
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								// you can specify a publicPath here
								// by default it uses publicPath in webpackOptions.output
								// publicPath: '../',
								hmr: process.env.NODE_ENV === 'development',
							},
						},
						'css-loader',
						'postcss-loader',
						'sass-loader',
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// all options are optional
				filename: 'css/[name].css',
				chunkFilename: 'css/[id].css',
				ignoreOrder: false, // Enable to remove warnings about conflicting order
			}),
		],
	};
};
