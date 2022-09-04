<template>
  <div>
    <main>
      <div class="pageName">
        <div class="lab-title">
          {{ conteudos.pageName }}
        </div>
      </div>

      <div class="container-grid">
        <!--  -->
        <div>
          <div class="container-labs">
            <p>Sobre o laboratório</p>
            <p class="text-about-course" style="white-space: pre-wrap">
              {{ conteudos.apresentacao }}
            </p>

            <p></p>
            <video
              class="videos"
              :style="conteudos.none"
              :src="conteudos.video"
              controls
            ></video>
            <img class="imgVideo" :src="conteudos.imgVideo" />
            <br />
            <strong>Curiosidades</strong>
            <br />
            <ul style="font-weight: 300">
              <li>
                <strong>Qualquer aluno matriculado</strong> na Universidade
                Presbiteriana Mackenzie tem acesso ao laboratório.
              </li>
              <li>
                Não é necessário nenhum investimento para desfrutar dos
                equipamentos deste laboratório (Salvo materias como: Lixas,
                tintas e etc).
              </li>
              <li>
                Os equipamento devem ser utilizados
                <strong> apenas com a instrução e presença </strong>
                do técnico do laboratório.
              </li>
              <li>
                Qualquer dano físico causado aos equipamentos, é incubencia do
                <strong>responsável</strong> pelo ato de arcar com os custos
                para o reparo.
              </li>
            </ul>
          </div>

          <FerramentasLabs :ferramentas="ferramentas" />
        </div>

        <!-- Coluna 2 -->

        <div>
          <aside class="container-aside">
            <div class="cont-container-aside">
              <p class="sobre">Sobre o laboratório</p>
            </div>
            <div class="cont-container-aside">
              <b class="bold-sobre">Horário de funcionamento:</b>
            </div>
            <p class="light">{{ asideInfos.horarioDeFuncionamento }}</p>
            <hr />

            <p class="sobre">Localização</p>
            <p class="light" style="color: #0054a8">
              {{ asideInfos.campus }} - <b>{{ asideInfos.localizacao }}</b>
            </p>
            <p class="light">{{ asideInfos.end }}</p>
            <br />

            <!--   <img
              style="width: 100%"
              :src="asideInfos.mapa"
              alt="mapa superior Mackenzie"
            /> -->
            <hr />

            <div class="prof">
              <img
                class="img-prof"
                :src="asideInfos.cordenadorPerfil"
                alt="Ivo Pons"
              />
              <div>
                {{ asideInfos.cordenadorNome }}
                <p>Coordenador do laboratório</p>
              </div>
            </div>
            <div class="container-contato">
              <p class="contato">Contato</p>
              <div class="info-contato">
                <img src="../assets/icons/phone.svg" />
                <p>{{ asideInfos.cordenadorContato }}</p>
              </div>
              <div class="info-contato">
                <img src="../assets/icons/email.svg" />
                <p>{{ asideInfos.cordenadorEmail }}</p>
              </div>
            </div>

            <p>Técnicos responsáveis - Lab</p>

            <br />

            <!--  -->

            <div class="container-tecnico">
              <div v-for="(tecnicos, index) in asideInfos.tecnico" :key="index">
                <div style="display: flex; align-items: center; gap: 10px">
                  <!-- Imagem de perfil -->
                  <img class="perfil-tecnico" :src="tecnicos.tecnicoImg" />
                  <!-- Nomes e emails -->
                  <div class="container-tec">
                    <p class="nome">{{ tecnicos.tecnicoName }}</p>
                    <p class="email">{{ tecnicos.tecnicoEmail }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!--  -->
          </aside>
        </div>
      </div>
      <!-- Imagens do laboratório -->
      <div class="container-barra">
        <div class="barra"></div>
        <div class="cont-title-img-lab">
          <div class="vert"></div>
          <p class="title-img-lab">Imagens do laboratório</p>
        </div>
      </div>
      <!--  -->
      <div class="grid-imagens">
        <img
          v-for="(imgGridTeste, index) in conteudos.gridTeste"
          :key="index"
          :src="imgGridTeste.imagensTeste"
        />
      </div>
    </main>
  </div>
</template>
<script>
import FerramentasLabs from "./Ferramentas.vue";
export default {
  name: "MainContent",
  components: {
    FerramentasLabs,
  },
  props: {
    conteudos: String,
    ferramentas: String,
    asideInfos: String,
  },
};
</script>

<style scoped>
main {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);
  max-width: 1200px;
}

