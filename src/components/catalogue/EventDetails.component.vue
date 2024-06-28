<script>

import { TheProductBackendService } from '@/services/the-product-backend.service.js'
export default {
  name: 'EventDetails',

  components: {

  },
  data() {
    return {
      product: null
    };
  },
  methods: {
    async getProductDetail(id) {
      const service = new TheProductBackendService();
      //const service = new ProductCatalogService();
      this.product = await service.getProductDetail(id);
    },
    goToBuyProduct(productId) {
      this.$router.push(`/buyProducts/${productId}`);
    }
  },
  created() {
    this.getProductDetail(this.$route.params.id);
  }
}
</script>

<template>
  <div class="product-detail">
    <AppToolbar />
    <SearchBar />

    <div class="product-detail-content">
      <div class="additional-images">
        <div v-for="(image, index) in product.imagenesDetalle" :key="index">
          <img v-if="image.imagenUrl" :src="image.imagenUrl" :alt="'Imagen adicional ' + (index + 1)" class="additional-image">
        </div>

      </div>
    </div>
  </div>
  <TheFooter class="footer" />
</template>

<style scoped>
.product-image{
  width: 50%;
  height: 90%;
  margin-left: 20%;
}
.product-detail-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.product-image-section {
  width: 50%;
}

.product-info {
  width: 45%;

}

.author-info {
  display: flex;
  align-items: center;
}

.author-name {
  margin-right: 10px;
}

.author-details {
  display: flex;
  align-items: center;
}

.author-image {
  width: 50px;
  margin-right: 10px;
}
.additional-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-left:50px;
}

.additional-image {
  width: 100px;
  height: 120px;
  border: 1px solid #000;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.product-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;

}
.product-detail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {

}

.buy-button {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border:black 1px solid;
  cursor: pointer;
  color: white;
  background-color: #116BC7;
}

.customize-button {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border:black 1px solid;
  cursor: pointer;
  color: white;
  background-color: #116BC7;
}

</style>
