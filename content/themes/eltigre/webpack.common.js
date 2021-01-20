const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: ['./dev/js/App.js', './dev/scss/global.scss'],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			TweenLite: path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
			TweenMax: path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
			TimelineLite: path.resolve('node_modules', 'gsap/src/minified/TimelineLite.min.js'),
			TimelineMax: path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
			ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
			'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
			'debug.addIndicators': path.resolve(
				'node_modules',
				'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
			),
		},
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpe?g)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: path.join(__dirname, '/dist'),
					},
				},
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties'],
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env', autoprefixer()],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new WebpackBar(),
		new ESLintPlugin({
			fix: true,
			exclude: './node_modules/',
		}),
		new StylelintPlugin({
			fix: true,
			files: './dev/scss/**/*.(s(c|a)ss|css)',
		}),
		new MiniCssExtractPlugin({
			filename: 'app.css',
			chunkFilename: '[id].css',
		}),
	],
};
