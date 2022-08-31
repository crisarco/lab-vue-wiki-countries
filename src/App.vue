<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <CountriesList />
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'pinia';
  import CountryStore from './store/CountryStore'
  import Navbar from './components/Navbar.vue';
  import CountriesList from './components/CountriesList.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      CountriesList,
    },
    methods: {
      ...mapActions(CountryStore, ['fetchCountries']),
    },
    created() {
      this.fetchCountries();
    }
  }
</script>

<style>
 .container {
  margin-top: 1rem;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center
 }
</style>
