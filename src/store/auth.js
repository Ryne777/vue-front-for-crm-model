export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  actions: {
    async login({ commit }, user) {
      try {
        commit("auth_request");
        const res = await fetch("http://127.0.0.1:8000/auth/token/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(user)
        });
        if (!res.ok) {
          throw new Error("Ответ сети был не ok.");
        }
        const token = await res.json();
        localStorage.setItem("token", token["auth_token"]);
        commit("auth_success", token, user);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async register({ commit }, user) {
      try {
        commit("auth_request");
        await fetch("http://127.0.0.1:8000/auth/users/", {
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(user)
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async logout({ commit }) {
      commit("logout");
      await fetch("http://127.0.0.1:8000/auth/token/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "token " + localStorage.getItem("token")
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      localStorage.removeItem("token");
      // commit("clearInfo");
    }
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
};
