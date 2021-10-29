<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="grid-8 footer-historia">
          <h3>NOSSA HISTÓRIA</h3>
          <p>Qualidade e beleza em tudo que se vê. Qualidade e beleza em tudo que se vê.</p>
        </div>
        <div class="grid-4 footer-contato">
          <h3>CONTATO</h3>
          <ul>
            <li><a href="tel:1126183874">- (11) 2618-3874</a></li>
            <li>
              <a href="https://goo.gl/maps/KxPdck4rqxkqYoAa6">- Nossa fábrica</a>
            </li>
            <li>
              <a href="mailto: comercial@esquadrilife.com.br">- comercial@esquadrilife.com.br</a>
            </li>
          </ul>
        </div>

        <div class="grid-4 footer-redes">
          <h3>REDES SOCIAIS</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank"
                ><img src="@/assets/social/facebook.png"
              /></a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank"
                ><img src="@/assets/social/instagram.png"
              /></a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank"
                ><img src="@/assets/social/twitter.png"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy">
      <div class="container">
        <p class="grid-8">Esquadrilife 2021 - Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
<style scoped>
/* Footer */

.footer {
  width: 100%;
  background: #f29d63;
  color: #a65823;
  padding: 20px 0;
}

.footer h3 {
  font-size: 18px;
  line-height: 25px;
  color: #a65823;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
}

.footer h3::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #a65823;
  margin: 6px 0 12px 0px;
}

.footer-historia {
  padding-right: 40px;
}

.footer-contato ul li {
  font-size: 14px;
  line-height: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.footer-redes ul li {
  display: inline-block;
  margin-right: 10px;
}

.footer-redes ul li a {
  border: 3px solid #a65823;
  display: block;
  padding: 6px;
}

.footer-redes ul li a:hover {
  border-color: #7dc6cb;
}

.copy {
  width: 100%;
  background: #a65823;
  padding: 20px 0;
  color: #f29d63;
}
</style>
