<template>
  <div class="row">
    <div class="col s12 m12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ account.title }}</span>
          <p>{{ account.description }}</p>
        </div>
        <div v-for="activity of account.activity" :key="activity.title"></div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account-detail-card",
  props: {
    account: {
      required: true,
      type: Object
    }
  }
};
</script>
