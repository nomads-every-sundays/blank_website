const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = ( env = 'production' ) => merge(baseConfig(env), {
	mode: env,
});
