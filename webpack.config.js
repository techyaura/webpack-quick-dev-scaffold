const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    liveReload: true,
  },
  module: {
      rules: [
        {
          test: /\.js?$/,
          use: ["babel-loader"]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.css?$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader'
            },
          ],
        }
      ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    inject: true,
  })]
};
