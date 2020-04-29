<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m10 l8 offset-l2 offset-m1">
        <form class="card auth-card" @submit.prevent="submitHandler">
          <div class="card-content">
            <span class="card-title">{{ "CRM_Title" }}</span>
            <div class="input-field">
              <input
                id="email"
                type="text"
                v-model.trim="email"
                :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
              />
              <label for="email">Email</label>
              <small
                class="helper-text invalid"
                v-if="$v.email.$dirty && !$v.email.required"
              >{{ "Message_EmailRequired" }}</small>
              <small
                class="helper-text invalid"
                v-else-if="$v.email.$dirty && !$v.email.email"
              >{{ "Message_EmailValid" }}</small>
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
            <div class="input-field">
              <input
                id="login"
                type="text"
                v-model.trim="login"
                :class="{ invalid: $v.login.$dirty && !$v.login.required }"
              />
              <label for="login">{{ "login" }}</label>
              <small
                class="helper-text invalid"
                v-if="$v.login.$dirty && !$v.login.required"
              >{{ "Message_EnterLogin" }}</small>
            </div>
            <p>
              <label>
                <input type="checkbox" v-model="agree" />
                <span>{{ "AcceptRules" }}</span>
              </label>
            </p>
          </div>
          <div class="card-action">
            <div>
              <button class="btn waves-effect waves-light auth-submit" type="submit">
                {{ "Register" }}
                <i class="material-icons right">send</i>
              </button>
            </div>

            <p class="center">
              {{ "HasAccount" }}
              <router-link to="/login">{{ "Login" }}</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "register",
  metaInfo() {
    return {
      title: this.$title("Register")
    };
  },
  data: () => ({
    email: "",
    password: "",
    login: "",
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    login: { required },
    agree: { checked: v => v }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        username: this.login
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/login");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }
};
</script>
