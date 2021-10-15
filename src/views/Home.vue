<template>
  <TheIntroduction
    h1-content="Esquadrias Especiais"
    blockquote-content="Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"
    cite-content="William Morris"
    img_url="@/assets/constructions/intro.png"
  />
</template>
<script>
import TheIntroduction from "@/components/TheIntroduction.vue";

export default {
  name: "Home",
  components: {
    TheIntroduction,
  },
};
</script>
<style></style>
