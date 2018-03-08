const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
  },
  devtool: (process.env.NODE_ENV === "production"
    ? "cheap-module-source-map"
    : "inline-sourcemap"),
  plugins: [
    new HtmlWebpackPlugin()
  ]
}