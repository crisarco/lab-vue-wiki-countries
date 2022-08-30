<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <CountriesList :countries="getCountriesElementsToShowList" />
      <router-view />
    </div>
  </div>
</template>

<script>
import countriesData from '../public/countries.json'
import Navbar from './components/Navbar.vue';
import CountriesList from './components/CountriesList.vue';

export default {
  name: 'App',
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
}
</script>
