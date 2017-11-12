const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const common = require('./webpack.common.js');

const prodConfig = {
  devtool: 'none',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ],
        }),
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules'),
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      '__API_HOST__': JSON.stringify('http://www.example.com'),
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('styles.css'),
    new MinifyPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /api\/index\.js/,
      'realApi.js'
    ),
    new FaviconsWebpackPlugin(path.resolve(__dirname, 'src', 'images', 'favicon.png')),
  ],
};

module.exports = merge(common, prodConfig);
