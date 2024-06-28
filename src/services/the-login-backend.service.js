import axios from 'axios';

const http = axios.create();

class TheLoginBackendService {

  async login(correo, contraseña) {
    try {
      const response = await http.post('https://localhost:44371/api/customers/login', {
        correo,
        contraseña
      });

      // Guardar el token en localStorage
      localStorage.setItem('userToken', response.data.token);

      console.log(response.data); // Imprime la respuesta en la consola
      return response.data;
    } catch (error) {
      console.error('Error al hacer login', error);
      throw error;
    }
  }
}

export default new TheLoginBackendService();

