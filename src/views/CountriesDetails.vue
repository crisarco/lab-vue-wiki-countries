<template>
  
</template>

<script>
export default {
  name: 'CountriesDetailsView',
  data() {
    return {
      countryInfo: null,
    };
  },
  created() {
    const { countryCode } = this.$route.params;
    if (countryCode) {
      fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        this.countryInfo = {
          area: data.area,
          alpha2Code: data.alpha2Code.toLowerCase(),
          name: data.name.common,
          capital: data.capital[0],
          borders: data.borders,
        }
      });
    }

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (toParams.countryCode) {
          fetch(`https://ih-countries-api.herokuapp.com/countries/${toParams.countryCode}`)
            .then((response) => response.json())
            .then((data) => {
              this.countryInfo = {
                area: data.area,
                alpha2Code: data.alpha2Code.toLowerCase(),
                name: data.name.common,
                capital: data.capital[0],
                borders: data.borders,
              }
            });
        }
      }
    )
  },
}
</script>

<style>

</style>