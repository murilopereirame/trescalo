<template>
  <div :style="{ backgroundImage: 'url(' + bg + ')' }" class="Specialtie-Slide">
    <div class="Specialtie-Holder">
      <h1>{{ title }}</h1>
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpecialtieSlide",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.Specialtie-Slide {
  background-size: cover;
  background-position: center;
  color: $light;
  text-align: left;
  height: 100%;
  padding: 7.5rem 30px 2rem;
  width: 100%;
  h1 {
    font-family: "Modern No. 20";
    font-size: clamp(2rem, 25vw + 0.5em, 3rem);
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 7.5rem 75px clamp(2rem, 10vw + 0.5em, 5rem);
    h1 {
      margin-top: 0;
      margin-left: 2.5rem;
      font-size: clamp(2rem, 10vw + 0.5em, 5rem);
      max-width: 50%;
      text-align: center;
    }

    p {
      font-family: "Proxima Nova";
      max-width: 40%;
      margin: 0;
      font-size: clamp(1rem, 10vw + 0.5em, 1.25rem);
    }

    .Specialtie-Holder {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    }
  }

  .Specialtie-Holder {
    max-width: 1920px;
  }
}
</style>
