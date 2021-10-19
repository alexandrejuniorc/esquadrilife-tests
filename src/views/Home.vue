<template>
  <TheIntroduction
    h1Content="Esquadrias Especiais"
    blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
    citeContent="William Morris"
    :imgUrl="require('@/assets/constructions/intro.png')"
  ></TheIntroduction>
</template>
<script>
import TheIntroduction from "@/components/TheIntroduction.vue";

export default {
  name: "home",
  components: {
    TheIntroduction,
  },
};
</script>
<style></style>
