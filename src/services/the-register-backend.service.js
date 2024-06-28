import axios from 'axios';

class TheRegisterBackendService {
  constructor() {
    this.http = axios.create();
    this.loadAuthToken();
  }

  setAuthToken(token) {
    this.http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  loadAuthToken() {
    const token = localStorage.getItem('userToken');
    if (token) {
      this.setAuthToken(token);
    }
  }

  async register(requestBody) {
    try {
      const response = await this.http.post('https://localhost:44371/api/customers/register', requestBody);

      console.log('Respuesta completa del servidor:', response);

      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        this.setAuthToken(response.data.token);
        console.log('Token almacenado en localStorage:', response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      throw error;
    }
  }
}

export default new TheRegisterBackendService();
