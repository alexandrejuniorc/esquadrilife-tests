<template>
    <section class="container contato-mapa">
    <a href="http://google.com" target="_blank" class="grid-16"><img :src="imgUrl" alt="Endereço da Squadrilife"></a>
  </section>
</template>
<script>
export default {
    name: "TheMapImg",
    props: ["imgUrl"],
}
</script>
<style>
.contato-mapa {
  margin-bottom: 60px;
}
</style>