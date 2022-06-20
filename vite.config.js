export default {
  server: {
    port: 8000,
    host: "0.0.0.0"
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}