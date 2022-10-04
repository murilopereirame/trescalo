<template>
  <div class="Contact-Form">
    <form>
      <input name="nome" type="text" placeholder="nome" />
      <input name="email" type="email" placeholder="e-mail" />
      <input
        name="celular"
        type="text"
        placeholder="telefone/celular/whatsapp"
      />
      <textarea placeholder="mensagem" name="mensagem"></textarea>
      <button type="submit"><v-icon name="bi-chevron-right" /></button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactForm",
});
</script>
<style lang="scss" scoped>
.Contact-Form {
  max-width: calc(100% - 50px);
}

form {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: flex-start;
  width: calc(100% - 20px);

  input,
  textarea {
    width: 100%;
    border: none;
    background-color: #f3f3f3;
    margin-top: 0.75rem;
    padding: 0.75rem 0.5rem;
    color: $primary;
    font-family: "Proxima Nova";
    border-radius: 7.5px;
    font-size: 1.25rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: $primary;
    font-family: "Proxima Nova";
    font-size: 1.25rem;
  }

  textarea {
    min-height: 100px;
  }

  button {
    position: absolute;
    bottom: -10px;
    right: -30px;
    width: 38px;
    height: 38px;
    background-color: #3d8479;
    border: none;
    border-radius: 5px;
    color: $light;

    @media only screen and (min-width: 768px) {
      bottom: -10px;
      right: -30px;
      width: 46px;
      height: 46px;
      border-radius: 7.5px;
    }
  }
}

@media only screen and (min-width: 1360px) {
  .Contact-Form {
    width: 100%;
    margin-top: 0.5rem;
    form {
      margin-top: 0;

      textarea {
        min-height: 150px;
      }
    }
  }
}
</style>
