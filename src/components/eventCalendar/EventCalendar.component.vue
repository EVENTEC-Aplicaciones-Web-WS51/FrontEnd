<script>

export default {
  name: "EventCalendarComponent",
  data() {
    return {
      date: null,
      selectedEvent: null,
      events: [
        { name: 'Evento 1', code: 'E1' },
        { name: 'Evento 2', code: 'E2' },
        { name: 'Evento 3', code: 'E3' },
        { name: 'Evento 4', code: 'E4' },
        { name: 'Evento 5', code: 'E5' }
      ]
    };
  },
  methods: {
    navigateToEventForm() {
      this.$router.push('/event-form');
    }
  },
  components: {
  }
}
</script>

<template>
  <div class="container">
    <div class="eventCalendar__container">
      <div class="eventCalendar__header">
        <h1 class="title">
          DALE INICIO A UNA GRAN EXPERIENCIA
        </h1>
        <p class="subtitle">
          Encuentra tu evento
        </p>
      </div>
      <div class="eventCalendar__body">
        <div class="eventCalendar__calendar">
          <!-- Llamar y mostrar un Calendar de PrimeVue -->
          <Calendar v-model="date"/>
        </div>
        <div class="eventCalendar__list">
          <!-- Crear y mostrar una Listbox de eventos -->
          <Listbox v-model="selectedEvent" :options="events" optionLabel="name" optionValue="code" class="p-mr-2" />
          <button class="btn btn-primary" @click="navigateToEventForm">
            Añadir un nuevo evento
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}

.eventCalendar__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 600;
  color: black;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 450;
  color: #000000;
  text-align: center;
}

.eventCalendar__body {
  display: flex;
  gap: 1rem;
}

.eventCalendar__calendar {
  width: 50%;
}

.btn-primary {
  background-color: #0B3C5D;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 200px;
  height: 40px;
}

.btn-primary:hover {
  background-color: #0B3C5D;
}

.eventCalendar__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.p-mr-2 {
  margin-right: 0.5rem;
  color: black;
}
</style>