import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from "@/router/link";
// src/main.js

import 'primevue/resources/themes/saga-blue/theme.css';      //theme
import 'primevue/resources/primevue.min.css';                //core css
import 'primeicons/primeicons.css';                          //icons
import 'primeflex/primeflex.css';
import 'remixicon/fonts/remixicon.css'                      //flex layout

const app=createApp(App);

app.use(router, PrimeVue, {ripple: true});
app.mount('#app')
