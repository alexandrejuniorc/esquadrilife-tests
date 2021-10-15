import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contato from "../views/Contato.vue";
import Obras from "../views/Obras.vue";
import Produtos from "../views/Produtos.vue";
import Obra from "../views/Obra.vue";
import Produto from "../views/Produto.vue";
import Sobre from "../views/Sobre.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
    props: true,
  },
  {
    path: "/obras",
    name: "obras",
    component: Obras,
    props: true,
  },
  {
    path: "/produtos",
    name: "produtos",
    component: Produtos,
    props: true,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
    props: true,
  },
  {
    path: "/obras/:obra",
    name: "obra",
    component: Obra,
    props: true,
  },
  {
    path: "/produtos/:produto",
    name: "produto",
    component: Produto,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
