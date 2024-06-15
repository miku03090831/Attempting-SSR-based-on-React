module.exports = {
  target: "node",
  entry: "./server.js",
  mode: 'development',
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
};
