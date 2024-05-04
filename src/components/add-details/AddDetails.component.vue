<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
export default {
  name: "AddDetailsComponent.vu",
  setup(){
    const router = useRouter();
    const details = ref({
      descripcion:'',
      imagen:'',
      alert_time:''
    });
    const imageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        details.value.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const submitDetails = () => {
      axios.post('http://localhost:3001/', details.value)
          .then(response => {
            console.log('Detalles del evento creado:', response.data);
            router.push('/publication');
          })
          .catch(error => {
            console.error('Error al crear los detalles:', error);
          });
    };
    return {
      details,
      imageUpload,
      submitDetails,
    };
  }
}
</script>

<template>
  <div class="title">
    <h1>Detalles del Evento</h1>
  </div>
  <div class="rectangle-container">
    <div class="rectangle-1">
      <p class="rectangle-text">Basic Information</p>
    </div>
    <div class="rectangle-2">
      <p class="rectangle-text">Additional Information</p>
    </div>
    <div class="rectangle-3">
      <p class="rectangle-text">Confirmed Information</p>
    </div>
  </div>
  <div class="form-container">
    <form @submit.prevent="submitDetails" class="details-form">
      <div class="form-group form-column">
        <label for="description" class="text-detalles">Descripcion del Evento</label>
        <textarea class="text-area" id="description" v-model="details.descripcion" required></textarea>

        <label for="image-upload" class="text-detalles">Subir Archivo</label>
        <input type="file" id="image" @change="imageUpload" required>

        <label for="alert-time" class="text-detalles">Establecer Recordatorio</label>
        <select id="alert-time" v-model="details.alert_time" required>
          <option value="">Seleccione una hora</option>
          <option value="2024-05-10T09:00:00">9:00 AM - 2 de Mayo del 2024</option>
          <option value="2024-05-10T12:00:00">12:00 PM - 8 de Enero del 2024</option>
          <option value="2024-05-10T18:00:00">6:00 PM - 20 de Febrero del 2024</option>
        </select>

        <div class="button-container">
          <router-link to="/" style="text-decoration: none">
            <pv-button class="cancel-button">Volver</pv-button>
          </router-link>

          <router-link to="/confirmation" style="text-decoration: none">
            <pv-button type="submit" class="save-button">Finalizar</pv-button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

.title{
  text-align: center;
}
.form-container {
  display: flex;
  justify-content: center;
  padding: 50px;
  margin: 0 auto;
}

.details-form {
  display: grid;
  column-gap: 20px;
  border-radius: 20px;
  background-color: #f9f9f9;
  padding: 20px;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
input[type="text"],
input[type="number"],
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
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

.rectangle-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.rectangle-1 {
  width: 150px;
  height: 50px;
  background-color: #007bff;
  margin: 0 10px;
  border-radius: 30px;
}
.rectangle-2 {
  width: 150px;
  height: 50px;
  background-color: #002752;
  margin: 0 10px;
  border-radius: 30px;
}
.rectangle-3 {
  width: 150px;
  height: 50px;
  background-color: #007bff;
  margin: 0 10px;
  border-radius: 30px;
}

.rectangle-text {
  color: white;
  text-align: center;
  font-size: 12.5px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .rectangle-text {
    font-size: 12.5px;
    font-weight: bold;
  }
}
.text-area{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 638px;
  height: 102px;
}
@media (max-width: 768px) {
  .text-area{
    width: 100%;
    height: 150px;
  }
}
</style>