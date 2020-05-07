<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m10 l8 offset-l2 offset-m1">
        <form class="card auth-card" @submit.prevent="submitHandler">
          <div class="card-content">
            <span class="card-title">{{ "CRM_Title" }}</span>
            <div class="input-field">
              <input
                id="title"
                type="text"
                v-model="title"
                :class="{
                  invalid: $v.title.$dirty && !$v.title.required
                }"
              />
              <label for="title">title</label>
              <small
                class="helper-text invalid"
                v-if="$v.title.$dirty && !$v.title.required"
              >{{ "title" }}</small>
            </div>
            <div class="input-field">
              <input
                id="amount"
                type="text"
                v-model="amount"
                :class="{
                invalid: ($v.amount.$dirty && !$v.amount.required) ||
                    ($v.amount.$dirty && !$v.amount.minValue)
              }"
              />
              <label for="title">amount</label>
              <small
                class="helper-text invalid"
                v-if="$v.amount.dirty && !$v.amount.required"
              >{{ "amount" }}</small>
            </div>
            <div class="input-field">
              <input id="description" type="text" v-model="description" />
              <label for="description">description</label>
            </div>
            <select
              class="input-field"
              ref="select"
              name="currency"
              id="currency"
              v-model="selected"
              :class="{ invalid: !$v.selected.required }"
            >
              <option value disabled selected>Choose your currency</option>
              <option v-for="c in currency" :key="c.id" :value="c">{{ c }}</option>
            </select>
            <button class="btn waves-effect waves-light" type="submit">
              Create
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";
export default {
  name: "newAccount",
  data: () => ({
    title: "",
    amount: "",
    description: "",
    currency: ["RUB", "USD", "EUR"],
    selected: ""
  }),
  validations: {
    title: { required },
    amount: { required, minValue: minValue(1) },
    selected: { required }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    M.FormSelect.init(this.$refs.select, {});
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.$store.dispatch("createAccount", {
          title: this.title,
          amount: this.amount,
          description: this.description,
          currency: this.selected
        });
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }
};
</script>
