<template>
  <div>
    <header>
      <div class="container-header">
        <div class="column-1">
          <div class="container-universidade">
            <p class="universidade-1">Universdade Presbiteriana</p>
            <p class="universidade">Mackenzie</p>
          </div>

          <div class="hr"></div>

          <p class="campus">Universidade - Campus Higienópolis</p>
        </div>
        <div class="column-2">
          <img class="icons" src="../assets/icons/icons.png" />
          <p>INTERNATIONAL AFFAIRS</p>
          <img class="lupa" src="../assets/icons/search.svg" />
        </div>
      </div>
    </header>
    <nav class="nav-cont">
      <!-- Botões -->
      <router-link class="labs first" to="./MarcenariaPage"
        >Marcenaria</router-link
      >
      <router-link class="labs" to="./InformaticaPage">Informatica</router-link>

      <router-link class="labs" to="./InformaticaPage">Cerâmica</router-link>

      <router-link class="labs" to="./ImpressaoPage">Impressão</router-link>

      <router-link class="labs" to="./ConfortoPage">Conforto ambiental</router-link>

      <router-link class="labs" to="./MaquetariaPage">Maquetaria</router-link>

      <router-link class="labs" to="./PrototipagemPage">Prototipagem</router-link>

      <router-link class="labs" to="./VidroaPage">Vidro</router-link>

      <router-link class="labs" to="./CTTPage">CTT</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NewHeader",
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cc141d;
  color: white;
  width: 100%;
}

.nav-cont {
  display: flex;
  background: #b41c2c;
  width: 100%;
  height: 40px;
  padding: 0 100px;
}

.labs {
  display: flex;
  align-items: center;
  border: solid #cb616c;
  border-width: 0 1px 0 0;
  color: white;
  text-decoration: none;
  padding: 0 20px;
  font-weight: 300;
  height: 100%;
  width: max-content;
  transition: 0.2s;
  border: solid #cb616c;
  border-width: 0 1px 0 0;
}

.first {
  border-width: 0 1px 0 1px;
}

.last {
  border-width: 0 1px 0 1px;
}

.labs:hover {
  background: #8c0816;
  transition: 0.2s;
  color: white;
}
.labs a {
  padding: 0 30px;
  color: white;
  font-size: 14px;
  text-decoration: none;
}

.container-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 50px);
  max-width: 1400px;
  height: 70px;
}

.column-1 {
  display: flex;
  align-items: center;
}

.column-2 {
  display: flex;
  align-items: center;
}

.hr {
  width: 1px;
  height: 40px;
  background: white;
  margin: 0 35px;
}

.container-universidade {
  display: flex;
  flex-direction: column;
}

.universidade {
  font-size: 25px;
  line-height: 18px;
}

.universidade-1 {
  font-size: 10px;
}
.icons {
  height: 28px;
}

.lupa {
  width: 18px;
  margin-left: 10px;
}
.grid-creditos {
  width: 100%;
  font-weight: 300;
}
</style>
