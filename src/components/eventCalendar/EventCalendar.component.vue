<script>
import Calendar from "primevue/calendar";

export default {
  name: "EventCalendarComponent",
  data() {
    return {
      date: null
    };
  },
  methods: {
    navigateToEventForm() {
      this.$router.push('/event-form');
    }
  },
  components: {
    Calendar
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
        </div>
        <div class="eventCalendar__list">
          <p></p>
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

.eventCalendar__header {
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
}

</style>