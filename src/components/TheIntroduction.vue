<template>
  <div>
    <section class="introducao">
      <div class="container">
        <h1>{{ $data.props[0] }}</h1>
        <blockquote class="quote-externo">
          <p>
            {{ $data.props[1] }}
          </p>
          <cite>{{ $data.props[2] }}</cite>
        </blockquote>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "TheIntroduction",
  props: ["h1-content", "blockquote-content", "cite-content", "img_url"],
  data: function() {
    return {
      myProps: this.props,
    };
  },
  computed: {
    style() {
      return {
        "--img-url": this.img_url,
      };
    },
  },
};
</script>
<style>
.introducao {
  width: 100%;
  margin-top: 110px;
  height: 380px;
  background: var(--img-url) no-repeat center;
  background-size: cover;
  padding-top: 120px;
}

.introducao h1 {
  font-size: 48px;
  line-height: 60px;
  color: #82f7ff;
  font-weight: regular;
  text-transform: uppercase;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
}

.quote-externo {
  max-width: 600px;
  margin: 0 auto;
  color: #82f7ff;
  background: rgba(0, 0, 0, 0.2);
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
