/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/


// vue.config.js
module.exports = {
  // options...
  publicPath:
      process.env.NODE_ENV === "production" ? "/demo/c/vue-pro/crm/" : "/",
  assetsDir: "",
  filenameHashing: true,
  productionSourceMap: false,
};
