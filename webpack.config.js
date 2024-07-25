const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "./lib"),
    library: {
      type: "commonjs2", // 缺少此项时，针对 Vue2.x 版本，库将无法正常使用
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
  plugins: [new VueLoaderPlugin()], // 该插件与 vue-loader 一起使用，用于解析 .vue 文件
};
