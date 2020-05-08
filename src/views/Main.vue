<template>
  <div>
    <Account :accounts="accounts"></Account>
    <Currency :rates="currency.rates" :date="currency.date"></Currency>
  </div>
</template>

<script>
import Account from "../components/Account";
import Currency from "../components/Currency";
export default {
  data: () => ({
    accounts: {},
    currency: {}
  }),
  async mounted() {
    try {
      this.accounts = await this.$store.dispatch("getFileInfo");

      this.currency = await this.$store.dispatch("fetchCurrency");
    } catch (e) {
      if (e.message == 401) {
        this.$router.push("/login");
      }
    }
  },

  components: { Account, Currency }
};
</script>
