<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card orange darken-3 bill-card">
        <div class="card-content white-text">
          <div class="card-header">
            <span class="card-title">{{ "CurrencyAmountTitle" }}</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>{{ "Currency" }}</th>
                <th>{{ "CurrencyType" }}</th>
                <th>{{ "Date" }}</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="cur in currencies" :key="cur">
                <td>{{ cur }}</td>
                <td>{{ rates[cur].toFixed(5) }}</td>
                <td>{{ date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rates", "date"],
  data: () => ({
    currencies: ["RUB", "USD", "EUR"]
  })
};
</script>
