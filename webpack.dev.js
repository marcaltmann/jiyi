const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
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
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = merge(common, devConfig);
