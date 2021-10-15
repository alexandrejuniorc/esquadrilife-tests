<template>
    <TheIntroduction/>
    <section class="obras">
        <TheConstruction/>
    </section>
</template>
<script>
import TheIntroduction from '@/components/TheIntroduction.vue';
import TheConstruction from "@/components/TheConstruction.vue";
import ThePortfolio from "@/components/ThePortfolio.vue";

export default {
    name:"Home",
    components: {
        TheConstruction,
        TheIntroduction,
        ThePortfolio
    }
}
</script>
<style>

</style>