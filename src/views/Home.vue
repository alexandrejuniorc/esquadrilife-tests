<template>
  <div>
    <TheIntroduction
      h1Content="Esquadrias Especiais"
      blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
      citeContent="William Morris"
      :imgUrl="require('@/assets/constructions/intro.png')"
    ></TheIntroduction>
    <section class="construction">
      <TheConstruction
        :imgUrl="require('@/assets/constructions/banner01.png')"
        title="Obra Morumbi"
        description="Linha utilizada: Dinaflex"
        constructionUrl="/obras/1"
      ></TheConstruction>
      <TheConstruction
        :imgUrl="require('@/assets/constructions/banner02.png')"
        title="Obra Jardim Europa"
        description="Linha utilizada: Euroconcept"
        constructionUrl="/obras/2"
      ></TheConstruction>
      <TheConstruction
        :imgUrl="require('@/assets/constructions/banner03.png')"
        title="Obra Pinheiros"
        description="Linha utilizada: Wallglass"
        constructionUrl="/obras/3"
      ></TheConstruction>
    </section>
    <section class="portfolio">
      <TheGallery
        :imgUrl1="require('@/assets/constructions/gallery/1.png')"
        :imgUrl2="require('@/assets/constructions/gallery/2.png')"
        :imgUrl3="require('@/assets/constructions/gallery/3.png')"
        :alt1="Copacabana"
        :alt2="Europa"
        :alt3="Residencial"
      ></TheGallery>
    </section>
  </div>
</template>
<script>
import TheIntroduction from "@/components/TheIntroduction.vue";
import TheConstruction from "@/components/TheConstruction.vue";
import TheGallery from "@/components/TheGallery.vue";

export default {
  name: "home",
  components: {
    TheIntroduction,
    TheConstruction,
    TheGallery,
  },
};
</script>
<style>
/* Construction section */

.construction {
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
}
</style>
