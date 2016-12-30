var webpack = require('webpack'); 
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
  entry: {
        main: './src/app.js',
        vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: __dirname + '/public',
    filename: 'js/[name].build.js',
    chunkFilename: "js/[name].min.js"
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
        NODE_ENV: '"development"'
      }
    }), 
    new ExtractTextPlugin('/css/[name].css') 
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool:'#inline-source-map',
};