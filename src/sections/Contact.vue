<template>
  <section id="contact">
    <div class="Wrapper">
      <div class="Contact-Title">
        <h2>contato</h2>
      </div>
      <div class="Contact-Body">
        <div class="Contact-Methods">
          <ContactMethod
            icon="la-phone-volume-solid"
            content="+55 11 1234-5678"
            action="callto:+551112345678"
            :biggerFont="true"
          />
          <ContactMethod
            icon="la-whatsapp"
            content="+55 11 1234-5678"
            action="https://wa.me/551112345678"
            :biggerFont="true"
          />
          <ContactMethod
            icon="co-facebook"
            content="trescalo"
            action="https://wa.me/551112345678"
          />
          <ContactMethod
            icon="la-instagram"
            content="trescalo"
            action="https://wa.me/551112345678"
          />
          <ContactMethod
            icon="oi-mail"
            content="contato@grupotrescalo.com"
            action="https://wa.me/551112345678"
          />
          <ContactMethod
            icon="oi-location"
            content="
              Claudionor Sandoval, 741<br/>
              Jardim Paulista, São Paulo<br/>
              SP, 19023-200
            "
            action="https://wa.me/551112345678"
          />
        </div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Claudionor%20Sandoval,%20741-%20Jardim%20Paulista,%20S%C3%A3o%20Paulo%20SP,%2019023-200&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding-bottom: 1.25rem;
  background-color: $light;
  color: $primary;

  h2 {
    font-family: "Modern No. 20";
    font-size: clamp(2rem, 25vw + 0.5em, 3rem);
    margin-bottom: 1.5rem;
  }

  .mapouter {
    margin-top: 1rem;
  }

  .mapouter,
  .gmap_canvas,
  iframe {
    width: calc(100% - 20px);
    height: clamp(20rem, 10vh, 30rem);
  }

  iframe {
    border-radius: 10px;
  }
  .Wrapper {
    padding: 0 50px 0 30px;
  }
}

@media only screen and (min-width: 1360px) {
  .Contact-Body {
    display: flex;
    align-items: flex-start;
    max-width: calc(100% - 80px);
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;

    .Wrapper {
      padding-left: 160px;
    }
    .mapouter {
      margin: 1.25rem 2rem;
      width: 100%;
      height: unset;
      align-self: stretch;
    }

    .gmap_canvas,
    iframe {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
<script lang="ts">
import { addIcons, CustomizeIconType } from "oh-vue-icons";
import { defineComponent } from "vue";
import ContactMethod from "../components/ContactMethod.vue";
import ContactForm from "../components/ContactForm.vue";
import { findIcons } from "@/util";

export default defineComponent({
  name: "ContactSection",
  setup() {
    const icons: CustomizeIconType[] = findIcons([
      "la-phone-volume-solid",
      "la-whatsapp",
      "co-facebook",
      "la-instagram",
      "oi-mail",
      "oi-location",
      "bi-chevron-right",
    ]);

    addIcons(...icons);
  },
  components: { ContactMethod, ContactForm },
});
</script>
