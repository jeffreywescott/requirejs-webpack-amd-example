module.exports = {
  entry: {
    remote: './src/Remote'
  },
  output: {
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'amd'
  },
  // don't bundle react or react-dom with our actual entry point bundle
  // this will add anything used by our app as a dependency in the module definition
  externals: [
    'react',
    'react-dom'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
