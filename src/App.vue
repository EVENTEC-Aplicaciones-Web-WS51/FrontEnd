<template>
  <NavbarComponent></NavbarComponent>
  <router-view></router-view>
</template>

<script>
import NavbarComponent from "@/components/navbar/Navbar.component.vue";

export default {
  name: 'App',
  components: {
    NavbarComponent,
  }
}
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(to right,
  rgba(0, 0, 0, 0.9),
  rgba(255, 255, 255, 0)),  url("@/assets/images/background.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: var(--max-width);
  min-height: 100vh;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
:root {
  --primary-color: #0B3C5D;
  --secondary-color: #0B3C5D;
  --text-dark: #0f172a;
  --text-light: #94a3b8;
  --white: #ffffff;
  --max-width: 1400px;
}

</style>
