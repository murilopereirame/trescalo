import { addIcons } from "oh-vue-icons";
import * as Icons from "oh-vue-icons/icons";
import { createApp } from "vue";
import App from "./App.vue";

addIcons(...Object.values(Icons));

createApp(App).mount("#app");
