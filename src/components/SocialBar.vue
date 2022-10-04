<template>
  <div class="Social-Bar">
    <h5>Conheça mais sobre este profissional</h5>
    <div class="Social-Icons">
      <a target="_blank" rel="external noopener" :href="links.whatsapp">
        <v-icon name="la-whatsapp" />
      </a>
      <a target="_blank" rel="external noopener" :href="links.linkedin">
        <v-icon name="la-linkedin" />
      </a>
      <a target="_blank" rel="external noopener" :href="links.instagram">
        <v-icon name="la-instagram" />
      </a>
      <a target="_blank" rel="external noopener" :href="links.facebook">
        <v-icon name="la-facebook-square" />
      </a>
      <a target="_blank" rel="external noopener" :href="links.email">
        <v-icon name="md-email-outlined" />
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ISocialBarProps } from "@/interfaces";
export default defineComponent({
  name: "SocialBar",
  props: {
    links: {
      type: Object as () => ISocialBarProps,
      required: true,
    },
  },
});
</script>
<style lang="scss">
.Social-Bar {
  background-color: $alt;
  padding: 1rem 1.5rem;
  color: $secondary;
  border-radius: 15px;

  h5 {
    margin: 0;
    margin-bottom: 1rem;
    font-family: "Proxima Nova";
    font-weight: 400;
  }

  a {
    .ov-icon {
      width: 2.25rem;
      height: 2.25rem;
      margin-right: 1rem;
    }

    text-decoration: none;
    color: $secondary;
  }
}

@media only screen and (min-width: 768px) {
  .Social-Bar {
    padding: 1rem 1.5rem;
    border-radius: 15px;

    h5 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    a {
      .ov-icon {
        width: 3.25rem;
        height: 3.25rem;
        margin-right: 1.5rem;
      }
    }
  }
}

@media only screen and (min-width: 1360px) {
  .Social-Bar {
    padding: 0.5rem 1.25rem;
    border-radius: 15px;

    h5 {
      font-size: 1.25rem;
    }

    a {
      .ov-icon {
        width: 2.25rem;
        height: 2.25rem;
        margin-right: 1rem;
      }
    }
  }
}
</style>
