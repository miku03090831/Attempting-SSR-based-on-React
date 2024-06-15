module.exports = {
  entry: {
    index: "./index.js",
    app: "./app.jsx",
  },
  mode: 'development',
  output: {
    filename: "[name].bundle.js",
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
};
