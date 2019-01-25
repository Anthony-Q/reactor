const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./build")
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: "/",
    hot: true
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        query: {
          presets: ["react", "env"],
          plugins: [["styled-components"], ["babel-plugin-styled-components"]]
        }
      }
    ]
  }
};
