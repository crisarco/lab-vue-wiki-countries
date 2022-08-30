<template>
  <Navbar />
  <CountriesList />
  <ul v-if="countries">
    <li v-for="country in countries" :key="country.alpha3Code">{{ country.name.common }}</li>
    <li v-for="country in countries" :key="country.alpha3Code">{{ country.name.common }}</li>
  </ul>
</template>

<script>
import CountriesList from '../components/CountriesList.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: { 
    Navbar, 
    CountriesList,
  },
  data() {
    return {
      countries: countriesData,
    }
  },
  computed: {
    getCountriesElementsToShowList() {
      let countryId = 9;
      return this.countries.map(country => {
        return {
          id: countryId++,
          name: country.name.common,
          alpha2Code: country.alpha2Code.toLowerCase(),
          alpha3Code: country.alpha3Code,
        }
      });
    },
  }
  //async created() {
    //const response = await fetch('countries.json')
    //const countriesData = await response.json()
    //this.countries = countriesData
  //}
}
</script>

<style>

</style>
