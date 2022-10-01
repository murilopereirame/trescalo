<template>
  <HomeSection />
  <SquadSection />
  <DoctorsSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeSection from "./sections/Home.vue";
import SquadSection from "./sections/Squad.vue";
import DoctorsSection from "./sections/Doctors.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeSection,
    SquadSection,
    DoctorsSection,
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

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none !important;
}

.carousel__next,
.carousel__prev {
  transform: translate(0, calc(-1 * clamp(150px, 25vh, 200px)));
  background-color: $alt;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 64px;
  height: 52px;
  text-align: center;
  font-size: 48px;
  padding: 0;
  color: $secondary;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
}

.carousel__prev {
  width: 72px;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: flex-end;
}

body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: $primary;
}

@media only screen and (min-width: 1360px) {
  .carousel__next,
  .carousel__prev {
    transform: unset;
  }
}
</style>
