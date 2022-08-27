<template>
  <Navbar />
  <CountriesList />
  <ul v-if="countries">
    <li v-for="country in countries" :key="country.alpha3Code">{{ country.name.common }}</li>
  </ul>
</template>

<script>
import CountriesList from '../components/CountriesList.vue';
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar, CountriesList },
    data() {
      return {
        countries: null,
      }
    },
  async created() {
    const response = await fetch('countries.json')
    const countriesData = await response.json()
    this.countries = countriesData
  }
}
</script>

<style>

</style>
