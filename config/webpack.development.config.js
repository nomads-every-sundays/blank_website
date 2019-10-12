const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


module.exports = ( env = 'development' ) => merge(baseConfig(env), {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'sass-loader',
						options: { sourceMap: false },
					},
				],
			}
		],
	},
});