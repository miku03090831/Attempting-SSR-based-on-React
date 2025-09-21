const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "index.bundle.js",
  },
  experiments: {
    // 启用 barrel 文件优化（新版本功能）
    lazyBarrel: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: [/[\\/]node_modules[\\/]/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
                development: false,
                refresh: false,
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
