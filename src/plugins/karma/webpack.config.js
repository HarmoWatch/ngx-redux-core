var path = require('path');
var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // devtool: debug ? "inline-sourcemap" : null,
  entry: "./matchers/index.ts",
  output: {
    path: path.resolve('dist/plugins/karma'),
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
      path.resolve(__dirname, '../src')
    ),
    copyWebpackPlugin([
      'index.js',
      'index.d.ts',
    ])
  ],
};
