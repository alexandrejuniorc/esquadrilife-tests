<template>
  <section
    class="obra"
    :style="{ 'background-image': 'url(' + imgUrl + ')' }"
  >
    <div class="obras-item">
        <h2>{{ Construction }}</h2>
        <p>{{ Line }}</p>
        <a href="#">Ver Obra</a>
      </div>
  </section>
</template>
<script>
export default {
  name: "TheIntroduction",
  props: ["Construction", "Line", "imgUrl"],
};
</script>
<style>
/* Obras */
.obra {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 380px;
  padding-top: 120px;
}

.obras-item {
  clear: both;
  text-align: center;
  max-width: 460px;
  height: 200px;
  margin: 0 auto;
  color: #a65823;
  background: rgba(255, 255, 255, 0.6);
}

.obras-item p {
  text-transform: uppercase;
  text-align: center;
  clear: both;
  margin: 40px auto;
}

.obras-item::after,
.obras-item::before {
  display: table;
  content: "";
  clear: both;
}

.obras-item > div {
  width: 460px;
  float: left;
  display: block;
  margin: 0 10px;
}

.obras-item h2 {
  text-transform: uppercase;
  font-size: 2.25em;
  margin-bottom: 20px;
  color: #a65823;
}

.obras-item p {
  font-size: 1.125em;
  line-height: 1.4em;
  max-width: 320px;
  margin-bottom: 40px;
}

.obras-item a {
  font-size: 1.125em;
  text-transform: uppercase;
  text-decoration: none;
  border: 3px solid;
  color: #a65823;
  padding: 10px 20px;
}

.obras-item a:hover {
  color: #82f7ff;
}
</style>
