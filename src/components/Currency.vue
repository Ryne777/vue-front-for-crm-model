<template>
  <div v-if="rates != null">
    <div class="row">
      <div class="col s12 m12 l12">
        <div class="card orange darken-3 bill-card">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Currency Rates</span>
            </div>
            <table class="highlight">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Rate</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cur of currencies" :key="cur">
                  <td>{{ cur }}</td>
                  <!--  eslint-disable-next-line prettier/prettier -->
                  <td>{{ (rates["RUB"] / rates[cur]).toFixed(5) | currency }}</td>
                  <td>{{ date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rates", "date"],
  data: () => ({
    currencies: ["USD", "EUR"]
  })
};
</script>
