<template>
  <div class="countries-list-container">
    <div class="scrollable-container">
      <router-link v-for="country in countriesFormatted" :key="country.id"
      :to="country.alpha3Code">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" :alt="`Flag of the ${country.name}`">
        <br>
        {{ country.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import  CountryStore from '../store/CountryStore';

export default {
  name: 'CountriesList',
  computed: {
    ...mapState(CountryStore, ['countriesFormatted']),
  }
}
</script>

<style>
 .countries-list-container {
  flex: 0.2;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  overflow-y: scroll;
  height: 500px;
 }

 .scrollable-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.3;
  row-gap: 15px;
 }
</style>
