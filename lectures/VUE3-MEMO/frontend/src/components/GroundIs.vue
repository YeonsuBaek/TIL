<template>
  <div class="ground">
    <GlobalHeader />
    <MemoSection />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter.vue";
import MemoSection from "./MemoSection.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    MemoSection,
  },
};
</script>
