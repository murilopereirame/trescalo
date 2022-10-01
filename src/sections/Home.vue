<template>
  <header>
    <div class="Header-Text">
      <p>cuidar<br />de você<br />é sempre</p>
      <p>proteger</p>
    </div>
    <div class="Header-Image">
      <img src="@/assets/images/logo.svg" alt="Grupo Trescalo" />
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
.Header-Text {
  text-align: left;
  max-width: 1080px;
  width: 100%;
}
.Header-Text p {
  margin: 0;
}
.Header-Text p:first-child {
  font-family: "Modern No. 20";
  font-size: 4.5rem;
  line-height: 3.75rem;
  color: $primary;
  margin-top: 10rem;
  margin-left: 2.75%;
}

.Header-Text p:last-child {
  font-family: "Liana";
  font-size: 9.5rem;
  line-height: 1rem;
  margin-top: -2rem;
  color: $secondary;
  margin-left: 3.5%;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("@/assets/images/bg_home.jpg") 30% 0px;
  background-size: cover;
  height: 100%;
  padding: 2rem 0;
}

.Header-Image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12.5rem;
  max-width: 1080px;
}

header img {
  width: 75%;
}

@media screen and (max-width: 390px) {
  header {
    padding: 0;
  }

  .Header-Text p:first-child {
    font-size: 5rem;
    line-height: 3.75rem;
    margin-left: 2.75%;
    margin-top: 8.25rem;
  }

  .Header-Text p:last-child {
    font-size: 8.5rem;
    line-height: 1.5rem;
    margin-top: -2.5rem;
    margin-left: 3.5%;
  }

  .Header-Image {
    margin-top: 10rem;
  }

  header img {
    width: 12.5rem;
  }
}

@media only screen and (min-width: 768px) {
  .Header-Text p:first-child {
    font-size: 10rem;
    line-height: 7.5rem;
    margin-left: 2.75%;
    margin-top: 5rem;
  }

  .Header-Text p:last-child {
    font-size: 17.55rem;
    line-height: 1.5rem;
    margin-top: -3.5rem;
    margin-left: 3.5%;
  }

  .Header-Image {
    margin-top: 17.5rem;
  }

  header img {
    width: 25rem;
  }
}

@media only screen and (min-width: 1024px) {
  header {
    flex-direction: row;
    padding: 0;
    align-items: center;
  }

  .Header-Text {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex: 1;
    height: 100%;
  }

  .Header-Text p:first-child {
    font-size: 7.5rem;
    line-height: 5.5rem;
    margin-left: 1.5rem;
    margin-top: 0rem;
    width: 100%;
  }

  .Header-Text p:last-child {
    font-size: 12.5rem;
    line-height: 1.5rem;
    margin-top: -3.5rem;
    margin-left: 3.5%;
  }

  .Header-Image {
    margin-top: 0rem;
    margin-left: 0rem;
    width: 100%;
    flex: 1;
  }

  header img {
    width: 15.5rem;
  }
}

@media only screen and (min-width: 1200px) {
  .Header-Text {
    margin-bottom: 7.75rem;
  }
  .Header-Text p:first-child {
    font-size: 10rem;
    line-height: 7.25rem;
  }

  .Header-Text p:last-child {
    font-size: 16.5rem;
    line-height: 1.5rem;
    margin-top: -3.5rem;
    margin-left: 3.5%;
  }

  .Header-Image {
    margin-top: 0rem;
    margin-left: 0rem;
    width: 100%;
    flex: 1;
  }

  header img {
    width: 20rem;
  }
}

@media only screen and (min-width: 1360px) {
  .Header-Text {
    margin-bottom: 3.5rem;
  }
  .Header-Text p:first-child {
    font-size: 7.5rem;
    line-height: 5rem;
  }

  .Header-Text p:last-child {
    font-size: 14rem;
    line-height: 1.5rem;
    margin-top: -2.75rem;
  }

  .Header-Image {
    margin-top: 0rem;
    margin-left: 0rem;
    width: 100%;
    flex: 1;
    height: 100%;
  }

  header img {
    width: 20rem;
  }
}

@media only screen and (min-width: 1920px) {
  .Header-Text {
    margin-bottom: 12.5rem;
  }
  .Header-Text p:first-child {
    font-size: 15.5rem;
    line-height: 11.25rem;
  }

  .Header-Text p:last-child {
    font-size: 25rem;
    line-height: 1.5rem;
    margin-top: -5rem;
  }

  header img {
    width: 27.5rem;
  }
}
</style>
