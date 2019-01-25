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
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
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
