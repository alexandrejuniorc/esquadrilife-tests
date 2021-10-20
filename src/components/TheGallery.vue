<template>
  <div class="container">
    <ul class="portfolio-lista">
      <li class="grid-10">
        <img :src="imgUrl1" :alt="altImg1" />
      </li>
      <li class="grid-10>">
        <img :src="imgUrl2" :alt="altImg2" />
      </li>
      <li class="grid-16">
        <img :src="imgUrl3" :alt="altImg3" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TheGallery",
  props: ["imgUrl1", "imgUrl2", "imgUrl3", "altImg1", "altImg2", "altImg3"],
};
</script>
<style>
.portfolio-lista li:last-child {
  margin-top: 20px;
}
.grid-10 {
  margin-right: 20px;
}
</style>
