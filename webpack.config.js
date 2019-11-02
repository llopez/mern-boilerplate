const path = require('path')
module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'src', 'server', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
    ]
  }
}
