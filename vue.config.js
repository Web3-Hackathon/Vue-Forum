const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    resolve: {
      fallback: {
        fs:false,
        crypto : require.resolve("crypto-browserify")
      }
    },
    plugins:[new NodePolyfillPlugin()],
  }
  
  
})

