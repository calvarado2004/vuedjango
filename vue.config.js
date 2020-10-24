const Dotenv = require('dotenv-webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ],
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
}