const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.config');

config.devtool = 'source-map';
 
var port = '7070';
config.devServer = {
    noInfo: true,
    port: port,
    contentBase: './',
    proxy: {
        "/api": {
            target: "http://10.17.64.52:8012",
            secure: false,
        }
    }
}; 
config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({
        template: './index.html',
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),

    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        include: ['main.build.js'],
        exclude: ['vendor.js'],
        columns: false
    })
]);

module.exports = config;