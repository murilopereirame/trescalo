<template>
  <header>
    <div class="Header-Text">
      <p>cuidar<br />de você<br />é sempre</p>
      <p>proteger</p>
    </div>
    <img src="@/assets/images/logo.svg" alt="Grupo Trescalo" />
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
  margin-left: 0.5rem;
}

.Header-Text p:last-child {
  font-family: "Liana";
  font-size: 9.5rem;
  line-height: 1rem;
  margin-top: -2rem;
  color: $secondary;
  margin-left: 0.75rem;
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

header img {
  width: 12.5rem;
  margin-top: 12.5rem;
}
</style>