.lab-group {
  margin: 10px;
  font-size: 20px;
}

.imgVideo {
  margin-top: 20px;
  max-height: 400px;
  object-fit: cover;
}

.container-barra {
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  max-width: 1150px;
}
.lab-title {
  background: #00547f;
  color: white;
  font-size: 17px;
  width: max-content;
  margin: 25px 0 25px 0;
  padding: 10px 20px;
}

.pageName {
  margin: auto;
  width: 100%;
  max-width: 1150px;
}

/*  */

.sp-school {
  font-size: 17px;
  font-weight: 400;
  color: #00547f;
  width: calc(100% - 50px);
  max-width: 1400px;
  margin: 20px 25px;
}

/* aside */

.container-grid {
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  width: 100%;
  margin: 0 25px;
  max-width: 1400px;
}

.text-about-course {
  font-weight: 300;
  font-size: 16px;
  margin-top: 15px;
}

.container-aside {
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
  padding: 30px;
  width: calc(100% - 60px);
  height: max-content;
  margin-bottom: 20px;
}

.sobre {
  color: #555555;
  font-weight: 700;
  font-size: 20px;
  margin: 0 0 10px 0;
}

.bold-sobre,
.light {
  display: block;
}

.bold-sobre {
  font-size: 18px;
}

.light {
  color: #1a1a1a;
  font-weight: 300;
}

.prof {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
}

.prof p {
  color: #8b8b8b;
  font-weight: 300;
  font-size: 14px;
}

.container-equipamentos {
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
  padding: 30px;
  margin-top: 70px;
}

/* contato */
.contato {
  margin: 10px 0;
  color: #cc141d;
}

.info-contato {
  margin-bottom: 17px;
  margin-left: 10px;
  display: flex;
  font-size: 11px;
  color: #555555;
  align-items: center;
}

.info-contato img {
  width: 15px;
  margin-right: 10px;
}

.grid-imagens {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 100%;
}

.grid-imagens img {
  width: 100%;
  height: 100%;
  min-height: 225px;
  max-height: 300px;

  object-fit: cover;
}

.info-contato p {
  margin: 0;
}

.img-prof {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
  margin-right: 20px;
}

h1 {
  margin: 0 0 15px 0;
}
.container-tecnico {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

.container-tec {
  display: flex;
  flex-direction: column;
}

.nome {
  white-space: nowrap;
  font-weight: 500;
  font-size: 18px;
}
.email {
  font-weight: 300;
  font-size: 16px;
}

.perfil-tecnico {
  border-radius: 50%;
  height: 75px;
  width: 75px;
  object-fit: cover;
}

/* Footer */

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  border: solid #00547f;
  border-width: 4px 0 0 0;
  width: 100%;
  background: #cc141d;
  color: white;
}

.grid-creditos {
  width: 100%;
  font-weight: 300;
}

.container-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  width: calc(100% - 50px);
  margin: 100px 25px;
  max-width: 1400px;
}

.creditos {
  font-size: 14px;
}

.creditos p {
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 14px;
}

.container-mensagem {
  width: 100%;
  background: #555555;
}

.mensagem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 40px;
  width: calc(100% - 50px);
  margin: 0 50px;
  max-width: 1400px;
  font-size: 14px;
  color: white;
}

.mensagem p {
  margin: 0;
}
.img-carrossel {
  height: 35vw;
  width: 100%;
  object-fit: cover;
}

.container-carrossel {
  margin: auto;
  width: calc(100% - 50px);
}

.cont-title-img-lab {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 50px 0;
}

.vert {
  background: #7a1f7f;
  width: 5px;
  height: 30px;
}
</style>