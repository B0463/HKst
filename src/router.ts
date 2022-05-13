import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home.vue"
import ContatoPage from './pages/contato.vue';
import ProjetosPage from './pages/projetos.vue';
import CurriculoPage from './pages/curriculo.vue';
import UtilitariosPage from './pages/utilitarios.vue';

const routes = [
    { path: "/", component: HomePage },
    { path: "/contato", component: ContatoPage },
    { path: "/projetos", component: ProjetosPage },
    { path: "/curriculo", component: CurriculoPage },
    { path: "/utilitarios", component: UtilitariosPage }
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
});