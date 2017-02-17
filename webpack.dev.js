'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rootDir = path.resolve(__dirname);

module.exports = {
  
  entry: {
    boot: [path.resolve(rootDir, 'src', 'boot')],
    vendor: [path.resolve(rootDir, 'src', 'vendor')]
  },
  
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(rootDir, 'build')
  },
  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(pcss|css)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'file-loader?name=media/[name].[ext]',
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  
  devServer: {
    contentBase: path.resolve(rootDir, 'build'),
    port: 3000,
    quiet: true,
    noInfo: true
  },
  
  debug: true,
  devtool: 'cheap-module-source-map',
  
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'index.html')
    }),
    new ExtractTextPlugin("css/[name].bundle.css")
  ],
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
  
};