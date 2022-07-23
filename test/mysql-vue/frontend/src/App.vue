<template>
  <div id="app">
    <CurrentWeather :data="data" />
  </div>
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";
import Weather from "@/assets/weather.json";

const data = Weather;

export default {
  name: "App",
  components: {
    CurrentWeather,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
