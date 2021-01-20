const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
require('dotenv').config({ path: '../../../.env' });

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	plugins: [
		new BrowserSyncPlugin(
			{
				port: 3666,
				proxy: process.env.WP_HOME,
				files: ['dist/app.js', 'dist/app.css'],
			},
			{
				reload: false,
				injectCss: true,
			}
		),
	],
});
