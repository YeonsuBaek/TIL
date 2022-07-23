<template>
  <div>
    <ul>
      <li>
        <dt>날씨</dt>
        <dd>{{ weather }}</dd>
      </li>
      <li>
        <dt>현재기온</dt>
        <dd>{{ currTemp }}</dd>
      </li>
      <li>
        <dt>최고기온</dt>
        <dd>{{ highestTemp }}</dd>
      </li>
      <li>
        <dt>최저기온</dt>
        <dd>{{ lowestTemp }}</dd>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  props: {
    weather: String,
    currTemp: Number,
    highestTemp: Number,
    lowestTemp: Number,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  margin: 20px;
}

li {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
  list-style-type: none;
}

dt {
  margin-right: 4px;
}
</style>
