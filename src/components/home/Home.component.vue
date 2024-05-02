<script>
export default {
  name: "HomeComponent"
}
</script>

<template>
  <div class="destination__container">
    <img class="bg__img__1" src="@/assets/images/puntos.png" alt="bg" />
    <img class="bg__img__2" src="@/assets/images/flechas.png" alt="bg" />
    <div class="socials">
    </div>
    <div class="content">
      <h1>VIVE <br /><span>LA MEJOR </span>EXPERIENCIA<br /></h1>
      <p>
        Descubre los conciertos, eventos y discotecas que tenemos para ti. Estamos
        aquí para acercarte a las mejores experiencias de entretenimiento.
        Encuentra eventos emocionantes cerca de ti y obtén tus entradas en un abrir
        y cerrar de ojos. ¡Explora, reserva y disfruta fácilmente con nosotros!
      </p>
      <button class="btn" routerLink="/catalogue">COMPRAR ENTRADAS</button>
    </div>
    <div class="destination__grid">
      <div class="destination__card">
        <img src="@/assets/images/discoteca.jpg" alt="discoteca" height="315px"/>
        <div class="card__content">
          <h4>Discotecas</h4>
          <p>
            Las mejores discotecas de Perú, con la mejor música y ambiente.
            Encuentra la discoteca perfecta para ti y tus amigos.
          </p>
          <button class="btn" routerLink="/catalogue">Leer más</button>
        </div>
      </div>
      <div class="destination__card">
        <img src="@/assets/images/concierto.jpg" alt="concierto" width="100%" height="315px"/>
        <div class="card__content">
          <h4>Conciertos</h4>
          <p>
            Tus artistas favoritos en un solo lugar. Encuentra los conciertos
            más esperados y compra tus entradas antes de que se agoten.
          </p>
          <button class="btn" routerLink="/catalogue">Leer más</button>
        </div>
      </div>
      <div class="destination__card">
        <img src="@/assets/images/teatro.jpg" alt="teatro" height="315px" />
        <div class="card__content">
          <h4>Eventos</h4>
          <p>
            Shows de Teatro, Festivales, Eventos Deportivos, Conferencias y más.
            Encuentra los eventos más emocionantes cerca de ti.
          </p>
          <button class="btn" routerLink="/catalogue">Leer más</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destination__container {

  position: relative;
  padding: 5rem;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: center;

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

.content h1 {
  margin-bottom: 1rem;
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--white);
  line-height: 100px;
}

.content h1 span {
  -webkit-text-stroke: 1.5px var(--white);
  -webkit-text-fill-color: transparent;
}

.content p {
  max-width: 350px;
  margin-bottom: 2rem;
  line-height: 1.5rem;
  color: var(--white);
}


.content .btn {
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  background-color: var(--secondary-color);
  cursor: pointer;
}

.destination__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.destination__card {
  height: 100%;
  background-color: var(--white);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.7);
}

.destination__card img {
  width: 100%;
}

.card__content {
  padding: 1rem;
}

.card__content h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.card__content p {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: var(--text-light);
}

.card__content .btn {
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  font-weight: 500;
  color: var(--white);
  background-color: var(--primary-color);
  cursor: pointer;
}

@media (width < 1200px) {
  .search {
    max-width: 235px;
  }

  .destination__container {
    grid-template-columns: 1fr;
  }
}

@media (width < 900px) {
  .nav__links {
    flex-direction: column;
    gap: 1rem;
  }

  .content h1 {
    font-size: 4rem;
  }

  .destination__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width < 600px) {
  .search {
    display: none;
  }

  .destination__container {
    padding-left: 3rem;
  }

  .content h1 {
    font-size: 3rem;
  }

  .destination__grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>