const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/grupo-trescalo",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Grupo Trescalo";
      return args;
    });
  },
  configureWebpack: {
    mode: "production",
    optimization: {
      nodeEnv: "production",
      minimize: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_fonts.scss";
          @import "@/styles/_global.scss";
        `,
      },
    },
  },
});
