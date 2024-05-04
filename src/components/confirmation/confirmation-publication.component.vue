<template>
  <div class="container">
    <h1>¡Publicación exitosa!</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="Descripción de la imagen" class="imagen-check">
    <div class="mensaje">
      <p>Este evento se llevara a cabo el dia 02/05 de mayo de 2024 desde las 18:00 PM hasta las 19:30 PM.</p>
    </div>
    <div class="button-container">
      <router-link to="/details" style="text-decoration: none" class="button-link">
        <pv-button class="cancel-button" style="margin-bottom: 10px;">Volver</pv-button>
      </router-link>

      <router-link to="/" style="text-decoration: none" class="button-link">
        <pv-button type="submit" class="save-button">Volver a crear otro evento</pv-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imagen-check {
  width: 20%;
}

.mensaje {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}


.cancel-button {
  margin-right: 10px;
}

.save-button,
.cancel-button {
  width: 200px;
  padding: 15px 0;
  color: #ffffff;
  border-radius: 5px;
  padding-left:20px;
  padding-right:20px;
}

.save-button {
  background-color: #007bff;
}

.cancel-button {
  background-color: #808080;
}
</style>
