module.exports = {
  entry: {
    inputfield: "./src/js/InputField/index.js",
    progressbar: "./src/js/ProgressBar/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        include: __dirname + '/src/js',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
