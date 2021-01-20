const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.min\.css$/,
				cssProcessorOptions: {
					discardComments: {
						removeAll: true,
					},
				},
			}),
			new UglifyJsPlugin({
				sourceMap: true,
				uglifyOptions: {
					output: {
						comments: false,
					},
					compress: {
						drop_console: true,
					},
				},
			}),
		],
	},
});
