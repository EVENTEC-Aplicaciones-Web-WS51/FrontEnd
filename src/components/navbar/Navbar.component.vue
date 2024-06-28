<template>
  <div class="container">
    <nav>
      <div class="nav__logo">
        <a>
          <img src="../../assets/images/myevent_logo.png" alt="logo" />
        </a>
      </div>
      <ul class="nav__links">
        <li class="link"><a @click="goToHome">Inicio</a></li>
        <li class="link"><a @click="goToCatalogue">MyEvent</a></li>
        <li class="link"><a @click="goToAbout">Nosotros</a></li>
        <li class="link"><a @click="goToContact">Contactanos</a></li>
      </ul>
      <div class="search">
        <input type="text" placeholder="Buscar"/>
        <span><i class="ri-search-line"></i></span>
      </div>
      <div class="login" v-if="isLoginVisible && !isLoginClicked" @click="goToDifferentPath">
        Login
        <span><i class="ri-user-3-fill"></i></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isLoginVisible: true
    };
  },
  computed: {
    isLoginClicked() {
      return this.$store.state.isLoginClicked;
    }
  },
  methods: {
    toggleLogin() {
      this.isLoginVisible = !this.isLoginVisible;
    },
    goToDifferentPath() {
      this.$router.push('/login');
      this.isLoginVisible = !this.isLoginVisible;
      this.$store.commit('setLoginClicked', true);
    },
    goToHome() { this.$router.push('/home'); },
    goToCatalogue() { this.$router.push('/catalogue'); },
    goToAbout() { this.$router.push('/about'); },
    goToContact() { this.$router.push('/contact'); }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.15);
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
  padding: 0.3rem 0.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 20px;
  font-weight: 600;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.15);
}

.login:hover {
  background-color: var(--secondary-color);
}

.login span {
  padding: 5px 8px;
  font-size: 1.4rem;
  color: var(--primary-color);
  background-color: var(--white);
  border-radius: 100%;
}

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
