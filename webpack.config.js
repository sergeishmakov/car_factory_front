const path = require('path');

const ProvidePlugin = require('webpack/lib/ProvidePlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.js',
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
  },
  resolve: {
    alias: {
      Components: path.resolve('./src/components/'),
      Scenes: path.resolve('./src/scenes/'),
      Containers: path.resolve('./src/containers/'),
      Colors: path.resolve('./src/colors/'),
      Hooks: path.resolve('./src/hooks'),
      Api: path.resolve('./src/api'),
      Utils: path.resolve('./src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      Rx: 'rxjs/Rx',
      bnc: 'bnc',
    }),

    new FaviconsWebpackPlugin('./public/favicon.ico'),

    new Dotenv(),
  ],
};
