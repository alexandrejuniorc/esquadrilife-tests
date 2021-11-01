<template>
    <div>
        <TheIntroduction
        h1Content="Sobre"
        blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
        citeContent="William Morris"
        :imgUrl="require('@/assets/constructions/intro.png')"
        ></TheIntroduction>
        <TheText subtitle="O que é Lorem Ipsum?" text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker." internalSubtitle="História"></TheText>
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
import TheIntroduction from "@/components/TheIntroduction.vue"
import TheText from "@/components/TheText.vue"
import TheGallery from "@/components/TheGallery.vue"
export default {
    name: "about",
    components: {
        TheIntroduction,
        TheText,
        TheGallery
    }
}
</script>
<style>

.construction {
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
}
</style>