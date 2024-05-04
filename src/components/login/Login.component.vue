<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {


      this.$router.push('/home');
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/images/myevent_logo.png" alt="mueventLogo" height="315px"/>
    </div>
    <div class="login-container">
      <div class="Login">
        <h1>Iniciar sesión</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input id="password" v-model="password" type="password" required>
          </div>
          <button type="submit">Login</button>
          <router-link to="/register">Registrarse</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  margin-right: 20px;
}

.login-container {
  width: 300px;
}

.Login {
  padding: 20px;
  background: linear-gradient(to bottom right, rgba(255, 51, 51, 0.42), rgba(203, 137, 137, 0.37), rgba(131, 127, 127, 0.38), rgba(255, 255, 255, 0.29));
  border-radius: 10px;
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
}

.form-group input {
  width: 100%;
}
</style>
