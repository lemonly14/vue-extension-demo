module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup"
    },
    options: {
      template: "public/browser-extension.html",
      entry: "./src/options/main.js",
      title: "Options"
    }
  },
  css: {
    extract: {
      filename: "css/[name].css"
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.js"
        },
        contentScripts: {
          entries: {
            content: ["src/content/index.js"]
          }
        }
      }
    }
  },
  chainWebpack: config => {
    // 查看打包组件大小情况
    if (process.env.npm_config_report) {
      // 在运行命令中添加 --report参数运行， 如：npm run build --report
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  }
  // 如果不想用 Promise 封装的 chrome 方法可以打开注释去掉，详情见：https://github.com/mozilla/webextension-polyfill
  // MDN 文档: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
  // chainWebpack(config) {
  //   config.plugins.delete("provide-webextension-polyfill");
  //   config.module.rules.delete("provide-webextension-polyfill");
  // }
};
