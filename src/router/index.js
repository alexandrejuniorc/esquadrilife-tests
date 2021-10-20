import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Constructions from "../views/Constructions.vue";
import Products from "../views/Products.vue";
import Construction from "../views/Construction.vue";
import Product from "../views/Product.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contact,
    props: true,
  },
  {
    path: "/obras",
    name: "obras",
    component: Constructions,
    props: true,
  },
  {
    path: "/produtos",
    name: "produtos",
    component: Products,
    props: true,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: About,
    props: true,
  },
  {
    path: "/obras/:obra",
    name: "obra",
    component: Construction,
    props: true,
  },
  {
    path: "/produtos/:produto",
    name: "produto",
    component: Product,
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
