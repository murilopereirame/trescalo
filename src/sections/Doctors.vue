<template>
  <section id="doctors">
    <div class="Wrapper">
      <div class="Doctors-Top">
        <div class="Doctors-Intro">
          <p>corpo médico</p>
          <p>arraste para o lado para conhecer todo o corpo médico</p>
        </div>
        <p>experiencia</p>
      </div>
      <Carousel :items-to-show="1">
        <Slide v-for="slide in 10" :key="slide">
          <DoctorSlide />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import DoctorSlide from "../components/DoctorSlide.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoctorsSection",
  components: {
    DoctorSlide,
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style lang="scss" scoped>
#doctors {
  margin-top: calc(clamp(2rem, 10vh, 4rem) + 50px);
  background-color: $light;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding-bottom: 1.25rem;
}
.Doctors-Intro {
  padding: clamp(1rem, 10vh, 2rem) 50px 0 30px;
}

.Doctors-Intro p {
  margin: 0;
  color: $primary;
}

.Doctors-Intro p:first-child {
  font-family: "Modern No. 20";
  font-size: clamp(2rem, 25vw + 0.5em, 3rem);
  margin-bottom: 0.5rem;
}

.Doctors-Intro p:last-child {
  font-family: "Proxima Nova";
  max-width: 75%;
}

.Doctors-Top {
  position: relative;
  padding-bottom: clamp(4rem, 7.5vh + 0.5em, 6rem);
}
section > .Wrapper > .Doctors-Top > p {
  font-family: "Liana", sans-serif;
  position: absolute;
  font-size: clamp(4rem, 25vw + 0.75em, 10rem);
  margin: 0;
  padding-left: 15px;
  bottom: 0;
  color: $secondary;
  z-index: 2;
}

@media only screen and (min-width: 768px) {
  #doctors {
    margin-top: calc(clamp(4rem, 15vh, 10rem) + 50px);
    padding-bottom: 2rem;
  }
  .Doctors-Intro {
    padding: clamp(1rem, 10vh, 2rem) 60px 0 60px;
  }

  .Doctors-Intro p:first-child {
    font-size: clamp(3rem, 25vw + 0.5em, 4rem);
    margin-bottom: 0.5rem;
  }

  .Doctors-Intro p:last-child {
    font-size: clamp(1rem, 25vw + 0.5em, 1.75rem);
  }

  .Doctors-Top {
    position: relative;
    padding-bottom: clamp(6rem, 7.5vh + 1em, 9.25rem);
    margin-bottom: 1rem;
  }
  section > .Wrapper > .Doctors-Top > p {
    font-size: clamp(9rem, 25vw + 0.75em, 15rem);
    top: 1rem;
    padding-left: 30px;
    bottom: 0;
    color: $secondary;
    z-index: 2;
  }
}

@media only screen and (min-width: 1024px) {
  .Doctors-Intro p:first-child {
    font-size: clamp(3rem, 25vw + 0.5em, 5rem);
  }
  .Doctors-Intro p:last-child {
    font-size: clamp(1rem, 25vw + 0.5em, 2.75rem);
  }
  section > .Wrapper > .Doctors-Top > p {
    font-size: clamp(9rem, 25vw + 0.75em, 17rem);
    padding-left: 40px;
  }
}

@media only screen and (min-width: 1360px) {
  #doctors {
    min-height: unset;
  }
  .Wrapper {
    display: flex;
  }

  .Doctors-Intro {
    padding: clamp(1rem, 10vh, 2rem) 50px 0 60px;
  }

  .Doctors-Top {
    width: 100%;
    padding-bottom: 1rem;
  }

  .Doctors-Intro p:first-child {
    font-size: clamp(3rem, 10vw + 0.5em, 4.5rem);
  }
  .Doctors-Intro p:last-child {
    font-size: clamp(1rem, 25vw + 0.5em, 1.25rem);
  }
  section > .Wrapper > .Doctors-Top > p {
    font-size: clamp(9rem, 25vw + 0.75em, 5rem);
    right: -20px;
    top: 0;
    bottom: unset;
    line-height: calc(clamp(9rem, 25vw + 0.75em, 5rem) / 2);
  }
}

@media only screen and (min-width: 1920px) {
  #doctors {
    padding: 4rem 0 10rem;
  }
  .Wrapper {
    display: flex;
  }

  .Doctors-Intro {
    padding: clamp(1rem, 10vh, 2rem) 50px 0 60px;
  }

  .Doctors-Top {
    width: 100%;
    padding-bottom: 1rem;
  }

  .Doctors-Intro p:first-child {
    font-size: clamp(3rem, 10vw + 0.5em, 4.5rem);
  }
  .Doctors-Intro p:last-child {
    font-size: clamp(1rem, 25vw + 0.5em, 1.25rem);
  }
  section > .Wrapper > .Doctors-Top > p {
    font-size: clamp(5rem, 25vw + 0.75em, 12rem);
    right: -20px;
    top: -10px;
    bottom: unset;
    line-height: calc(clamp(5rem, 25vw + 0.75em, 12rem) / 3);
  }
}
</style>
