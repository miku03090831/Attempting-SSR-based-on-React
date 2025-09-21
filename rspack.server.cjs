const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "server.bundle.cjs",
    libraryTarget: "commonjs2",
  },
  experiments: {
    // 启用 barrel 文件优化（新版本功能）
    lazyBarrel: true,
  },
  externalsType: "commonjs",
  externals: {
    // 排除所有 node_modules，让 Node.js 运行时处理
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
