<template>
  <div class="Section-Button">
    <a :href="action">
      <div
        :style="{ backgroundImage: 'url(' + image + ')' }"
        class="SB-Container"
      >
        <p>{{ content }}</p>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionButton",
  props: {
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  cursor: pointer;
}

.Section-Button {
  width: 100%;
  padding: 0 0.5rem;
  height: 125px;
}

.SB-Container {
  width: 100%;
  height: 125px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.1rem;
}

.SB-Container p {
  margin: 0;
  color: $light;
  font-weight: 900;
  font-size: 1.25rem;
  word-wrap: break-word;
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  .Section-Button {
    width: 80px;
    padding: 0 0.5rem;
    height: auto;

    @media only screen and (max-width: 768px) {
      width: 70px;
    }
  }

  .SB-Container {
    height: 100px;
  }

  .SB-Container p {
    font-size: 1rem;
    padding: 0 0.25rem;
  }
}

@media only screen and (min-width: 1360px) {
  .Section-Button {
    width: 120px;
    padding: 0 0.5rem;
    height: auto;
  }

  .SB-Container {
    height: 100px;
  }

  .SB-Container p {
    font-size: 1.25rem;
    padding: 0 0.5rem;
    padding-right: 1.5rem;
  }
}
</style>
