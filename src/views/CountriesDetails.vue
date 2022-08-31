<template>
  <div class="countries-details-container" v-if="countrySelected != null">
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countrySelected.alpha2Code}.png`" :alt="`Flag of the ${countrySelected.name}`">
    <h1>{{ countrySelected.name }}</h1>
    <p>Capital: {{ countrySelected.capital }}</p>
    <p>Area: {{ countrySelected.area }}km2</p>
    <router-link v-for="border in countrySelected.borders" :key="border"
      :to="border">
        {{ border }}
      </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import CountryStore from '../store/CountryStore';

export default {
  name: 'CountriesDetailsView',
  computed: {
    ...mapState(CountryStore, ['countrySelected']),
  },
  methods: {
    ...mapActions(CountryStore, ['selectCountry']),
  },
  created() {
    const { countryCode } = this.$route.params;
    if (countryCode) {
      this.selectCountry(countryCode);
    }

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (toParams.countryCode) {
          this.selectCountry(toParams.countryCode);
        }
      }
    )
  },
}
</script>

<style>
 .countries-details-container {
  flex: 0.8;
 }
</style>
