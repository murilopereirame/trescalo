<template>
  <footer>
    <div class="Wrapper">
      <div class="Footer-Logo">
        <img
          src="@/assets/images/logo.svg"
          alt="Grupo Trescalo"
          class="Logo-Mobile"
        />
        <img
          src="@/assets/images/logo-hor.svg"
          alt="Grupo Trescalo"
          class="Logo-Desk"
        />
      </div>
      <div class="Footer-MadeBy">
        <p>CRIADO POR</p>
        <a
          href="https://raphael.art.br"
          target="_blank"
          rel="external noopener"
        >
          <img src="@/assets/images/raphael.svg" alt="Raphael.art.br" />
        </a>
        <p>E</p>
        <a
          href="https://murilopereira.dev.br"
          target="_blank"
          rel="external noopener"
        >
          <img
            id="logo-murilo"
            src="@/assets/images/murilo.svg"
            alt="Murilo Pereira"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSection",
});
</script>
<style lang="scss" scoped>
footer {
  padding-top: 2.5rem;
  padding-bottom: 7.5rem;
  background-color: $light;

  .Wrapper {
    align-items: center;
  }
}

.Footer-Logo {
  display: flex;
  justify-content: center;
  .Logo-Desk {
    display: none;
  }
}

.Logo-Mobile {
  width: clamp(20rem, 10vw, 30rem);
}

.Footer-MadeBy {
  display: flex;
  align-items: flex-end;
  margin-top: 7.5rem;

  p {
    margin: 0 0.5rem;
    font-style: italic;
    font-family: "Proxima Nova";
    color: $secondary;
    letter-spacing: 2.5px;
    font-size: 0.5rem;
  }

  a {
    display: flex;
    align-items: flex-end;
  }

  img {
    height: 10px;
  }

  #logo-murilo {
    height: 15px;
  }
}

@media only screen and (min-width: 768px) {
  footer {
    padding-top: 2.5rem;
    padding-bottom: 5rem;
  }
  .Footer-Logo {
    .Logo-Desk {
      display: initial;
      width: clamp(20rem, 50vw, 45rem);
    }

    .Logo-Mobile {
      display: none;
    }
  }
  .Footer-MadeBy {
    display: flex;
    align-items: flex-end;
    margin-top: 2.5rem;
  }
}

@media only screen and (min-width: 1360px) {
  footer {
    padding-top: 5rem;
  }

  .Footer-Logo {
    .Logo-Desk {
      display: initial;
      width: clamp(20rem, 50vw, 30rem);
    }
  }
}
</style>
