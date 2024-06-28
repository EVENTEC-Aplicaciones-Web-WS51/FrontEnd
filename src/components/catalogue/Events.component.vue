<script>
import { TheProductBackendService } from '@/services/the-product-backend.service.js'
export default {
  name: 'ProductCatalog',
  data() {
    return {
      products: [],
      isLoggedIn: false
    }
  },
  async created() {
    //const service = new ProductCatalogService();
    const service = new TheProductBackendService();
    this.products = await service.getAll();
    this.checkLoginStatus();
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push(`/product_detail/${productId}`);
    },
    goToCheckout(productId) {
      // Guarda el productId en el localStorage
      localStorage.setItem('selectedProductId', productId);
      this.$router.push(`/checkout`);
    },
    async deleteProduct(productId) {
      const service = new TheProductBackendService();
      await service.deleteProduct(productId);
      // Actualiza la lista de productos después de eliminar uno
      this.products = await service.getAll();
    },
    checkLoginStatus() {
      const token = localStorage.getItem('userToken');
      if (token) {
        this.isLoggedIn = true;
      }
    }
  }
}
</script>

<template>
  <div>Consumo de Eventos</div>
  <div class="flex flex-wrap">
    <Card class="w-1/4 p-2 card-margin product" style="width: 22rem; overflow: hidden;" v-for="product in products" :key="product.id">
      <template #header>
        <img :src="product.imagen" :alt="product.nombre"/>
      </template>
      <div>
        <img class="product-image" :src="product.imagen" :alt="product.nombre">
        <div class="product-info">
          <p class="product-name" @click="goToProductDetail(product.id)">S/.{{ product.product }} {{ product.precio }}</p>
          <h2 class="product-name">{{ product.nombre }}</h2>
          <button class="product-name" @click="goToCheckout(product.id)">Comprar</button>
          <button class="product-name" v-if="isLoggedIn" @click="deleteProduct(product.id)">Eliminar</button>
        </div>
      </div>
    </Card>
    <Card class="w-1/4 p-2 card-margin product" style="width: 22rem; overflow: hidden;" v-for="product in products" :key="product.id">


    </Card>

  </div>

</template>


<style scoped>
.product {
  display: flex;
  position: relative;
  margin-bottom: 20px;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 20px;
  margin-left: 60px;
  margin-bottom:20px;
  border: 1px solid #000;
}

.product-info {
  margin-left: 50px;
}

.product-name {
  font-weight: bold;
}

p {
  color: red; /* Cambia el color del texto a rojo */
}

.product-price {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  cursor: pointer;
  color: red; /* Cambia el color del texto a rojo */
  text-align: center; /* Centra el texto */
  allign-items:center;
  font-size: small;
}
</style>
