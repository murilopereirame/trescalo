import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  BiChevronRight,
  LaLinkedin,
  LaFacebookSquare,
  MdEmailOutlined,
  LaPhoneVolumeSolid,
  LaWhatsapp,
  CoFacebook,
  LaInstagram,
  OiLocation,
} from "oh-vue-icons/icons";
import { createApp } from "vue";
import VueLazyLoad from "vue3-lazyload";
import App from "./App.vue";

addIcons(
  BiChevronRight,
  LaLinkedin,
  LaFacebookSquare,
  MdEmailOutlined,
  LaPhoneVolumeSolid,
  LaWhatsapp,
  CoFacebook,
  LaInstagram,
  OiLocation
);

createApp(App).use(VueLazyLoad).component("v-icon", OhVueIcon).mount("#app");
