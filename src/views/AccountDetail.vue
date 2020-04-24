<template>
  <AccountDetailCard :account="account"></AccountDetailCard>
</template>

<script>
import AccountDetailCard from "../components/AccountDetailCard";
export default {
  name: "account-detail",
  data: () => ({
    account: {
      title: ":344",
      amount: 12344.5,
      description: "234355",
      activity: {}
    }
  }),
  components: { AccountDetailCard }
};
</script>
