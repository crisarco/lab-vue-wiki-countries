<template>
  <div class="countries-list-container">
    <div class="scrollable-container">
      <router-link v-for="country in countries" :key="country.id"
      :to="country.alpha3Code">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" :alt="`Flag of the ${country.name}`">
        {{ country.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    countries: Array,
  },
}
</script>

<style>

</style>