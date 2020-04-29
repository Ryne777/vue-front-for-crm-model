<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m10 l8 offset-l2 offset-m1">
        <form class="card auth-card" @submit.prevent="submitHandler">
          <div class="card-content">
            <span class="card-title">{{ "CRM_Title" }}</span>
            <div class="input-field">
              <input
                id="login"
                type="text"
                v-model.trim="login"
                :class="{
            invalid: $v.login.$dirty && !$v.login.required
          }"
              />
              <label for="login">login</label>
              <small
                class="helper-text invalid"
                v-if="$v.login.$dirty && !$v.login.required"
              >{{ "login" }}</small>
            </div>
            <div class="input-field">
              <input
                id="password"
                type="password"
                v-model.trim="password"
                :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
              />
              <label for="password">{{ "Password" }}</label>
              <small
                class="helper-text invalid"
                v-if="$v.password.$dirty && !$v.password.required"
              >{{ "Message_EnterPassword" }}</small>
              <small
                class="helper-text invalid"
                v-else-if="$v.password.$dirty && !$v.password.minLength"
              >
                {{ "Message_MinLength" }}
                {{ $v.password.$params.minLength.min }}
              </small>
            </div>
          </div>
          <div class="card-action">
            <div>
              <button class="btn waves-effect waves-light auth-submit" type="submit">
                {{ "Login" }}
                <i class="material-icons right">send</i>
              </button>
            </div>

            <p class="center">
              {{ "NoAccount" }}
              <router-link to="/register">{{ "Register" }}</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "login",
  metaInfo() {
    return {
      title: this.$title("Login")
    };
  },
  data: () => ({
    login: "",
    password: ""
  }),
  validations: {
    login: { required },
    password: { required, minLength: minLength(6) }
  },
  // mounted() {
  //   if (messages[this.$route.query.message]) {
  //     this.$message(localizeFilter(messages[this.$route.query.message]));
  //   }
  // },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        username: this.login,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }
};
</script>
