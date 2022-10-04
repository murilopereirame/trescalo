<template>
  <div class="Navbar-Wrapper">
    <div class="Navbar-Top-NoBlur"></div>
    <div class="Navbar-Bottom-Blur"></div>
    <div class="Navbar-Container">
      <div class="Navbar-Mobile">
        <div class="Navbar-Logo">
          <img src="@/assets/images/logo-min.svg" alt="Grupo Trescalo" />
        </div>
        <div class="Navbar-Action">
          <div class="Navbar-Schedule">
            <a href=""> agendar consulta </a>
          </div>
        </div>
        <div class="Navbar-Social">
          <div class="Social-Icons">
            <a href="">
              <v-icon name="la-whatsapp" />
            </a>
            <a href="">
              <v-icon name="oi-location" />
            </a>
            <a href="">
              <v-icon name="md-email-outlined" />
            </a>
            <a href="">
              <v-icon name="la-linkedin" />
            </a>
          </div>
        </div>
        <div class="Navbar-Down">
          <div class="Sections-Icons">
            <SectionButton
              content="O GRUPO"
              :image="require('@/assets/images/squad_nav.png')"
            />
            <SectionButton
              content="CORPO MÉDICO"
              :image="require('@/assets/images/doctors_nav.png')"
            />
            <SectionButton
              content="ESPE CIALI DADES"
              :image="require('@/assets/images/specialties_nav.png')"
            />
            <SectionButton
              content="CON TATO"
              :image="require('@/assets/images/contact_nav.png')"
            />
          </div>
        </div>
      </div>
      <div class="Navbar-Desktop">
        <div class="Navbar-Action">
          <div class="Navbar-Schedule">
            <a href=""> agendar consulta </a>
          </div>
        </div>
        <SectionButton
          content="O GRUPO"
          :image="require('@/assets/images/squad_nav.png')"
        />
        <SectionButton
          content="CORPO MÉDICO"
          :image="require('@/assets/images/doctors_nav.png')"
        />
        <div class="Navbar-Logo">
          <img src="@/assets/images/logo-min.svg" alt="Grupo Trescalo" />
        </div>
        <SectionButton
          content="ESPE CIALI DADES"
          :image="require('@/assets/images/specialties_nav.png')"
        />
        <SectionButton
          content="CON TATO"
          :image="require('@/assets/images/contact_nav.png')"
        />
        <div class="Social-Icons">
          <a href="">
            <v-icon name="la-whatsapp" />
          </a>
          <a href="">
            <v-icon name="oi-location" />
          </a>
          <a href="">
            <v-icon name="md-email-outlined" />
          </a>
          <a href="">
            <v-icon name="la-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { defineComponent } from "vue";
import SectionButton from "@/components/SectionButton.vue";

export default defineComponent({
  name: "NavbarComponent",
  components: { "v-icon": OhVueIcon, SectionButton },
});
</script>
<style lang="scss" scoped>
.Navbar-Wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 100;

  .Navbar-Top-NoBlur {
    width: 100%;
    height: 20%;
    top: 0;
    position: absolute;
  }
  .Navbar-Bottom-Blur {
    width: 100%;
    height: 80%;
    bottom: 0;
    position: absolute;
    backdrop-filter: blur(40px);
  }

  @media only screen and (min-width: 768px) {
    .Navbar-Top-NoBlur {
      width: 100%;
      height: 35%;
      top: 0;
      position: absolute;
    }
    .Navbar-Bottom-Blur {
      width: 100%;
      height: 65%;
      bottom: 0;
      position: absolute;
      backdrop-filter: blur(40px);
    }
  }
}
.Navbar-Logo {
  background-color: $light;
  border-radius: 50%;
  padding: 15px;
  z-index: 2;
  justify-self: center;

  position: absolute;

  img {
    width: clamp(1rem, 20vw, 64px);
    height: clamp(1rem, 20vw, 64px);
  }
}

.Navbar-Desktop {
  display: none;
}

.Navbar-Container {
  z-index: 100;
  font-family: "Proxima Nova";
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;

  .Navbar-Mobile {
    display: grid;
    width: 95%;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    .Navbar-Action {
      .Navbar-Schedule {
        justify-content: center;
        display: flex;
        z-index: 2;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
        max-width: 75%;
        width: 100%;

        @media only screen and (max-width: 375px) {
          font-size: 0.9rem;
        }
      }

      grid-row: 1;
      grid-column-start: 1;
      grid-column-end: 3;
      display: flex;
      justify-content: flex-start;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .Navbar-Action,
    .Navbar-Social {
      background-color: $alt;
      height: 100%;
      a {
        text-decoration: none;
        color: $primary;
      }
      padding: 0rem 0.25rem;
      margin-top: 1.25rem;
    }

    .Navbar-Social {
      display: flex;
      justify-content: flex-end;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      grid-row: 1;
      grid-column-start: 3;
      grid-column-end: 5;
      .Social-Icons {
        max-width: 75%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .ov-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }

    .Navbar-Down {
      margin-top: 1.75rem;
      grid-row: 2;
      grid-column-start: 1;
      grid-column-end: 5;
      .Sections-Icons {
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .Navbar-Container {
    .Navbar-Mobile {
      display: none;
    }
  }

  .Navbar-Desktop {
    display: flex;
    align-items: center;
    width: 95%;
    justify-content: center;
    max-width: 1824px;
  }

  .Navbar-Logo {
    position: initial;
  }

  .Navbar-Action {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: $alt;
    padding: 0.75rem 0.5rem;
    border-radius: 10px;

    .Navbar-Schedule {
      a {
        text-decoration: none;
        cursor: pointer;
        color: $primary;

        font-size: 1rem;

        font-weight: 900;
      }
    }
  }

  .Social-Icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: $alt;
    padding: 0.75rem 0.5rem;
    border-radius: 10px;

    a {
      text-decoration: none;
      cursor: pointer;
      color: $primary;
    }
    .ov-icon {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 0.25rem;
    }
  }
}

@media only screen and (min-width: 1360px) {
  .Navbar-Action {
    padding: 1rem 1.5rem;
  }

  .Social-Icons {
    padding: 0.75rem 1rem;
    .ov-icon {
      width: 1.75rem;
      height: 1.75rem;
      margin: 0 0.5rem;
    }
  }
}
</style>
