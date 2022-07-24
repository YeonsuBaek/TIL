<template>
  <div id="app">
    <CurrentWeather :state="state.data" />
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
      data: {
        weather: "비",
        curr_temp: 1,
        highest_temp: 2,
        lowest_temp: 0,
      },
    });

    axios.get("/api/weather").then((res) => {
      state.data = res.data.data[1];
    });

    return {
      state,
    };
  },
};
</script>
