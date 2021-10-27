<template>
    <div>
        <TheIntroduction
        h1Content="Obras"
        blockquoteContent='"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"'
        citeContent="William Morris"
        :imgUrl="require('@/assets/constructions/intro.png')"
        ></TheIntroduction>
        <TheInsight
            Construction="Obra Jauaperi"
            Line="Wallglass"
            :imgUrl="require('@/assets/constructions/intro.png')">
        </TheInsight>
        <TheInsight
            Construction="Obra Jauaperi"
            Line="Wallglass"
            :imgUrl="require('@/assets/constructions/intro.png')">
        </TheInsight>
        <TheInsight
            Construction="Obra Jauaperi"
            Line="Wallglass"
            :imgUrl="require('@/assets/constructions/intro.png')">
        </TheInsight>
        <TheInsight
            Construction="Obra Jauaperi"
            Line="Wallglass"
            :imgUrl="require('@/assets/constructions/intro.png')">
        </TheInsight>
    </div>
</template>
<script>
import TheIntroduction from "@/components/TheIntroduction.vue";
import TheInsight from "@/components/TheInsight.vue";

export default {
    name: "construction",
    components: {
        TheIntroduction,
        TheInsight
    }

    
}
</script>

<style>

</style>