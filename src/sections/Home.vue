<template>
  <header>
    <div class="Wrapper">
      <div class="Header-Text">
        <p>cuidar<br />de você<br />é sempre</p>
        <p>proteger</p>
      </div>
      <div class="Header-Image">
        <img src="@/assets/images/logo.svg" alt="Grupo Trescalo" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeSection",
});
</script>

<style lang="scss" scoped>
header {
  background: url("@/assets/images/bg_home.avif");
  background-position-x: 30%;
  background-size: cover;
  height: 75vh;
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}

.Wrapper {
  justify-content: center;
}

.Header-Text p {
  margin: 0;
}

.Header-Text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding-left: 0.5em;
  flex: 1;
}

.Header-Text p:first-child {
  font-family: "Modern No. 20";
  font-size: clamp(4rem, 25vw + 0.5em, 5rem);
  color: $primary;
  line-height: 0.75em;
}

.Header-Text p:last-child {
  font-family: "Liana";
  font-size: clamp(4rem, 40vw + 0.5em, 25rem);
  position: absolute;
  bottom: clamp(-1em, -1vh, -0.5em);
  color: $secondary;
}

.Header-Image {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
}

.Header-Image img {
  width: clamp(200px, 50vw, 380px);
}

@media only screen and (max-width: 375px) {
  .Header-Image {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .Header-Image img {
    width: 150px;
  }
  .Header-Text p:first-child {
    font-size: clamp(3rem, 25vw + 0.5em, 4rem);
    line-height: 0.75em;
  }

  .Header-Text p:last-child {
    font-size: clamp(3rem, 40vw + 0.5em, 9rem);
    bottom: -4.5rem;
  }
}

@media only screen and (min-width: 540px) {
  header {
    padding-top: 125px;
    height: 75vh;
  }
  .Header-Text {
    justify-content: flex-start;
  }
  .Header-Text p:first-child {
    font-size: clamp(4rem, 25vw + 0.5em, 5rem);
  }

  .Header-Text p:last-child {
    font-size: clamp(4rem, 40vw + 0.5em, 12.5rem);
    bottom: -1rem;
  }

  .Header-Image {
    justify-content: flex-start;
  }

  .Header-Image {
    padding-top: 75px;
  }

  .Header-Image img {
    width: clamp(200px, 50vw, 225px);
  }
}

@media only screen and (min-width: 768px) {
  header {
    padding-top: 100px;
    height: 90vh;
  }

  .Header-Text {
    padding-left: 1.5em;
  }

  .Header-Text p:first-child {
    font-size: clamp(7rem, 25vw + 0.5em, 8rem);
  }

  .Header-Text p:last-child {
    font-size: clamp(4rem, 40vw + 0.5em, 17.5rem);
    bottom: -6rem;
  }

  .Header-Image {
    padding-top: 200px;
  }

  .Header-Image img {
    width: clamp(200px, 50vw, 300px);
  }
}

@media only screen and (min-width: 1024px) {
  header {
    padding-top: 200px;
    padding-bottom: 0px;
  }

  .Header-Text {
    padding-left: 1.5em;
  }

  .Header-Text p:first-child {
    font-size: clamp(7rem, 25vw + 0.5em, 8.5rem);
  }

  .Header-Text p:last-child {
    font-size: clamp(4rem, 40vw + 0.5em, 18.5rem);
    bottom: clamp(-1em, -1vh, -0.5em);
  }

  .Header-Image {
    padding-top: clamp(100px, 50vh, 250px);
  }

  .Header-Image img {
    width: clamp(200px, 50vw, 300px);
  }
}

@media only screen and (min-width: 1360px) {
  header {
    padding-top: 0;
    padding-bottom: 150px;
  }
  .Wrapper {
    flex-direction: row;
    align-items: center;
  }

  .Header-Text {
    padding-left: 1.5em;
  }

  .Header-Text p:first-child {
    font-size: clamp(7rem, 25vw + 0.5em, 8rem);
  }

  .Header-Text p:last-child {
    font-size: clamp(4rem, 40vw + 0.5em, 17.5rem);
    bottom: clamp(-1em, -1vh, -0.5em);
  }

  .Header-Image {
    padding-top: 0;
    justify-content: center;
  }

  .Header-Image img {
    width: clamp(200px, 50vw, 300px);
  }
}

@media only screen and (min-width: 1920px) {
  header {
    padding-bottom: 150px;
  }

  .Header-Text p:first-child {
    font-size: clamp(7rem, 25vw + 0.5em, 13.5rem);
  }

  .Header-Text p:last-child {
    font-size: clamp(4rem, 40vw + 0.5em, 22.5rem);
    bottom: clamp(-1em, -1vh, -0.85em);
  }

  .Header-Image img {
    width: clamp(200px, 50vw, 500px);
  }
}
</style>
