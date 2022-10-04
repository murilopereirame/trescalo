<template>
  <section id="squad">
    <div class="Wrapper">
      <div class="Squad-Info">
        <p>o grupo</p>
        <p>
          Nos unimos por um propósito em comum: ajudar pessoas.<br /><br />
          O Grupo Trescalo nasceu de uma parceria entre médicos, que perceberam
          juntos, a necessidade de juntar esforços e agregar conhecimento para
          melhorar a vida das pessoas. <br /><br />
          Nossa união se iniciou durante a pandemia de COVID-19, e se
          estabilizou na luta em comum de todos. Hoje o Grupo Trescalo conta com
          profissionais experientes, treinados e acima de tudo – responsáveis
          por vidas.
        </p>
      </div>
      <div class="Squad-Image">
        <div class="Squad-Bg"></div>
        <p>cuidado</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SquadSection",
});
</script>

<style lang="scss" scoped>
section {
  background-color: $light;
  display: flex;
  justify-content: center;
}

.Squad-Info {
  padding: clamp(75px, 25vh, 100px) 50px 25px 30px;
}

.Squad-Info p {
  margin: 0;
  color: $primary;
}

.Squad-Info p:first-child {
  font-family: "Modern No. 20";
  font-size: clamp(2rem, 25vw + 0.5em, 3rem);
  margin-bottom: 1rem;
}

.Squad-Info p:last-child {
  font-family: "Proxima Nova";
  font-size: clamp(1rem, 25vw + 0.5em, 1.25rem);
}

.Squad-Image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.Squad-Image .Squad-Bg {
  width: calc(100% - 60px);
  min-height: 500px;
  border-radius: clamp(20px, 1vw, 50px);
  background: url(@/assets/images/squad.jpg);
  background-size: cover;
  background-position: center;
}

.Squad-Image {
  position: relative;
  margin-bottom: clamp(-4rem, -10vh, -2rem);
  margin-top: 1.5rem;
}

.Squad-Image p {
  margin: 0;
  font-family: "Liana";
  font-size: clamp(4rem, 37.5vw + 0.5em, 18rem);
  padding-left: clamp(10px, 10vw, 25px);
  position: absolute;
  bottom: clamp(0.5em, 1vh, 1em);
  color: $secondary;
}

@media only screen and (min-width: 768px) {
  .Squad-Info {
    padding: clamp(100px, 25vh, 150px) 100px 25px 60px;
  }

  .Squad-Info p:first-child {
    font-size: clamp(4rem, 25vw + 0.5em, 7rem);
    margin-bottom: 2.5rem;
  }

  .Squad-Info p:last-child {
    font-size: clamp(2rem, 25vw + 0.5em, 2.25rem);
  }

  .Squad-Image .Squad-Bg {
    width: calc(100% - 120px);
    min-height: 600px;
  }

  .Squad-Image {
    margin-bottom: clamp(-10rem, -10vh, -2rem);
  }

  .Squad-Image p {
    font-size: clamp(4rem, 37.5vw + 0.5em, 22.5rem);
    padding-left: clamp(10px, 10vw, 55px);
    bottom: clamp(0.25em, 1vh, 2em);
  }
}

@media only screen and (min-width: 1360px) {
  section {
    padding-top: 100px;
    height: min-content;
  }
  .Wrapper {
    flex-direction: row;
    position: relative;
  }

  .Squad-Info {
    padding-top: 0;
    padding-bottom: calc(550px / 3);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .Squad-Info p:first-child {
    font-size: clamp(1rem, 25vw + 0.5em, 4rem);
    margin-bottom: 2.5rem;
  }

  .Squad-Info p:last-child {
    font-size: clamp(0.75rem, 25vw + 0.5em, 1rem);
    padding-right: 150px;
    margin-bottom: clamp(4rem, 10vh, 7.5rem);
  }

  .Squad-Image .Squad-Bg {
    width: clamp(5rem, 50vw + 0.5em, 30rem);
    margin-bottom: clamp(-2.5rem, -10vh, -0rem);
    margin-right: 150px;
    min-height: 550px;
    z-index: 2;
    position: absolute;
    bottom: 0;
  }

  .Squad-Image {
    position: initial;
  }

  .Squad-Image p {
    font-size: clamp(4rem, 37.5vw + 0.5em, 18.25rem);
    padding-left: 15px;
    bottom: -55px;
    left: 0;
    z-index: 1;
  }
}

@media only screen and (min-width: 1920px) {
  .Squad-Info p:first-child {
    font-size: clamp(1rem, 25vw + 0.5em, 5rem);
    margin-bottom: 2.5rem;
  }

  .Squad-Info p:last-child {
    font-size: clamp(1rem, 25vw + 0.5em, 1.5rem);
    padding-right: 150px;
    margin-bottom: clamp(4rem, 15vh, 8rem);
  }

  .Squad-Image .Squad-Bg {
    width: clamp(5rem, 50vw + 0.5em, 50rem);
    margin-bottom: clamp(-4rem, -10vh, -0rem);
    margin-right: 250px;
    min-height: 700px;
  }

  .Squad-Image {
    position: initial;
  }

  .Squad-Image p {
    font-size: clamp(4rem, 37.5vw + 0.5em, 22.25rem);
    bottom: -185px;
  }
}
</style>
