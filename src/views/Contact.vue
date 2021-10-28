<template>
    <div>
    <TheIntroduction
      h1Content="Esquadrias Especiais"
      blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
      citeContent="William Morris"
      :imgUrl="require('@/assets/constructions/intro.png')"
    ></TheIntroduction>
        <TheForm />
        <TheMapImg
        :imgUrl="require('@/assets/map.png')"
        >
        </TheMapImg>
    </div>
</template>
<script>
import TheForm from "@/components/TheForm.vue";
import TheMapImg from "@/components/TheMapImg.vue";
import TheIntroduction from "@/components/TheIntroduction.vue";

export default {
    name: "contact",
    components: {
        TheForm,
        TheMapImg,
        TheIntroduction
    }
}
</script>
