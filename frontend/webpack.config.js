module.exports = {
    entry: './src/characterGenerator/index.html',
    output: {
        filename: './src/main.js'
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
  };