<template>
    <section class="missao-sobre container">
    <div class="grid-10">
      <h2 class="subtitulo-interno">{{ subtitle }}</h2>
      <p>{{ text }}</p>
    </div>
    <div>
      <h2 class="subtitulo-interno">{{ internalSubtitle }}</h2>
      <ul>
       <TheValue value="Qualidade no processo com"></TheValue>
       <TheValue value="Qualidade no processo com"></TheValue>
       <TheValue value="Qualidade no processo com"></TheValue>
       <TheValue value="Qualidade no processo com"></TheValue>
      </ul>
    </div>
  </section>
</template>
<script>
import TheValue from "@/components/TheValue.vue"
export default {
    name: "TheText",
    components: {
        TheValue
    },
    props: ["subtitle", "text", "internalSubtitle"]
}
</script>
<style>
.missao-sobre {
  padding-top: 60px;
}
.missao-sobre p {
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 1em;
  padding-right: 60px;
}
.missao-sobre ul li {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  line-height: 30px;
}
.subtitulo-interno {
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>