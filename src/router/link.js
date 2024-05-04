import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/home/Home.component.vue'
import CatalogueComponent from "@/components/catalogue/Catalogue.component.vue";
import AboutComponent from "@/components/about/About.component.vue";
import ContactComponent from "@/components/contact/Contact.component.vue";
import LoginComponent from "@/components/login/Login.component.vue";
import EventCalendarComponent from "@/components/calendar/EventCalendar.component.vue";
import AddDetailsComponent from "@/components/add-details/AddDetails.component.vue";



const routes = [
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: '/catalogue', component: CatalogueComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/event-calendar', component: EventCalendarComponent },
    { path: '/add-details', component: AddDetailsComponent },

    { path: '/login', component: LoginComponent },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

/*
* Dependencias:
* npm i json-server faker lodash
* */
