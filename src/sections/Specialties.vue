<template>
  <section id="specialties">
    <div class="Wrapper">
      <div class="Specialties-Top">
        <h2>especialidades</h2>
        <h4>conheça um pouco mais sobre nossas especialidades</h4>
      </div>
      <Carousel :items-to-show="1">
        <Slide key="1">
          <SpecialtiesSlide
            title="infectologia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        laoreet tempor nisl, sed tincidunt ex interdum et. Curabitur mattis
        elementum pulvinar. Aliquam mi erat, rutrum et fringilla eget, tincidunt
        rhoncus est. Suspendisse et dui at nisl pellentesque cursus. Integer vel
        turpis nunc. Praesent scelerisque ante et ipsum mattis fringilla vel sit
        amet ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam ut felis vitae ante lobortis aliquam. Pellentesque volutpat urna
        ac blandit fringilla. Quisque faucibus eget ex at ultricies. Suspendisse
        et metus ac massa convallis volutpat. In augue augue, euismod in
        dignissim a, condimentum consequat erat."
            :bg="require('@/assets/images/bg_especialidades.avif')"
          />
        </Slide>
        <Slide key="2">
          <SpecialtiesSlide
            title="infectologia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        laoreet tempor nisl, sed tincidunt ex interdum et. Curabitur mattis
        elementum pulvinar. Aliquam mi erat, rutrum et fringilla eget, tincidunt
        rhoncus est. Suspendisse et dui at nisl pellentesque cursus. Integer vel
        turpis nunc. Praesent scelerisque ante et ipsum mattis fringilla vel sit
        amet ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam ut felis vitae ante lobortis aliquam. Pellentesque volutpat urna
        ac blandit fringilla. Quisque faucibus eget ex at ultricies. Suspendisse
        et metus ac massa convallis volutpat. In augue augue, euismod in
        dignissim a, condimentum consequat erat."
            :bg="require('@/assets/images/bg_especialidades.avif')"
          />
        </Slide>

        <template #addons>
          <Navigation class="custom_nav" />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { defineComponent } from "vue";
import SpecialtiesSlide from "../components/SpecialtieSlide.vue";

export default defineComponent({
  name: "SpecialtiesSection",
  components: {
    Carousel,
    Slide,
    Navigation,
    SpecialtiesSlide,
  },
});
</script>
<style lang="scss" scoped>
#specialties {
  background-color: $light;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.25rem;
}

.Wrapper {
  max-width: unset;
}

.Specialties-Top {
  padding: 0 50px 0 30px;
  color: $primary;
  margin-bottom: 1.5rem;
}

.Specialties-Top h2 {
  font-family: "Modern No. 20";
  font-size: clamp(2rem, 25vw + 0.5em, 3rem);
  margin-bottom: 0.5rem;
}

.Specialties-Top h4 {
  font-family: "Proxima Nova";
  margin: 0;
  font-weight: normal;
}

@media only screen and (min-width: 1024px) {
  .Specialties-Top {
    padding-left: 60px;
  }
}

@media only screen and (min-width: 1921px) {
  .Specialties-Top {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1920px;
    padding: 0;
    padding-left: 110px;
  }
}
</style>
