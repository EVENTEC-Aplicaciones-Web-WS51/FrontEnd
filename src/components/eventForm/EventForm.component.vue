<script>
export default {
  name: "EventFormComponent",
  data() {
    return {
      fecha: "FECHA",
      hora: "HORA",
      duracion: "DURACION",
      nombre: "",
      direccion: ""
    };
  }
}
</script>

<template>
  <div class="addEvent__container">
    <h1 class="addEvent__title">
      AÑADIR EVENTO
    </h1>
    <p class="addEvent__description">
      Rellene todos los casilleros para continuar
    </p>
    <div class="addEvent__form">
          <div class="addEvent__form__header">
            <p class="addEvent__form__header__title">
              Nombre del evento
            </p>
            <input type="text" placeholder="Nombre del evento" v-model="nombre" class="input-value">
          </div>
          <div class="addEvent__form__header">
            <p class="addEvent__form__header__title">
              Fecha
            </p>
            <input type="date" placeholder="Mes/Día/Año" v-model="fecha" class="input-value">
          </div>
          <div class="addEvent__form__timer">
            <div>
              <p class="addEvent__form__header__title">
                Hora
              </p>
              <input type="time" placeholder="HH:MM" v-model="hora" class="input-value">
            </div>
            <div>
              <p class="addEvent__form__header__title">
                Duración
              </p>
              <input type="time" placeholder="HH:MM" v-model="duracion" class="input-value">
            </div>
            <div>
              <p class="addEvent__form__header__title">
                Todo el dia
              </p>
              <input-switch></input-switch>
            </div>
          </div>
          <div class="addEvent__form__header">
            <p class="informacion_fecha">
              El evento se llevará a cabo el {{ fecha }} a las {{ hora }} con una duración de {{ duracion }} horas
            </p>
          </div>
          <div class="addEvent__form__header">
            <p class="addEvent__form__header__title">
              Dirección
            </p>
            <input type="text" placeholder="Añadir dirección" v-model="direccion" class="input-value">
          </div>
          <div class="addEvent__form__header">
            <p class="addEvent__form__header__title">
              Categoría
            </p>
            <Chips :items="['Discoteca', 'Concierto', 'Evento']"></Chips>
          </div>
          <div  class="addEvent__form__button">
            <Button class="button--secondary">
              Volver
            </Button>
            <Button class="button--primary">
              Continuar
            </Button>
          </div>
        </div>
  </div>
</template>

<style scoped>
.addEvent__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.addEvent__title {
  font-size: 3rem;
  font-weight: 600;
  color: black;
}

.addEvent__description {
  font-size: 1rem;
  font-weight: 600;
  color: black;
}

.addEvent__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
}

.addEvent__form__header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.addEvent__form__header__title {
  font-size: 1rem;
  font-weight: 600;
  color: black;
}

.addEvent__form__timer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.informacion_fecha {
  font-size: 0.8rem;
  font-weight: 400;
  color: #3f3f3f;
}

.addEvent__form__button {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
}

.button--secondary {
  background-color: #f5f5f5;
  color: gray;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  font-size: 20px;
  width: 200px;
  height: 40px;
}

.button--primary {
  background-color: royalblue;
  color: white;
  border: 1px solid royalblue;
  border-radius: 10px;
  font-size: 20px;
  width: 200px;
  height: 40px;
}

.input-value {
  padding: 0.5rem;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
}
</style>