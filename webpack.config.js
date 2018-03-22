var ExtractTextPlugin = require("extract-text-webpack-plugin");
const MinifyPlugin = require('babel-minify-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: true
});

module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new MinifyPlugin()
  ],
  devServer: {
    contentBase: __dirname + "/dist",
    compress: true,
    port: 9000
  }
};