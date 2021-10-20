<template>
  <div>
    <TheIntroduction
      h1Content="Produtos"
      blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
      citeContent="William Morris"
      :imgUrl="require('@/assets/constructions/products/intro.png')"
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
</style>
