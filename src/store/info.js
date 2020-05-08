import store from "./index";
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
        const res = await fetch("http://127.0.0.1:8000/api/v1/", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "token " + localStorage.getItem("token")
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        if (!res.ok) {
          throw new Error(res.status);
        }
        const info = await res.json();
        commit("setInfo", info);
        return info;
      } catch (e) {
        if (e.message == 401) {
          store.dispatch("logout");
        }
        commit("setError", e);

        throw e;
      }
    }
  },
  getters: {
    info: s => s.info
  }
};
