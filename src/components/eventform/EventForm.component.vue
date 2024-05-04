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
  },
  methods: {
    goToCalendar() {
      this.$router.push('/event-calendar');
    },
    goToAddEvents() {
      this.$router.push('/add-details');
    },
  }
}
</script>

<template>
  <div class="addEventcontainer">
    <h1 class="addEventtitle">
      AÑADIR EVENTO
    </h1>
    <p class="addEventdescription">
      Rellene todos los casilleros para continuar
    </p>
    <div class="addEventform">
      <div class="addEventformheader">
        <p class="addEventformheadertitle">
          Nombre del evento
        </p>
        <input type="text" placeholder="Nombre del evento" v-model="nombre" class="input-value">
      </div>
      <div class="addEventformheader">
        <p class="addEventformheadertitle">
          Fecha
        </p>
        <input type="date" placeholder="Mes/Día/Año" v-model="fecha" class="input-value">
      </div>
      <div class="addEventformtimer">
        <div>
          <p class="addEventformheadertitle">
            Hora
          </p>
          <input type="time" placeholder="HH:MM" v-model="hora" class="input-value">
        </div>
        <div>
          <p class="addEventformheadertitle">
            Duración
          </p>
          <input type="time" placeholder="HH:MM" v-model="duracion" class="input-value">
        </div>
        <div>
          <p class="addEventformheader__title">
            Todo el dia
          </p>
          <input-switch></input-switch>
        </div>
      </div>
      <div class="addEventformheader">
        <p class="informacion_fecha">
          El evento se llevará a cabo el {{ fecha }} a las {{ hora }} con una duración de {{ duracion }} horas
        </p>
      </div>
      <div class="addEventformheader">
        <p class="addEventformheadertitle">
          Dirección
        </p>
        <input type="text" placeholder="Añadir dirección" v-model="direccion" class="input-value">
      </div>
      <div class="addEventformheader">
        <p class="addEventformheadertitle">
          Categoría
        </p>
        <Chips :items="['Discoteca', 'Concierto', 'Evento']"></Chips>
      </div>
      <div class="addEventformbutton">
        <Button class="button--secondary" @click="goToCalendar">
          Volver
        </Button>
        <Button class="button--primary"  @click="goToAddEvents">
          Continuar
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.addEventcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.addEventtitle {
  font-size: 3rem;
  font-weight: 600;
  color: black;
}

.addEventdescription {
  font-size: 1rem;
  font-weight: 600;
  color: black;
}

.addEventform {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
}

.addEventformheader {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.addEventformheadertitle {
  font-size: 1rem;
  font-weight: 600;
  color: black;
}

.addEventformtimer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.informacion_fecha {
  font-size: 0.8rem;
  font-weight: 400;
  color: #3f3f3f;
}

.addEventform__button {
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