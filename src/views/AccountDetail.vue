<template>
  <div>
    <AccountDetailCard :account="account"></AccountDetailCard>
    <div class="row">
      <div class="col l2">
        <button class="btn waves-effect waves-light">редактировать счет</button>
      </div>
      <div class="col l2">
        <button class="btn waves-effect waves-light">добавить активность</button>
      </div>
      <div class="col l2 offset-l6 center-align">
        <button class="btn red waves-effect waves-light" v-on:click="Delete">удалить</button>
      </div>
    </div>
  </div>
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
  methods: {
    async Delete() {
      try {
        await this.$store.dispatch(
          "deleteAccountData",
          this.$route.params["url"]
        );
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  },
  components: { AccountDetailCard }
};
</script>
