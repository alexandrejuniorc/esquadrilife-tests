<template>
  <div class="construction-item">
    <img :src="imgUrl" alt="Obra 1" />
    <div class="text">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <a :href="constructionUrl">Ver Obra</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheConstruction",
  props: ["imgUrl", "title", "description", "constructionUrl"],
};
</script>
<style>

@media only screen and (min-width: 768px) and (max-width: 979px){
  .construction-item{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .text{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

}

@media only screen and (max-width: 767px){
  .construction-item{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .text{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

.construction-item {
  
  clear: both;
  margin: 20px auto;
}

.construction-item::after,
.construction-item::before {
  display: table;
  content: "";
  clear: both;
}

.construction-item img {
  width: 460px;
  float: left;
  display: block;
  margin: 0 10px;
}

.construction-item > div {
  width: 460px;
  float: left;
  margin: 0 10px;
}

.construction-item h2 {
  font-size: 2.25em;
  margin-bottom: 20px;
  color: #a65823;
}

.construction-item > p {
  font-size: 1.125em;
  line-height: 1.4em;
  max-width: 320px;
  margin-bottom: 40px;
}

.construction-item a {
  font-size: 1.125em;
  text-transform: uppercase;
  text-decoration: none;
  border: 3px solid;
  color: #a65823;
  padding: 10px 20px;
}

.construction-item a:hover {
  color: #82f7ff;
}
</style>
