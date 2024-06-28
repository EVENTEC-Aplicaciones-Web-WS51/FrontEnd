<script>
import TheRegisterBackendService from "@/services/the-register-backend.service";

export default {
  name: 'TheRegister',
  data() {
    return {
      email: '',
      user: '',
      password: '',
      confirmPassword: '',
      isArtisan: false,
      clientes: []
    };
  },

  methods: {
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      const requestBody = {
        usuario: this.user,
        contraseña: this.password,
        correo: this.email,
        imagenUsuario: "null", // Asegúrate de que este valor sea correcto
        isArtisan: this.isArtisan,
        role: "null" // Asegúrate de que este valor sea correcto
      };

      console.log('Request body:', requestBody); // Imprime el cuerpo de la petición

      TheRegisterBackendService.register(requestBody)
          .then((data) => {
            alert('Registro exitoso');
            console.log('Token de autenticación:', data.token); // Imprime el token en la consola
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Error al registrar el usuario:', error);
            alert('Error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
          });
    },
  }
}
</script>


<template>
  <div class="container">
    <div class="left-section">
      <img src="../../assets/images/myevent_logo.png" height="400px">
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="right-section">
        <div class="container-login">
          <div class="border-2 surface-border surface-card border-round py-7 px-4 md:px-8 z-1">
            <div class="mb-4">
              <div class="text-900 text-xl font-bold mb-2">Registra una cuenta</div>
              <span class="text-600 font-medium">Por favor crea tus datos</span></div>
            <div class="flex flex-column">
              <div class="p-icon-field p-icon-field-left w-full mb-4" data-pc-name="iconfield"
                   data-pc-section="root"><span
                  class="p-input-icon pi pi-user" data-pc-name="inputicon" data-pc-section="root"></span><input
                  v-model="user" class="p-inputtext p-component w-full md:w-35rem" id="email" type="text"
                  placeholder="Nombre Completo"
                  data-pc-name="inputtext" data-pc-section="root"></div>
              <div class="p-icon-field p-icon-field-left w-full mb-4" data-pc-name="iconfield"
                   data-pc-section="root"><span
                  class="p-input-icon pi pi-envelope" data-pc-name="inputicon" data-pc-section="root"></span><input
                  v-model="email" class="p-inputtext p-component w-full md:w-35rem" id="email" type="text"
                  placeholder="Correo electrónico"
                  data-pc-name="inputtext" data-pc-section="root"></div>
              <div class="p-icon-field p-icon-field-left w-full mb-4" data-pc-name="iconfield"
                   data-pc-section="root"><span
                  class="p-input-icon pi pi-lock" data-pc-name="inputicon" data-pc-section="root"></span><input
                  v-model="password" class="p-inputtext p-component w-full md:w-35rem" id="password" type="password"
                  placeholder="Contraseña"
                  data-pc-name="inputtext" data-pc-section="root"></div>
              <div class="p-icon-field p-icon-field-left w-full mb-4" data-pc-name="iconfield"
                   data-pc-section="root"><span
                  class="p-input-icon pi pi-lock" data-pc-name="inputicon" data-pc-section="root"></span><input
                  v-model="confirmPassword" class="p-inputtext p-component w-full md:w-35rem" id="password" type="password"
                  placeholder="Contraseña"
                  data-pc-name="inputtext" data-pc-section="root"></div>
              <div class="mb-4 flex flex-wrap gap-3">

                <a class="text-300 cursor-pointer hover:text-primary cursor-pointer ml-auto transition-colors transition-duration-200">¿Problemas para registrarte?</a>
              </div>
              <button class="p-button p-component w-full button-color-change" type="submit" aria-label="Sign up" data-pc-name="button"
                      data-pc-section="root" data-pd-ripple="true"><!----><span class="p-button-label"
                                                                                data-pc-section="label">Registrarse</span>
                <!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false"
                             class="p-ink"
                             data-pc-name="ripple" data-pc-section="root"></span></button>
            </div>
          </div>
        </div>
      </div>
    </form>

  </div>


</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-around; /* Espacio entre secciones izquierda y derecha */
  align-items: center;
  padding: 10px; /* Espaciado interno */
  margin-top: 140px;
}

.left-section {
  /* Ajusta el margen derecho para separar más la izquierda de la derecha */
}

.right-section {
  margin-left: -300px; /* Ajusta el margen izquierdo para separar más la derecha de la izquierda */
}

.button-color-change {
  background-color: #d50808; /* Reemplaza #yourColorHere con el código de color que desees */
  border-color: #d50808;
  color: #eeeeee; /* Reemplaza #yourTextColorHere con el código de color que desees para el texto */
}
.p-inputtext {
  font-family: var(--font-family);
  font-feature-settings: var(--font-feature-settings, normal);
  font-size: 1rem;
  color: #495057;
  background: #ffffff;
  padding: 0.5rem 2rem;
  border: 1px solid #ced4da;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 3px;
  outline-color: transparent;
}

</style>
