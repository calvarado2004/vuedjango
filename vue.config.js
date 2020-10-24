const Dotenv = require('dotenv-webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ],
    prodServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
}