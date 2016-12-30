/**
 * @author v_lianwang
 * @createTime 2016/8/8.
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const projectRoot = path.resolve(__dirname, '../'); 

module.exports = {
    entry: {
        main: './src/app.js',
        vendor: ['angular', 'angular-ui-router']
    },
    output: {
        path: './dist',
        filename: 'static/js/[name].build.js',
        chunkFilename: 'static/js/[name].chunk.js'
    },
    resolveLoader: {
        root: path.join(__dirname, '../node_modules')
    }, 
    module: { 
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\//
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/images/[name].[ext]?[hash]'
                }
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }, 
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", 'static/js/vendor.js')
    ] 
};