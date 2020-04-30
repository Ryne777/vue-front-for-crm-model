<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m10 l8 offset-l2 offset-m1">
        <form @submit.prevent="submitHandler">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <select class="input-field" ref="select" name="currency" id="currency" v-model="selected">
            <option value disabled selected>Choose your currency</option>
            <option v-for="c in currency" :key="c.id" :value="c">{{ c }}</option>
          </select>
          <button class="btn waves-effect waves-light" type="submit">
            Create
            <i class="material-icons right">send</i>
          </button>
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
    currency: { required }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    M.FormSelect.init(this.$refs.select, {});
  },
  methods: {
    submitHandler() {
      console.log(this.selected);
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      console.log(this.selected);
      // try {
      //   await this.$store.dispatch("createAccount", {
      //     title: this.title,
      //     amount: this.amount,
      //     description: this.description,
      //     currency: this.selected
      //   });
      //   // eslint-disable-next-line no-empty
      // } catch (e) {}
    }
  }
};
</script>