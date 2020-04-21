<template>
  <div class="row">
    <div class="col s12 m6">
      <!--  eslint-disable-next-line prettier/prettier -->
      <div v-for="account of accounts" :key="account.title" class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ account.title }}</span>
          <p>{{ account.amount }}</p>
        </div>
        <div class="card-action">
          <!-- eslint-disable-next-line prettier/prettier -->
          <a
            class="btn-small btn"
            @click="$router.push('/account/' + account.url)"
          >{{ account.url }}</a>
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
