const path = require("path");

module.exports = {
  mode: "development",
  entry: "src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/js"),
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: { src: path.join(__dirname, "src") },
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader", options: { allowTsInNodeModules: true } },
        ],
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: true, sourceMap: true, importLoaders: 2 },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 15360,
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
