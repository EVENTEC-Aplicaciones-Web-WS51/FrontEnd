<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
export default {
  name: "EventsComponent",
  data(){
    return {
      events: []
    }
  },



  components: {
    Card,
    Button
  },

  created() {
    fetch("http://localhost:3000/eventos").then(response => {
      return response.json()
    }).then(data => {
      this.events = data
    }).catch(error => {
      console.log(error)
    })
  },

  methods: {
    goToCalendar() {
      this.$router.push('/event-calendar');
    },
    goToManage() {
      this.$router.push('/manage-events');
    },
  }
}
</script>

<template>
  <div>Consumo de API</div>
  <Button label="Gestionar" severity="secondary" outlined class="w-full" @click="goToManage"></Button>
<div class="flex flex-wrap">
  <Card class="w-1/4 p-2 card-margin" style="width: 22rem; overflow: hidden;" v-for="event in events" :key="event.id">
    <template #header>
      <img alt="user header" :src="require('@/assets/data/' + event.imagen)"/>
    </template>
    <template #title>{{event.nombre}}</template>
    <template #subtitle>{{event.tipo}}</template>
    <template #content>
      <p class="m-0">
        {{event.descripcion}}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <!-- -->
        <Button label="Ver detalles" severity="secondary" outlined class="w-full" @click="goToCalendar"></Button>
        <Button label="Comprar" class="w-full"></Button>
      </div>
    </template>

  </Card>
</div>


</template>



<style scoped>
.card-margin {
  margin: 1rem;
}
img{
  width: 100%;
  height: 320px;
}



</style>
