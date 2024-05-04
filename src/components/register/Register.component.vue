<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: '',
      formSubmitted: false,
      registrationSuccess: false
    };
  },
  methods: {
    register() {

      if (this.password === this.confirmPassword) {
        // Aquí agregar la lógica para enviar los datos del registro

          //Regirigimos al usuario una vez llenado los campos con exito

          this.formSubmitted = true;
          this.$router.push('/about');

        this.registrationSuccess = true;
        this.password = '';
        this.confirmPassword = '';
      } else {
        alert('Las contraseñas no coinciden');
      }



    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  }
};
</script>
<template>
  <div class="container">
    <div class="imagen">
      <img src="@/assets/images/myevent_logo.png" alt="mueventLogo" height="315px"/>
    </div>
    <div class="register-container">
      <div class="Register">
        <h1>Registro</h1>
        <form @submit.prevent="register" v-if="!formSubmitted">
          <div class="form-group">
            <label for="name">Nombre completo:</label>
            <input type="text" id="name" v-model="fullName" required>
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required>
            <button type="button" @click="togglePasswordVisibility">{{ showPassword ? 'Ocultar' : 'Mostrar' }}</button>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirmar contraseña:</label>
            <input id="confirmPassword" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" required>
            <button type="button" @click="toggleConfirmPasswordVisibility">{{ showConfirmPassword ? 'Ocultar' : 'Mostrar' }}</button>
          </div>
          <button type="submit">Sign up</button>
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
}

.imagen {
  margin-right: 20px;
}

.Register {
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
