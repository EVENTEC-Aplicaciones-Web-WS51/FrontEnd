<template>
  <div class="wrapper">
    <div class="carousel"
         @mousedown="handleMouseDown"
         @mouseleave="handleMouseLeave"
         @mouseup="handleMouseUp"
         @mousemove="handleMouseMove">
      <img src="@/assets/images/tarjetas/alejandro.png" alt="img" draggable="false">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      isDown: false,
      startX: 0,
      scrollLeft: 0
    };
  },
  methods: {
    handleMouseDown(e) {
      this.isDown = true;
      this.startX = e.pageX - e.target.offsetLeft;
      this.scrollLeft = e.target.scrollLeft;
    },
    handleMouseLeave() {
      this.isDown = false;
    },
    handleMouseUp() {
      this.isDown = false;
    },
    handleMouseMove(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - e.target.offsetLeft;
      const walk = (x - this.startX) * 3; //scroll-fast
      e.target.scrollLeft = this.scrollLeft - walk;
    }
  }
};

</script>

<style scoped>
.wrapper {
  margin-top: 100px; /* Ajusta este valor a tus necesidades */
}
.carousel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "card1 card2"
    "card3 card4"
    "card5 card5";
  gap: 20px;
  justify-items: center;
}

.carousel img:nth-child(1) { grid-area: card1; }
.carousel img:nth-child(2) { grid-area: card2; }
.carousel img:nth-child(3) { grid-area: card3; }
.carousel img:nth-child(4) { grid-area: card4; }
.carousel img:nth-child(5) { grid-area: card5; }

.carousel img {
  width: 400px; /* Ajusta este valor a tus necesidades */
  height: 200px; /* Ajusta este valor a tus necesidades */
}
</style>