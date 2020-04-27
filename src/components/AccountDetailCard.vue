<template>
  <div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ account.title }}</span>
            <div class="card-content">
              <p>{{ account.description }}</p>
            </div>
          </div>
          <div class="card-action">
            <span>{{ account.amount }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-for="activity of account.activity" :key="activity.title">
        <div class="col s12 m6 l4">
          <div
            class="card"
            v-bind:class="{
              red: !activity.typeActivity,
              green: activity.typeActivity
            }"
          >
            <div class="card-content white-text">
              <span class="card-title">{{ activity.title }}</span>
              <p>{{ activity.description }}</p>
              <span>{{ activity.amount }}</span>
            </div>
          </div>
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
