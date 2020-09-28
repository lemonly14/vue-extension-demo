import Vue from "vue";
import { Card, Button } from "element-ui";
import App from "./App.vue";

Vue.use(Card);
Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
