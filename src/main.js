import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min.js";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "./utils/message.plugin";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("currency", currencyFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
