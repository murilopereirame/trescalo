<template>
  <div class="Specialtie-Slide">
    <div class="Specialtie-Holder">
      <h1>infectologia laringologia</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        laoreet tempor nisl, sed tincidunt ex interdum et. Curabitur mattis
        elementum pulvinar. Aliquam mi erat, rutrum et fringilla eget, tincidunt
        rhoncus est. Suspendisse et dui at nisl pellentesque cursus. Integer vel
        turpis nunc. Praesent scelerisque ante et ipsum mattis fringilla vel sit
        amet ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam ut felis vitae ante lobortis aliquam. Pellentesque volutpat urna
        ac blandit fringilla. Quisque faucibus eget ex at ultricies. Suspendisse
        et metus ac massa convallis volutpat. In augue augue, euismod in
        dignissim a, condimentum consequat erat.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpecialtieSlide",
});
</script>
<style lang="scss" scoped>
.Specialtie-Slide {
  background: url(@/assets/images/bg_especialidades.png);
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
