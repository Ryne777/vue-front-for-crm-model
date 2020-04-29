import Vue from "vue";
import Vuex from "vuex";
import info from "./info";
import record from "./detail";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
    async fetchCurrency() {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`);
      return await res.json();
    }
  },
  modules: { info, record, auth }
});
