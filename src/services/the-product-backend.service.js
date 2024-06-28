// services/the-product-backend.service.js
import axios from 'axios';
import { Order } from '@/shared/models/order.entity.js';

const http = axios.create({
  baseURL: 'https://localhost:44371/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  }
});

export class TheProductBackendService {
  currentOrder = null;

  createOrder(id, productId, productName, orderParameters, price) {
    this.currentOrder = new Order(id, productId, productName, orderParameters, price);
  }

  async getAll() {
    const response = await http.get('products');
    return response.data;
  }

  async getProductDetail(id) {
    try {
      const response = await http.get(`products/${id}`);
      return response.data; // Devuelve los datos del producto
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error; // Manejo de errores según tu necesidad
    }
  }

  async deleteProduct(id) {
    try {
      const response = await http.delete(`products/${id}`);
      return response.data; // Devuelve la respuesta del servidor
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error; // Manejo de errores según tu necesidad
    }
  }
}

