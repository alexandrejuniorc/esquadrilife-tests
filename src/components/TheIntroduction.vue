<template>
  <section
    class="introducao"
    :style="{ 'background-image': 'url(' + imgUrl + ')' }"
  >
    <div class="container opac">
      <h1>{{ h1Content }}</h1>
      <blockquote class="quote-externo">
        <p>
          {{ blockquoteContent }}
        </p>
        <cite>{{ citeContent }}</cite>
      </blockquote>
    </div>
  </section>
</template>
<script>
export default {
  name: "TheIntroduction",
  props: ["h1Content", "blockquoteContent", "citeContent", "imgUrl"],
};
</script>
<style>
.introducao {
  width: 100%;
  margin-top: 110px;
  height: 380px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 120px;
}

.opac {

  background: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 767px){
  .opac{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .quote-externo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

}

.introducao h1 {
  font-size: 48px;
  line-height: 60px;
  color: #82f7ff;
  font-weight: regular;
  text-transform: uppercase;
  text-align: center;
}

.quote-externo {
  max-width: 600px;
  margin: 0 auto;
  color: #82f7ff;
}

.quote-externo p {
  font-style: italic;
}

.quote-externo cite {
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-left: 200px;
  color: #82f7ff;
}

@media only screen and (max-width: 767px){
  .quote-externo cite{
    padding-left: 0 !important;
  }

  .introducao {
	margin-top: 0px;
	padding-top: 20px;
	background-size: cover;
}
}

.quote-externo p:before,
p:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  color: #82f7ff;
  margin: 10px auto 10px auto;
}
</style>
