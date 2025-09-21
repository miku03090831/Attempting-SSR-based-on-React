const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "server.bundle.mjs",
    library: {
      type: "module",  // 现代 ESM 输出方式
    },
    environment: {
      // 指定可使用的现代 ES 特性
      module: true,
      dynamicImport: true,
    },
  },
  experiments: {
    // 启用实验性 ESM 输出
    outputModule: true,
    // 启用 barrel 文件优化
    lazyBarrel: true,
  },
  externalsType: "module",
  externals: {
    // ESM 格式的外部依赖
    express: "express",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
