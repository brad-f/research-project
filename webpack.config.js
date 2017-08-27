const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './app/index.js'
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor'
    }),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
  ]
};
