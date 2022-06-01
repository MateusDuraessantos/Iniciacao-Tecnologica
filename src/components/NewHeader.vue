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
      <div class="labs">
        <a href="">Marcenaria</a>
      </div>

      <div class="labs">
        <a href="">Joias e Vidro</a>
      </div>
      
      <div class="labs">
        <a href="">Impressora a Lazer e 3D</a>
      </div>

      <div class="labs">
        <a href="">Informática</a>
      </div>
      
      <div class="labs">
        <a href="">Cerâmica</a>
      </div>
      
      <div class="labs">
        <a href="">Ceramica</a>
      </div>
      
      <div class="labs">
        <a href="">Ceramica</a>
      </div>
    </nav>
    <div class="container-banner">
      <!-- 1° coluna -->
      <div class="banner">
        <div>
          <h1>Laboratório de Marcenaria</h1>
          <p>
            <strong>Centro de Marcenara e construção civil</strong> |
            <em class="campus-higienopolis"> Campus Higienópolis</em>
          </p>
        </div>
        <div></div>
      </div>
    </div>
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

.labs{
  display: flex;
  align-items: center;
  border: solid #CB616C;
  border-width: 0 1px 0 0;
  height: 100%;
  width: max-content;
  transition: .2s;
}

.labs:hover{
  background: #8C0816;
  transition: .2s;
  color: white;
}
.labs a{
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

/* Banner */

.container-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 370px;
  width: 100%;
  background-image: url("../assets/img/fleur-dQf7RZhMOJU-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner {
  width: calc(100% - 50px);
  max-width: 1400px;
  color: white;
}

.campus-higienopolis {
  font-weight: 200;
}
</style>
