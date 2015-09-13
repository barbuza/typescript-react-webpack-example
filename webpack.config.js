var WebpackHtmlPlugin = require('webpack-html-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
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
      { test: /\.styl$/, loaders: ['style', 'css?module&importLoaders=1&localIdentName=[hash:base64:5]', 'stylus'] },
      { test: /\.tsx?$/, loaders: ['react-hot', 'component-css?ext=styl&varName=styles', 'babel', 'ts'] }
    ]
  },
  ts: {
    compiler: 'typescript'
  },
  plugins: [
    new WebpackHtmlPlugin()
  ]
}
