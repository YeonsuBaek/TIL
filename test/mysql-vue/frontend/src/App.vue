<template>
  <div id="app">
    <CurrentWeather
      :weather="weather"
      :currTemp="currTemp"
      :highestTemp="highestTemp"
      :lowestTemp="lowestTemp"
    />
  </div>
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";

export default {
  name: "App",
  components: {
    CurrentWeather,
  },
  data() {
    return {
      weather: "맑음",
      currTemp: 26,
      highestTemp: 29,
      lowestTemp: 23,
    };
  },
};
</script>
