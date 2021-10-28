<template>
     <section class="contato container">
    <form id="form-contato" class="contato-form grid-8">
      <label for="nome">Nome</label>
      <input type="text" id="nome">
      <label for="email">E-mail</label>
      <input type="text" id="email">
      <label for="telefone">Telefone</label>
      <input type="text" id="telefone">
      <label for="assunto">Assunto</label>
      <textarea id="assunto"></textarea>
      <button type="submit" class="btn">Enviar</button>
    </form>
    <div class="contato-dados grid-8">
      <h3>Dados</h3>
      <span>+55 21 1234-4321</span>
      <span>contato@squadrilife.com.br</span>
      <span>Rua ali perto - Botafogo</span>
      <span>Rio de Janeiro - RJ - Brasil</span>
      <h3>Redes Sociais</h3>
      <ul>
        <li>
          <a href="https://facebook.com" target="_blank"><img src="@/assets/social/facebook.png" /></a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank"><img src="@/assets/social/instagram.png" /></a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank"><img src="@/assets/social/twitter.png" /></a>
        </li>
      </ul>

    </div>
  </section>
</template>
<script>
export default {
    name: "TheForm",
};
</script>
<style>
/* Contato */
.contato {
  padding: 40px 0;
}

.contato-form {
  padding-right: 60px;
}

.contato-form label {
  display: block;
  color: #a65823;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 4px;
}

.contato-form input {
  display: block;
  width: 100%;
  border: 4px solid #a65823;
  background: none;
  color: #a65823;
  padding: 7px 10px;
  margin-bottom: 10px;
  outline: none;
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.contato-form textarea {
  display: block;
  width: 100%;
  height: 120px;
  border: 4px solid #a65823;
  background: none;
  color: #a65823;
  padding: 7px 10px;
  margin-bottom: 10px;
  outline: none;
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.contato-form button {
  padding: 7px 40px;
  background: none;
  border: 4px solid #a65823;
  color: #a65823;
}

.contato-form button:hover {
  padding: 7px 40px;
  background: none;
  border: 4px solid #7dc6cb;
  color: #7dc6cb;
}
.contato-dados h3 {
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: #a65823;
  font-weight: bold;
}

.contato-dados span {
  display: block;
  font-size: 18px;
  line-height: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.contato-dados span:nth-of-type(even) {
  margin-bottom: 30px;
}

.contato-dados ul li {
  display: inline-block;
  margin-right: 10px;
}

.contato-dados ul {
  margin-top: 10px;
}

.contato-dados ul li a {
  border: 3px solid #a65823;
  display: block;
  padding: 6px;
}

.contato-dados ul li a:hover {
  border-color: #7dc6cb;
}

.contato-dados ul li {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 14px;
  padding: 10px 15px;
}
</style>