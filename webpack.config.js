const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "index.js",
    path: path.resolve("dist"),
    libraryTarget: "umd",
    publicPath: `/static/dummy/1.0.0/`,
  },
  devtool: "eval-source-map",

  resolve: {
    extensions: [".tsx", ".js", ".ts", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: __dirname,
          },
        }]
      }, {
        test: /\.(js|ts)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, "static"), to: "static", noErrorOnMissing: true, },
    //     { from: path.resolve(__dirname, "locales"), to: "locales", noErrorOnMissing: true, },
    //   ],
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "src/index.html"),
    //   inject: true,
    // })
  ],
};
