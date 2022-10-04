<template>
  <div class="Contact-Method">
    <a :href="action" target="_blank" rel="external noopener">
      <v-icon :name="icon" />
      <p :class="{ big: biggerFont }"><span v-html="content"></span></p>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactMethod",
  props: {
    content: { type: String, required: true },
    icon: { type: String, required: true },
    action: { type: String, required: true },
    biggerFont: { type: Boolean, required: false },
  },
});
</script>
<style lang="scss" scoped>
.Contact-Method {
  margin: 1.25rem 0;
}
.Contact-Method a {
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: $primary;

  .ov-icon {
    width: 2.25rem;
    height: 2.25rem;
  }

  p {
    font-family: "Proxima Nova";
    font-size: 1.25rem;
    margin: 0;
    margin-left: 0.5rem;
    font-weight: 600;
  }

  .big {
    font-size: 1.5rem;
  }
}
</style>
