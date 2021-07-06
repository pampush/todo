const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    //publicPath: './',
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    contentBase: 'public',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          miniCss.loader,
          // Creates `style` nodes from JS strings
          //"style-loader",
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          miniCss.loader,
          //"style-loader",
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/img/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
    //   new CopyWebpackPlugin({
    //     patterns: [
    //         { from: './src/img', to: 'dest' }
    //     ]
    // })
  ],
};
