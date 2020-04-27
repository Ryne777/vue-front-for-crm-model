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
    this.currency = await this.$store.dispatch("fetchCurrency");
    this.accounts = await this.$store.dispatch("getFileInfo");
  },

  components: { Account, Currency }
};
</script>
