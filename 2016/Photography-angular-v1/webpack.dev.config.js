/**
 * Created by v_lianwang on 2016/5/22.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "build.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: true
        })
    ],
    devServer: {
        port: 7070,
        contentBase: 'src/'
    },
    devtool: 'eval-source-map'
}
