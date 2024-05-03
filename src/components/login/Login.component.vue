<script>
export default {
  name: "LoginComponent",
  components: {},

  methods: {
    goToDifferentPath() { this.$router.push('/home'); },
    goToCatalogue() { this.$router.push('/home'); },
    goToAbout() { this.$router.push('/home'); },
    goToContact() { this.$router.push('/home'); }
  }
}


</script>

<template>

  <div class="container">
    <div class="left-section">
      <img src="../../assets/images/myevent_logo.png" height="400px">
    </div>
    <div class="right-section">
      <div class="container-login">
        <div class="border-2 surface-border surface-card border-round py-7 px-4 md:px-8 z-1">
          <div class="mb-4">
            <div class="text-900 text-xl font-bold mb-2">Ingresa a tu cuenta</div>
            <span class="text-600 font-medium">Por favor ingresa tus datos</span></div>
          <div class="flex flex-column">
            <div class="p-icon-field p-icon-field-left w-full mb-4" data-pc-name="iconfield"
                 data-pc-section="root"><span
                class="p-input-icon pi pi-envelope" data-pc-name="inputicon" data-pc-section="root"></span><input
                class="p-inputtext p-component w-full md:w-35rem" id="email" type="text" placeholder="Correo electrónico"
                data-pc-name="inputtext" data-pc-section="root"></div>
            <div class="p-icon-field p-icon-field-left w-full mb-4" data-pc-name="iconfield"
                 data-pc-section="root"><span
                class="p-input-icon pi pi-lock" data-pc-name="inputicon" data-pc-section="root"></span><input
                class="p-inputtext p-component w-full md:w-35rem" id="password" type="password" placeholder="Contraseña"
                data-pc-name="inputtext" data-pc-section="root"></div>
            <div class="mb-4 flex flex-wrap gap-3">
              <div>
                <div class="p-checkbox p-component mr-2" data-pc-name="checkbox" data-pc-section="root"
                     data-p-highlight="true"><input type="checkbox" class="p-checkbox-input"
                                                    name="checkbox" data-pc-section="input">
                  <div class="p-checkbox-box" data-pc-section="box"><!----></div>
                </div>
                <label class="text-900 font-medium mr-8"> Recuérdame </label></div>
              <a class="text-300 cursor-pointer hover:text-primary cursor-pointer ml-auto transition-colors transition-duration-200">Restablecer
                Contraseña</a>
            </div>
            <button class="p-button p-component w-full" type="button" aria-label="Log In" data-pc-name="button"
                    data-pc-section="root" data-pd-ripple="true"><!----><span class="p-button-label"
                                                                              data-pc-section="label" @click="goToDifferentPath">Iniciar Sesión</span>
              <!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false"
                           class="p-ink"
                           data-pc-name="ripple" data-pc-section="root"></span></button>
          </div>
        </div>
      </div>
    </div>
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


</style>