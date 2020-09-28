# chrome-upload

开发文档：[Chrome 插件 (扩展) 开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)

此项目基于 Vue-Cli4 搭建，使用 vue-cli-plugin-browser-extension 插件构建开发 Chrome 扩展的环境，如扩展热更新、打包后自动压缩成 zip，更多详情点[这里](https://github.com/adambullmer/vue-cli-plugin-browser-extension)

```
📦src
 ┣ 📂api
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┗ 📜HelloWorld.vue
 ┣ 📂content              // 内容页，向页面注入脚本
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜SideBar.vue
 ┃ ┗ 📜index.js
 ┣ 📂options              // 插件的设置页面，右键扩展图标有一个"选项" 菜单
 ┃ ┣ 📜App.vue
 ┃ ┗ 📜main.js
 ┣ 📂popup                // 点击 chrome 图标时打开的一个小窗口网页，焦点离开就立即关闭，一般用来做一些临时性的交互
 ┃ ┣ 📜App.vue
 ┃ ┗ 📜main.js
 ┣ 📂utils
 ┃ ┗ 📜request.js          // 对 axios 进行二次封装
 ┣ 📜background.js         // 随着浏览器一直存在，权限非常高，几乎可以调用所有的扩展 API，可以无限制跨域
 ┗ 📜manifest.json         // 所有和 Chrome 扩展相关的配置
```

## 安装

```bash
npm install
```

### 开发环境下运行

```bash
npm run serve
```

运行成功后在 chrome 中使用，**注意在 chrome 扩展页面要开启开发者模式**

![chrome 加载扩展](<docs/image/chrome 加载扩展.png>)

### 打包扩展，会在 artifacts 目录下生成 zip 文件

```bash
npm run build
```

打开 chrome 扩展页面，直接**拖拽** zip 文件到页面中即可安装

### 代码格式化校验

```bash
npm run lint
```
