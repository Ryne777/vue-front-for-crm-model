<template>
  <div class="row">
    <div v-for="account of accounts" :key="account.title" class="col s12 m6">
      <!--  eslint-disable-next-line prettier/prettier -->
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ account.title }}</span>
          <p>{{ account.amount }}</p>
        </div>
        <div class="card-action">
          <!-- eslint-disable-next-line prettier/prettier -->
          <router-link :to="{name:'account-detail', params: { url: account.url }}">
            <span>Детали</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accounts: {
      required: true,
      type: Array
    }
  }
};
</script>
