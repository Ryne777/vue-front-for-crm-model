<template>
  <AccountDetailCard :account="account"></AccountDetailCard>
</template>

<script>
import AccountDetailCard from "../components/AccountDetailCard";
export default {
  name: "account-detail",
  data: () => ({
    account: {}
  }),
  async mounted() {
    this.account = await this.$store.dispatch(
      "getAccountData",
      this.$route.params["url"]
    );
  },
  components: { AccountDetailCard }
};
</script>
