var path = require('path');


module.exports = {
  entry: './widgets.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
    
  },
  devtool: 'source-map',
  resolve: { 
    extensions: ['.js', '.jsx', '*']
  }
};