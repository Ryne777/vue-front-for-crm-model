export default {
  state: { data: [] },
  mutations: {
    setData(state, data) {
      this.state.data = data;
    }
    // clearInfo(state) {
    //   state.info = { locale: state.info.locale };
    // }
  },
  actions: {
    // eslint-disable-next-line
    async getAccountData({ dispatch, commit, }, url, method = "GET") {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/" + url, {
          method,
          headers: {
            "Content-Type": "application/json",
            "Authorization": "token " + localStorage.getItem("token")
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const data = await res.json();
        commit("setData", data);
        return data;
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    // eslint-disable-next-line
    async deleteAccountData({ dispatch, commit, }, url, method = "DELETE") {
      try {
        await fetch("http://127.0.0.1:8000/api/v1/" + url, {
          method
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    data: s => s.data
  }
};
