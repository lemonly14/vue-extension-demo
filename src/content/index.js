// eslint-disable-next-line no-undef
// 注意，这里引入的 vue 是运行时的模块，因为 content 是插入到目标页面，对组件的渲染需要运行时的 vue， 而不是编译环境的 vue
import Vue from "vue/dist/vue.esm.js";
import SideBar from "./components/SideBar";
Vue.component("side-bar", SideBar);
import {
  Upload,
  Drawer,
  Button,
  Dialog,
  Image,
  Carousel,
  CarouselItem
} from "element-ui";

Vue.use(Upload);
Vue.use(Drawer);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);

// 在 target 页面中新建一个带有 id 的 dom 元素，将 vue 对象挂载到这个dom上。
function insertSideBar() {
  console.log("Hello from the content-script");

  let sideBar = document.createElement("div");
  sideBar.id = "z-upload";
  sideBar.innerHTML = "<side-bar></side-bar>";
  let mainDom = document.getElementsByTagName("body")[0];
  mainDom.appendChild(sideBar);

  // element 的字体文件无法通过打包加载，所以另外通过 cdn 来加载样式
  let element_css = document.createElement("link");
  element_css.href = "https://unpkg.com/element-ui/lib/theme-chalk/index.css";
  element_css.rel = "stylesheet";
  document.head.append(element_css);
  new Vue({
    el: "#z-upload"
  });
}
// 页面加载之后执行插入函数
document.body.onload = insertSideBar;
