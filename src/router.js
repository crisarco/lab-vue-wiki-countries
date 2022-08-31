// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import CountriesDetails from './views/CountriesDetails.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home,
  },
  {
    path: '/:countryCode',
    name: 'countryDetails',
    component: CountriesDetails,
  },
  
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
});
