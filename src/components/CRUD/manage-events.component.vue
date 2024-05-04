<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
export default {
  name: "ManageEventsComponent",
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
    createEvent() {
      const newId = Math.max(...this.events.map(event => event.id)) + 1; // Obtener el siguiente ID
      const newNombre = window.prompt('Ingrese el nombre del evento:');
      const newTipo = window.prompt('Ingrese el tipo del evento:');
      const newDescripcion = window.prompt('Ingrese la descripción del evento:');
      const newImagen = "images/evento1.jpg";
      if (newNombre !== null && newTipo !== null && newDescripcion !== null) {
        fetch(`http://localhost:3000/eventos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: newId,
            nombre: newNombre,
            tipo: newTipo,
            descripcion: newDescripcion,
            imagen: newImagen,
            // Puedes agregar aquí los demás campos con valores predeterminados o nulos
          }),
        })
            .then(response => response.json())
            .then(newEvent => {
              this.events.push(newEvent);
              location.reload(); // Recargar la página
            })
            .catch(error => {
              console.log(error);
            });
      }
    },
    deleteEvent(id) {
      fetch(`http://localhost:3000/eventos/${id}`, {
        method: 'DELETE',
      })
          .then(() => {
            this.events = this.events.filter(event => event.id !== id);
          })
          .catch(error => {
            console.log(error);
          });
    },
    viewDetail(id){
      const event = this.events.find(event => event.id === id);
      if (event) {
        console.log(`ID: ${event.id}`);
        console.log(`Tipo: ${event.tipo}`);
        console.log(`Nombre: ${event.nombre}`);
        console.log(`Fecha: ${event.fecha}`);
        console.log(`Hora: ${event.hora}`);
        console.log(`Lugar: ${event.lugar}`);
        console.log(`Imagen: ${event.imagen}`);
        console.log(`Organizador: ${event.organizador}`);
        console.log(`Precio Entrada: ${event.precio_entrada}`);
        console.log(`Descripción: ${event.descripcion}`);
      } else {
        console.log(`No se encontró el evento con el id ${id}`);
      }
    },
    editDetail(id) {
      const event = this.events.find(event => event.id === id);
      if (event) {
        const newTipo = window.prompt('Ingrese el nuevo tipo:', event.tipo);
        const newNombre = window.prompt('Ingrese el nuevo nombre:', event.nombre);
        if (newTipo !== null && newNombre !== null) {
          fetch(`http://localhost:3000/eventos/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...event,
              tipo: newTipo,
              nombre: newNombre,
            }),
          })
              .then(response => response.json())
              .then(updatedEvent => {
                const index = this.events.findIndex(event => event.id === id);
                this.$set(this.events, index, updatedEvent);
                location.reload(); // Recargar la página
              })
              .catch(error => {
                console.log(error);
              });
        }
      } else {
        console.log(`No se encontró el evento con el id ${id}`);
      }
    },
  }
}
</script>

<template>

  <div class="container">
    <div class="destination__container">
      <Button label="Crear Evento" class="w-full" @click="createEvent"></Button>
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
              <Button label="Ver detalles" severity="secondary" outlined class="w-full" @click="viewDetail(event.id)"></Button>
              <Button label="Eliminar" severity="secondary" outlined class="w-full" @click="deleteEvent(event.id)"></Button>
              <Button label="Editar" severity="secondary" outlined class="w-full" @click="editDetail(event.id)"></Button>
            </div>
          </template>

        </Card>
      </div>
    </div>
  </div>

</template>



<style scoped>

.container {
  max-width: var(--max-width);
  min-height: 100vh;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.card-margin {
  margin: 1rem;
}
img{
  width: 100%;
  height: 320px;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

.btn_crearevento {
  margin-top: 10px;
}


.card-container {
  display: flex;
  justify-content: space-between;
}

.calendar {
  flex: 1;
  /* Añade cualquier estilo adicional para el calendario aquí */
}

.form {
  flex: 1;
  /* Añade cualquier estilo adicional para el formulario aquí */
}

.container {
  max-width: var(--max-width);
  min-height: 100vh;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav__logo img {
  max-width: 70px;
}

.nav__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.link a {
  text-decoration: none;
  font-weight: 600;
  color: var(--white);
}

.search {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--white);
  border-radius: 2rem;
  transition: 0.3s;
}

.search input {
  width: 100%;
  font-size: 1rem;
  color: var(--primary-color);
  outline: none;
  border: none;
}

.search input::placeholder {
  color: var(--secondary-color);
}

.search span {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.login {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
}

.login:hover {
  background-color: var(--secondary-color);
}

.login span {
  padding: 5px 8px;
  font-size: 1.5rem;
  color: var(--primary-color);
  background-color: var(--white);
  border-radius: 100%;
}

.destination__container {
  position: relative;
  padding: 5rem 0 5rem 5rem;
  flex: 1;
  display: grid;
  gap: 2rem;
}

.bg__img__1 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-100%);
  opacity: 0.6;
  z-index: -1;
}

.bg__img__2 {
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(100%);
  opacity: 0.8;
  z-index: -1;
}

.socials {
  position: absolute;
  top: 25rem;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.socials::after {
  position: absolute;
  content: "";
  top: -22rem;
  left: 15px;
  height: 15rem;
  width: 2px;
  background-color: var(--white);
}

.socials span {
  font-size: 2rem;
  color: var(--white);
}

.eventos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px;
}

.event-card {
  flex: 1 0 21%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  height: 450px;
  margin-right: 20px;
}

.event-card:last-child {
  margin-right: 0;
}

.event-card img {
  width: 100%;
  height: 320px;
  border-bottom: 2px solid #f0f0f0;
}

.event-info {
  padding: 20px;
}

.event-info h3 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.2em;
}

.event-info p {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}

.event {
  text-align: center;
  max-width: 100%;
  margin: 20px auto;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #fff;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 900px) {
  .container {
    padding: 0.5rem;
  }

  .nav__links {
    flex-direction: column;
    gap: 1rem;
  }

  .search {
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .login {
    margin-bottom: 1rem;
  }

  .destination__container {
    padding: 2rem 0;
  }

  .eventos-container {
    flex-direction: column;
    align-items: center;
  }

  .event-card {
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .event-card {
    width: 100%;
  }
}

</style>
