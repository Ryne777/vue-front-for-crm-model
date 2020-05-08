export default {
  state: {
    account: {}
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async createAccount({ dispatch, commit }, account) {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/create-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": "token " + localStorage.getItem("token")
          },
          body: JSON.stringify(account)
        });

        if (!res.ok) {
          throw new Error("Ответ сети был не ok.");
        }
        commit("setAccount", account);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  mutations: {
    setAccount(state, account) {
      state.account = account;
    }
  }
}