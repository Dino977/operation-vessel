const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(process.cwd(), "./lib"),
    library: {
      type: "umd",
      name: "OPERATION",
      umdNamedDefine: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 配合 babel.config.js 文件，将 ES6 代码转换为 ES5 代码
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
