<script setup lang="ts">
  import { computed } from 'vue'
  const { data } = await useFetch( '/api/tickers?limit=10')

  const currencies = computed( (): {}[] => {
    const currencies =  []
    for ( const cryptoCurrency of data._rawValue.data ) {
      currencies.push(
        {
          name: cryptoCurrency.name,
          symbol: cryptoCurrency.symbol,
          price: cryptoCurrency.price_usd,
          details: cryptoCurrency.id
        }
      )
    }
    return currencies
  })
</script>

<template>
  <div class="container flex justify-center">
    <section class="my-16">
      <v-table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="currency in currencies"
              :key="currency.name"
          >
            <td>{{ currency.name }}</td>
            <td>{{ currency.symbol }}</td>
            <td>{{ currency.price }}</td>
            <td>
              <nuxt-link :to="`/currency/${ currency.details }`">
                {{ currency.details }}
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </v-table>
    </section>
  </div>
</template>
