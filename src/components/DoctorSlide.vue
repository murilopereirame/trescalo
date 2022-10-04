<template>
  <div class="Doctor-Slide">
    <img v-lazy="{ src: info.image }" :alt="info.name" />
    <div class="Doctor-Data">
      <div class="Doctor-Info">
        <h1>{{ info.name }}</h1>
        <h3>{{ info.specialtie }}</h3>
        <h3>{{ info.university }}</h3>
        <p>
          {{ info.description }}
        </p>
      </div>
      <SocialBar :links="info.social" />
    </div>
  </div>
</template>
<script lang="ts">
import SocialBar from "./SocialBar.vue";
import { defineComponent } from "vue";
import { IDoctorProps } from "@/interfaces";

export default defineComponent({
  name: "DoctorSlide",
  props: {
    info: {
      type: Object as () => IDoctorProps,
      required: true,
    },
  },
  components: {
    SocialBar,
  },
});
</script>
<style lang="scss" scoped>
.Doctor-Slide {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px 0 30px;
}

.Doctor-Slide img {
  border-radius: 25px;
}

.Doctor-Info {
  font-family: "Proxima Nova";
  color: $primary;
  h1 {
    font-size: clamp(1rem, 10vw + 0.5em, 2rem);
    font-weight: 900;
    margin-top: 0.5rem;
  }

  h3 {
    margin: 0;
    font-size: clamp(1rem, 10vw + 0.5em, 1.25rem);
    font-weight: 500;
  }
  margin-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
  .Doctor-Slide {
    padding: 0 60px 0 60px;
  }

  .Doctor-Info {
    h1 {
      font-size: clamp(2rem, 10vw + 0.5em, 3rem);
      margin-bottom: 1rem;
    }

    h3 {
      font-size: clamp(1.5rem, 10vw + 0.5em, 1.75rem);
    }

    p {
      font-size: clamp(1.5rem, 10vw + 0.5em, 1.75rem);
    }
  }
}

@media only screen and (min-width: 1360px) {
  .Doctor-Slide {
    flex-direction: row;
  }

  .Doctor-Slide img {
    width: 100%;
    border-radius: 3.25rem;
    box-sizing: border-box;
    margin-right: 7.5%;
    padding: 1rem 0;
  }

  .Doctor-Data {
    max-width: 45%;
    padding: 2.5rem 0;
    padding-right: 5rem;
  }

  .Doctor-Info {
    h1 {
      font-size: clamp(2rem, 10vw + 0.5em, 2.5rem);
      margin-bottom: 1rem;
    }

    h3 {
      font-size: clamp(1rem, 10vw + 0.5em, 1.25rem);
    }

    p {
      font-size: clamp(1rem, 10vw + 0.5em, 1.25rem);
    }
  }
}

@media only screen and (min-width: 1920px) {
  .Doctor-Slide img {
    border-radius: 3.25rem;
    box-sizing: border-box;
    margin-right: 7.5%;
    padding: 1rem 0;
  }

  .Doctor-Data {
    max-width: 50%;
    padding: 2.5rem 0;
    padding-right: 5rem;
  }

  .Doctor-Info {
    h1 {
      font-size: clamp(2.5rem, 10vw + 0.5em, 3.5rem);
      margin-bottom: 1rem;
    }

    h3 {
      font-size: clamp(1.5rem, 10vw + 0.5em, 2rem);
    }

    p {
      font-size: clamp(1.5rem, 10vw + 0.5em, 2rem);
    }
  }
}
</style>
