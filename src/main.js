import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from "@/router/link";
import store from './store';

import 'primevue/resources/themes/saga-blue/theme.css';      //theme
import 'primevue/resources/primevue.min.css';                //core css
import 'primeicons/primeicons.css';                          //icons
import 'primeflex/primeflex.css';
import 'remixicon/fonts/remixicon.css'                      //flex layout

const app=createApp(App);

app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(store); // Asegúrate de usar el store en tu aplicación

app.mount('#app');