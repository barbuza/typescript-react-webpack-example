module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loaders: ['babel', 'ts'] }
    ]
  },
  ts: {
    compiler: 'typescript'
  }
}
