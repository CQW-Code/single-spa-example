// webpack.config.js

const path = require('path');
const webpack = require('webpack');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
    mode: 'development',
    entry: {
      // set the single-spa config as the project entry point
        'single-spa.config': 'single-spa-config.js',
    },
    output: {
      publicPath: '/dist/',
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          // Webpack style loader added, use materialize
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/,
          exclude: [path.resolve(__dirname, 'node_modules')],
          loader: 'babel-loader',
        },
        {
          //this plugin will allow for use of html templates when getting to
          // the angular1 app
            test:/\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader',
        },
      ],
    },
    node: {
      fs: 'empty'
    },
    resolve: {
      modules: [
        __dirname,
        'node_modules',
      ],
    },
    plugins: [
      // a webpack plugin to remove/clean the build folder(s)
      // before building
        new CleanWebPackPlugin(['dist']),
      //plugin to allow overriding the inferred info
      // angular core context is restricted to files within src dir
        new ContextReplacementPlugin(
          /(.+)?angular(\\|\/)core(.+)?/,
          path.resolve(__dirname, '../src')
        )
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
      historyApiFallback: true
    }
};