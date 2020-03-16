const path = require("path");
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // convert ES2020 to ES5
                "@babel/react" // explain React - 'jsx'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  }
};
