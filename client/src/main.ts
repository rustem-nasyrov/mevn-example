import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.prototype.$axios = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
