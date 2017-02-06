var webpack = require('webpack'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
  entry: {
        main: './src/app.js',
        vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: __dirname + '/public',
    filename: 'js/[name].[chunkhash].build.js',
    chunkFilename: "js/[name].[chunkhash].min.js"
  },
  module: {
    loaders: [ 
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract("css-loader")
      }, 
      {
        test: /\.(png|jpg|gif|txt|txe|pdf|zip)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor','js/[name].[chunkhash].js'),
    new webpack.optimize.UglifyJsPlugin({
      minimize:true,
      compress: {warnings: false}
    }),
    new webpack.optimize.OccurenceOrderPlugin(), 
    new ExtractTextPlugin('/css/[name].[contenthash].css') 
  ],
  devtool:false,
};