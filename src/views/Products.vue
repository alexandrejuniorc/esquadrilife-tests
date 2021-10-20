<template>
  <div>
    <TheIntroduction
      h1Content="Produtos"
      blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
      citeContent="William Morris"
      :imgUrl="require('@/assets/construction/products/intro.png')"
    ></TheIntroduction>
    <section class="product">
      <TheConstruction
        :imgUrl="require('@/assets/constructions/banner01.png')"
        title="WALLGLASS"
        description="linha minimalista"
        constructionUrl="/obras/1"
      ></TheConstruction>
      <TheConstruction
        :imgUrl="require('@/assets/constructions/banner02.png')"
        title="EUROCONCEPT"
        description="Linha minimalista"
        constructionUrl="/obras/2"
      ></TheConstruction>
      <TheConstruction
        :imgUrl="require('@/assets/constructions/banner03.png')"
        title="DINAFLEX"
        description="linha minimalista"
        constructionUrl="/obras/3"
      ></TheConstruction>
    </section>
  </div>
</template>
<script>
import TheIntroduction from "@/components/TheIntroduction.vue";
import TheConstruction from "@/components/TheConstruction.vue";

export default {
  name: "product",
  components: {
    TheIntroduction,
    TheConstruction,
  },
};
</script>
<style>
/* Obras */

.product {
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
}

.obras-item {
  clear: both;
  margin: 20px auto;
}

.obras-item::after,
.obras-item::before {
  display: table;
  content: "";
  clear: both;
}

.obras-item img {
  width: 460px;
  float: left;
  display: block;
  margin: 0 10px;
}

.obras-item > div {
  width: 460px;
  float: left;
  display: block;
  margin: 0 10px;
}

.obras-item h2 {
  font-size: 2.25em;
  margin-bottom: 20px;
  color: #a65823;
}

.obras-item p {
  font-size: 1.125em;
  line-height: 1.4em;
  max-width: 320px;
  margin-bottom: 40px;
}

.obras-item a {
  font-size: 1.125em;
  text-transform: uppercase;
  text-decoration: none;
  border: 3px solid;
  color: #a65823;
  padding: 10px 20px;
}

.obras-item a:hover {
  color: #82f7ff;
}
</style>
