<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="grid-4">
        <img src="@/assets/logo.svg" alt="Logotipo Esquadrilife" />
      </router-link>
      <nav class="grid-12 header-menu">
        <ul>
          <li><router-link to="/sobre">Sobre</router-link></li>
          <li><router-link to="/obras">Obras</router-link></li>
          <li><router-link to="/produtos">Produtos</router-link></li>
          <li><router-link to="/contato">Contato</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  methods:{
    displayHambuger(){
      console.log("Hamburguer");
    }
  }
};
</script>
<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #a65823;
  padding: 30px 0;
  z-index: 1;
}

.header-menu {
  text-align: right;
}

.header-menu ul li {
  margin-top: 30px;
  display: inline-block;
  margin-left: 20px;
}

.header-menu ul li a {
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0;
}

.header-menu ul li a:hover {
  color: #82f7ff;
}

@media only screen and (max-width: 767px){
  .header{
    position: relative;
    padding-bottom: 0px;
  }
  
  .header img {
    margin: 0 auto 10px auto;
  }

  .header-menu{
    text-align: center;
  }

  .header_menu ul li {
    margin: 5px;
  }

  .header-menu ul li a{
    border: 2px solid #fff;
    width: 140px;
    display: block;
    float: left;
  }

  .header_menu ul li a:hover {
    border-color: #82f7ff;
  }

}
</style>
