module.exports = {
  entry: {
    // this is the actual entry point
    shell: './src/app.js',

    // these are not actual entry points
    // we are just telling webpack to transpile these node_modules into AMD modules
    react: './node_modules/react/index.js',
    'react-dom': './node_modules/react-dom/index.js'
  },
  output: {
    // [name] in brackets here will be replaced with the module name (whatever is to
    // the left of the colon) in the "entry" section above
    filename: '[name].js',
    library: '[name]',

    // yep, output everything as AMD
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
