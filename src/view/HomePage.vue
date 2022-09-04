<template>
  <div class="container">
    <!--  <div class="banner">
      <h1>Laboratórios Mackenzie</h1>
      <img src="img/mackenzie.jpg" alt="Banner Mackenzie" />
    </div> -->
    <div class="cont-pesquisa">
      <div>
        <input class="pesquisar" type="text" placeholder="Pesquise por..." />
        <button class="btn-pesquise">Pesquisar</button>
      </div>
    </div>
    <div class="card-grid">
      <div v-for="(grid, index) in cardInfos.conteudos" :key="index">
        <div>
          <router-link class="routerLink" :to="grid.toLink">
            <div class="card">
              <div class="container-card">
                <img class="img" :src="grid.imgCard" />
                <div class="hover" />
                <p class="text-card-hover">Visitar</p>
              </div>
              <div class="cont-text">
                <h5>{{ grid.nameLab }}</h5>
                <p>{{ grid.description }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      cardInfos: {
        conteudos: [
          {
            nameLab: "Marcenaria",
            description: "Laboratório de marcenaria",
            imgCard: "/img/lab/marcenaria/marcenaria_4.jpg",
            toLink: "./MarcenariaPage",
          },
          {
            nameLab: "Cerâmica",
            description: "Laboratório de cerâmica",
            imgCard: "/img/lab/ceramica/ceramica_9.jpg",
            toLink: "./CeramicaPage",
          },
          {
            nameLab: "Informática",
            description: "Laboratório de Informatica ",
            imgCard: "/img/lab/informatica/informatica_1.jpg",
            toLink: "./InformaticaPage",
          },
          {
            nameLab: "Joia e Vidro",
            description: "Laboratório de Joia",
            imgCard: "/img/lab/joia/VIDRO_01_tumble.JPG",
            toLink: "./JoiaPage",
          },
          {
            nameLab: "Impressao",
            description: "Laboratório de Impressao",
            imgCard: "/img/lab/impressao/impressao_3.jpg",
            toLink: "./ImpressaoPage",
          },
          {
            nameLab: "Prototipagem",
            description: "Laboratório de Prototipagem",
            imgCard: "/img/lab/prototipagem/prototipagem_8.2.jpg",
            toLink: "./PrototipagemPage",
          },
          {
            nameLab: "Maquetaria",
            description: "Laboratório de Maquetaria",
            imgCard: "/img/lab/maquetaria/image6.jpg",
            toLink: "./MaquetariaPage",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
}

.banner {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100vw;
  left: 0;
  height: 300px;
  background: black;
}

.banner img {
  position: absolute;
  opacity: 0.5;
}

h1 {
  color: white;
  font-size: 30px;
  margin-left: 100px;
  z-index: 1;
}

.cont-pesquisa {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
}

.pesquisar {
  height: 40px;
  margin: 30px 0;
  width: 700px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  color: #cccccc;
}

.btn-pesquise {
  background: #004366;
  color: white;
  border: none;
  height: 40px;
  width: 130px;
  box-sizing: border-box;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.card {
  background: rgb(238, 238, 238);
  width: 100%;
  border: 1px solid #cccccc;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.149);
  cursor: pointer;
}

.container-card {
  position: relative;
  margin: 5px;
  display: flex;
}

.text-card-hover {
  position: absolute;
  margin: auto;
  color: white;
  opacity: 0;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: 300;
  transition: 0.3s;
}

.card:hover .text-card-hover {
  opacity: 1;
  transition: 0.1s;
}

.hover {
  position: absolute;
  background: black;
  transition: 0.3s;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.card:hover .hover {
  transition: 0.1s;
  opacity: 0.4;
}

.img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.cont-text {
  color: black;
  font-size: 16px;
  padding: 10px;
}

.cont-text p {
  color: #5f5f5f;
  font-size: 14px;
}
</style>