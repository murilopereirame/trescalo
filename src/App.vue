<template>
  <NavbarComponent />
  <HomeSection />
  <SquadSection />
  <DoctorsSection />
  <SpecialtiesSection />
  <ContactSection />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeSection from "./sections/Home.vue";
import SquadSection from "./sections/Squad.vue";
import DoctorsSection from "./sections/Doctors.vue";
import SpecialtiesSection from "./sections/Specialties.vue";
import ContactSection from "./sections/Contact.vue";
import FooterSection from "./sections/Footer.vue";
import NavbarComponent from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeSection,
    SquadSection,
    DoctorsSection,
    SpecialtiesSection,
    ContactSection,
    FooterSection,
    NavbarComponent,
  },
});
</script>
