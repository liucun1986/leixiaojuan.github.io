const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./webpack.base.config');

config.devtool = 'source-map';

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new HtmlWebpackPlugin({
        template: './index.html', //相对根目录而言
        filename: 'index.html', //相对dist而言
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),
    new CopyWebpackPlugin([{from: './static', to: 'static'}]),
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;