<template>
  <div>
    <ListaBraba :ferramentas="ferramentas"/>
    <main>
      <div class="lab-title">
        {{ conteudos.pageName }}
      </div>
      <p class="sp-school">
        São Paulo School of Advanced Science on social and affective
        Neuroscience (SPSAN)
      </p>

      <div class="container-grid">
        <!--  -->
        <div>
          <div class="container-labs">
            <p>Lorem Ipsum is simply dummy text of the printing (SCN LAB)</p>
            <p class="text-about-course">
              {{ conteudos.apresentacao }}
            </p>

            <video class="videos" :src="conteudos.video" controls></video>
          </div>

          <FerramentasLabs />

          <div
            style="
              margin: 40px 0;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <h3>Equipamentos manuais disponíveis</h3>

            <div
              style="
                width: 50px;
                height: 8px;
                transform: translatey(1px);
                background-color: black;
              "
            ></div>
          </div>

          <div class="container-labs">
            <p class="horario-de-funcionamento">Horário de funcionamento</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/martelo-1.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Martelo</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/chave-philips.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Chave Philips</p>
                  <p class="text-1">Unidades</p>
                  <p>2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/cola-1.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Cola</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/pregos.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Pregos</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/alicate-1.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Alicate</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/regua-de-metal-aco-inox.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Regua de metal Aço inox</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna 2 -->

        <div>
          <aside class="container-aside">
            <div class="cont-container-aside">
              <p class="sobre">Sobre o laboratório</p>
              <b class="bold-sobre">Modalidade:</b>
            </div>
            <div class="cont-container-aside">
              <p class="light">Presencial</p>
              <b class="bold-sobre">Horário de funcionamento:</b>
            </div>
            <p class="light">13h às 16h</p>
            <b class="bold-sobre">Local:</b>
            <p class="light" style="color: #0054a8">
              Campus Higienópolis - <b>Prédio 9</b>
            </p>

            <hr />

            <div class="prof">
              <img
                class="img-prof"
                src="../assets/img/ivo.jpg"
                alt="Ivo Pons"
              />
              <div>
                Prof. Dr. Nieri Araujo
                <p>Coordenador dos laboratórios FAUD</p>
              </div>
            </div>
            <div class="container-contato">
              <p class="contato">Contato</p>
              <div class="info-contato">
                <img src="../assets/icons/phone.svg" />
                <p>+55 (11) 2114-8707</p>
              </div>
              <div class="info-contato">
                <img src="../assets/icons/email.svg" />
                <p>disturbios.pos@mackenzie.br</p>
              </div>
              <div class="info-contato">
                <img src="../assets/icons/clock.svg" />
                <p>Das 8h00 às 13h00 e das 14h30 às 16h00</p>
              </div>
              <div class="info-contato">
                <img src="../assets/icons/pin.svg" />
                <p>
                  Rua da Consolação, 896 - prédio 28, 1° andar - consolação, São
                  Paulo - Sp, Brasil 01302-907
                </p>
              </div>
            </div>
          </aside>
          <aside class="container-aside">
            <p class="sobre">Localização</p>
            <div style="display: inline-block">
              Prédio
              <div
                style="
                  display: inline-flex;
                  margin: 0 0 12px;
                  align-items: center;
                  justify-content: center;
                  background: #bcd631;
                  border-radius: 50%;
                  color: white;
                  width: 25px;
                  height: 25px;
                "
              >
                9
              </div>
              - Arquitetura e Design
            </div>
            <img
              style="width: 100%"
              src="../assets/img/maps.jpg"
              alt="mapa superior Mackenzie"
            />

            <br />
            <br />

            <p>Técnicos responsáveis - Lab</p>

            <br />

            <div class="cont-tec">
              <img class="tec" src="../assets/img/mateus.jpg" />
              <div class="name">
                <p class="nome-1">Mateus Durães dos Santos</p>
                <p class="nome-2">mateusduraes@gmail.com</p>
              </div>
            </div>

            <div class="cont-tec">
              <img class="tec" src="../assets/img/nieri.jpg" />
              <div class="name">
                <p class="nome-1">Prof. Dr. Nieri Araujo</p>
                <p class="nome-2">Nieri@gmail.com</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div class="container-carrossel">
        <div class="container-barra">
          <div class="barra"></div>
          <div class="cont-title-img-lab">
            <div class="vert"></div>
            <p class="title-img-lab">Imagens do laboratório</p>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="img-carrossel d-block w-100"
                src="/img/lab/marcenaria/marcenaria_1.jpg"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-carrossel d-block w-100"
                src="/img/lab/marcenaria/marcenaria_2.jpg"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-carrossel d-block w-100"
                src="/img/lab/marcenaria/marcenaria_3.jpg"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-carrossel d-block w-100"
                src="/img/lab/marcenaria/marcenaria_4.jpg"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
    
  </div>
</template>
<script>
import FerramentasLabs from "./Ferramentas.vue";
import ListaBraba from "./Lista.vue";
export default {
  name: "MainContent",
  components: {
    FerramentasLabs,
    ListaBraba,
  },

  props: {
    conteudos: String,
  },
};
</script>

<style scoped>
main {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);
  max-width: 1400px;
}

.lab-group {
  margin: 10px;
  font-size: 20px;
}

.lab-title {
  background: #00547f;
  color: white;
  font-size: 17px;
  width: max-content;
  max-width: 1400px;
  margin: 25px 0 25px 0;
  padding: 10px 20px;
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
.cont-tec {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.name {
  display: flex;
  flex-direction: column;
}

.nome-1 {
  white-space: nowrap;
  font-weight: 500;
  font-size: 18px;
}
.nome-2 {
  white-space: nowrap;
  font-weight: 300;
  font-size: 16px;
}

.tec {
  border-radius: 50%;
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