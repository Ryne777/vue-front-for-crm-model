export default {
  state: { info: [] },
  mutations: {
    setInfo(state, info) {
      this.state.info = info;
    },
    clearInfo(state) {
      state.info = { locale: state.info.locale };
    }
  },
  actions: {
    // eslint-disable-next-line
    async getFileInfo({ dispatch, commit, }) {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/");
        const info = await res.json();
        commit("setInfo", info);
        return info;
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    info: s => s.info
  }
};
