const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ( env = 'development' ) => {
	return {
		entry:  path.resolve(__dirname, '../src/js/index.js'),
		output: {
			path: path.resolve(__dirname, '../dist'),
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
					// exclude: /node_modules/,
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
						{
							loader: 'sass-loader',
							options: { sourceMap: true },
						},
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

// const config = {
// 	// entry: '../src/js/index.js',
// 	entry:  path.resolve(__dirname, 'src/js/index.js'),
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'js/bundle.js'
// 	},
// 	optimization: {
// 		splitChunks: {
// 			chunks: 'all',
// 		},
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.s[ac]ss$/i,
// 				// exclude: /node_modules/,
// 				use: [
// 					{
// 						loader: MiniCssExtractPlugin.loader,
// 						options: {
// 							// you can specify a publicPath here
// 							// by default it uses publicPath in webpackOptions.output
// 							// publicPath: '../',
// 							hmr: process.env.NODE_ENV === 'development',
// 						},
// 					},
// 					'css-loader',
// 					'postcss-loader',
// 					{
// 						loader: 'sass-loader',
// 						options: { sourceMap: true },
// 					},
// 				],
// 			},
// 		],
// 	},
// 	plugins: [
// 		new MiniCssExtractPlugin({
// 			// Options similar to the same options in webpackOptions.output
// 			// all options are optional
// 			filename: 'css/[name].css',
// 			chunkFilename: 'css/[id].css',
// 			ignoreOrder: false, // Enable to remove warnings about conflicting order
// 		}),
// 	],
// };
//
// module.exports = config;
