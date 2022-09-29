<template>
  <HomeSection />
  <SquadSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeSection from "./sections/Home.vue";
import SquadSection from "./sections/Squad.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeSection,
    SquadSection,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

.Wrapper {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  height: 100%;
}

body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: $primary;
}
</style>
