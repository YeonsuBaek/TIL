<template>
  <div class="sliderWrap">
    <button class="left" @click="toLeft">&lt;</button>
    <button class="right" @click="toRight">&gt;</button>
    <p>{{ activateImg.name }}</p>
    <img
      :src="activateImg.src"
      :alt="activateImg.name"
      :style="{
        height: `${height}px`,
      }"
    />
    <div class="dot">
      <button @click="setActive(0)" :class="{ active: currIdx === 0 }"></button>
      <button @click="setActive(1)" :class="{ active: currIdx === 1 }"></button>
      <button @click="setActive(2)" :class="{ active: currIdx === 2 }"></button>
      <button @click="setActive(3)" :class="{ active: currIdx === 3 }"></button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "ImgSlider",
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let currIdx = ref(0);
    const toRight = () =>
      (currIdx.value = Math.min(
        currIdx.value + 1,
        props.option.list.length - 1
      ));
    const toLeft = () => (currIdx.value = Math.max(currIdx.value - 1, 0));
    const setActive = (idx) => (currIdx.value = idx);
    const height = computed(() => props.option.height);
    const activateImg = computed(() => props.option.list[currIdx.value]);

    return {
      height,
      currIdx,
      toRight,
      toLeft,
      setActive,
      activateImg,
    };
  },
};
</script>

<style scoped>
.sliderWrap > img {
  object-fit: cover;
}

.sliderWrap {
  width: 1000px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
}

.sliderWrap > button {
  display: block;
  position: absolute;
  top: calc(50% - 1.25rem);
  font-size: 2.5rem;
  transition: all 0.5s ease;
  color: #787878;
  background-color: #fff;
  border: none;
  padding: 4px;
}

.sliderWrap button:hover {
  color: #bdbdbd;
  cursor: pointer;
}

.sliderWrap > div {
  display: inline-block;
  width: 100%;
}

p {
  position: absolute;
  bottom: 10px;
  right: 55px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10px;
}

button.left {
  left: 30px;
}

button.right {
  right: 30px;
}

.dot {
  position: relative;
}

.dot > button {
  height: 12px;
  width: 12px;
  margin: 0 4px;
  background: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.5s ease;
  border: none;
}

.dot > button:is(:hover, :active) {
  cursor: pointer;
  background-color: #717171;
}
</style>
