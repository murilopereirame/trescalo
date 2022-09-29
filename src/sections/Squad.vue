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
        <img src="@/assets/images/squad.png" alt="Grupo Médico" />
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

<style lang="scss" scoped></style>
