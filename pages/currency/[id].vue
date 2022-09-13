<script setup lang="ts">
  const route = useRoute()
  const { data } = await useFetch( '/api/ticker?id=' + route.params.id )
  const coin = data.value[ 0 ]
</script>

<template>
  <div class="container flex justify-center my-16">
    <section>
      <h1>{{ coin.name }} Detail page</h1>
      <v-table class="mt-4">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Rank</th>
            <th>Price - US $</th>
            <th>Market Cap - US $</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{ coin.symbol }}</td>
          <td>{{ coin.rank }}</td>
          <td>{{ coin.price_usd }}</td>
          <td>{{ coin.market_cap_usd }}</td>
        </tr>
        </tbody>
      </v-table>
    </section>
  </div>
</template>
