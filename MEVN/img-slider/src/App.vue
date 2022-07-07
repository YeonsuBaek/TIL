<template>
  <ImgSlider :option="option" />
</template>

<script>
import ImgSlider from "./components/ImgSlider.vue";
const BASE = "http://127.0.0.1:12010/img";
export default {
  name: "App",
  components: {
    ImgSlider,
  },
  setup() {
    const option = {
      list: [
        {
          src: `${BASE}/1.jpg`,
          name: "민둥흰둥이",
          id: 1,
        },
        {
          src: `${BASE}/2.jpg`,
          name: "유치원흰둥이",
          id: 2,
        },
        {
          src: `${BASE}/3.jpg`,
          name: "애기짱구",
          id: 3,
        },
        {
          src: `${BASE}/4.jpg`,
          name: "잘먹는짱구",
          id: 4,
        },
      ],
      height: 500,
    };
    return {
      option,
    };
  },
};
</script>

<style>
@font-face {
  font-family: "MaruBuri-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: "MaruBuri-Regular";
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
