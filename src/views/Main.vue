<template>
  <div>
    <Account :accounts="accounts"></Account>
  </div>
</template>

<script>
import Account from "../components/Account";
export default {
  data: () => ({
    accounts: [
      {
        title: "главный",
        amount: 1234.6,
        url: "url1"
      },
      {
        title: "главный",
        amount: 1234.6,
        url: "url1"
      },
      {
        title: "ads",
        amount: 12434.6,
        url: "url2"
      },
      {
        title: "главный",
        amount: 1234.6,
        url: "url1"
      },
      {
        title: "ads",
        amount: 12434.6,
        url: "url2"
      },
      {
        title: "ads",
        amount: 12434.6,
        url: "url2"
      }
    ]
  }),
  components: { Account }
};
</script>
