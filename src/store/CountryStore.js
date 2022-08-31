import { defineStore } from 'pinia';

export default defineStore('countryStore', {
  state: () => {
    return {
      countries: [],
      countryCodeSelected: '',
    }
  },
  getters: {
    countriesFormatted() {
      let countryId = 0;
      return this.countries.map(country => {
        return {
          id: countryId++,
          name: country.name.common,
          alpha2Code: country.alpha2Code.toLowerCase(),
          alpha3Code: country.alpha3Code,
        }
      });
    },
    countrySelected() {
      const countryFound = this.countries.find( country.alpha3Code === this.countryCodeSelected);
      if(countryFound) {
        return {
          area: countryFound.area,
          alpha2Code: countryFound.alpha2Code.toLowerCase(),
          name: countryFound.name.common,
          capital: countryFound.capital[0],
          borders: countryFound.borders,
        }
      }
      return null;
    },
  },
  actions: {
    async fetchCountries() {
      const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
      const countriesData = await response.json();
      this.countries = countriesData.reverse();
    },
    selectCountry(countryCode) {
      this.countryCodeSelected = countryCode;
    },
  },
}) ;
