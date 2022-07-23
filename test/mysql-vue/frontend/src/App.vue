<template>
  <div id="app">
    <CurrentWeather :state="state.weather" />
  </div>
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";
import axios from "axios";
import { reactive } from "vue";

export default {
  name: "App",
  components: {
    CurrentWeather,
  },

  setup() {
    const state = reactive({
      weather: {
        weather: "비",
        currTemp: 1,
        highestTemp: 2,
        lowestTemp: 0,
      },
    });

    axios.get("/api/weather").then((res) => {
      state.weather = res.data;
    });

    return {
      state,
    };
  },
};
</script>
