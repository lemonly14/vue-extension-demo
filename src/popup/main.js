import Vue from "vue";
import { Card, Button, Upload, Dialog, Image } from "element-ui";
import App from "./App.vue";

Vue.use(Card);
Vue.use(Button);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Image);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
