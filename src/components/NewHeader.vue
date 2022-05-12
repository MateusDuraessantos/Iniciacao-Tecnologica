<template>
  <div>
    <header>
      <div class="container-header">
        <div class="colum-1">
          <div class="container-universidade">
            <p class="universidade-1">Universdade Presbiteriana</p>
            <p class="universidade">Mackenzie</p>
          </div>

          <div class="hr"></div>

          <p class="campus">Universidade - Campus Higienópolis</p>
        </div>
        <div class="colum-2">
          <img class="icons" src="../assets/icons/icons.png" />
          <p>INTERNATIONAL AFFAIRS</p>
          <img class="lupa" src="../assets/icons/search.svg" />
        </div>
      </div>
    </header>
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

.container-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 50px);
  max-width: 1400px;
  height: 70px;
}

.colum-1 {
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
