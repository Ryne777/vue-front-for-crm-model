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
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    this.accounts = await this.$store.dispatch("getFileInfo");
    console.log(this.accounts || "main");
  },

  components: { Account, Currency }
};
</script>
