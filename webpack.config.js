module.exports = {
    entry: {
        app: './src/index.js',
      },
      mode: 'development',
      output: {
        filename: 'index.js',
        path: __dirname + '/public',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              { loader: "css-loader", options: { importLoaders: 1 } },
              "postcss-loader",
            ],
          },
        ],
      },
  };