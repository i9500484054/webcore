const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` :  `[name].[contenthash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		index: './index.js'
	},
	output: {
		filename: `./${filename('js')}`,
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: ''
	},
	devtool: 'inline-source-map', // Включаем карту по сайту
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			filename: 'index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new MiniCssExtractPlugin({
			filename: `./css/${filename('css')}`
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: path.resolve(__dirname, 'src/assets'), to:path.resolve(__dirname, 'dist/assets')}
				// {from: path.resolve(__dirname, 'src/img'), to:path.resolve(__dirname, 'dist/img')},
				// {from: path.resolve(__dirname, 'src/fonts'), to:path.resolve(__dirname, 'dist/fonts')}
			]
		}),
		new FaviconsWebpackPlugin('./assets/favicon.ico'),
	],
	module: {
    rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
      // {
      //   test: /\.css$/i,
      //   use: [
			// 		{
			// 			loader: MiniCssExtractPlugin.loader,
			// 			options: {
			// 				hmr: isDev
			// 			}
			// 		},
			// 		'css-loader'
			// 	],
      // },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
		]
	}
}