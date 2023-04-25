import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // 底层会执行：Vue.prototype.$store = store
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
