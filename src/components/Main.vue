<template>
  <div>
    <main>
      <div class="container-barra">
        <div class="barra"></div>
        <p class="lab-group">Laboratórios e Grupos de Pesquisa</p>
      </div>
      <p class="labs">Laboratórios</p>

      <div class="lab-title">
        xxxXLaboratório xxxde Neurociênciaxxx CognitivaXXX e Social
      </div>
      <p class="sp-school">
        São Paulo School of Advanced Science on social and affective
        Neuroscience (SPSAN)
      </p>

      <!--  -->

      <div class="container-grid">
        <!--  -->
        <div>
          <div class="container-labs">
            <p>Lorem Ipsum is simply dummy text of the printing (SCN LAB)</p>
            <p class="text-about-course">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <img
              style="margin-top: 20px; width: 100%"
              src="../assets/img/lab.jpg"
            />
          </div>

          <div
            style="
              margin: 70px 0 70px 0;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <h3>Equipamentos pesados disponíveis</h3>

            <div
              style="
                width: 50px;
                height: 8px;
                transform: translatey(1px);
                background-color: black;
              "
            ></div>
            <hr style="background: #dddddd; height: 1px; width: 100%" />
          </div>

          <div class="container-labs">
            <p class="horario-de-funcionamento">Horário de funcionamento</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/serra-de-corte.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Serra de corte DeWalt</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                  <button
                    class="saiba-mais"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#serradecorte"
                  >
                    Saiba mais
                  </button>
                </div>

                <!-- Modal Saiba mais Serra de corte-->

                <div
                  class="modal fade"
                  id="serradecorte"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Sobre</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td scope="row">Serra de corte DeWalt</td>
                              <td class="infos">
                                Serra corte rápido construção robusta, morsa de
                                aperto rápido, guia de corte angular,
                                compartimento integrado para chave de ajuste e
                                troca do disco, interruptor tipo gatilho com
                                função homem morto e orifício para cadeado.
                                Ideal para trabalhos em serralheiras e
                                departamentos de manutenção em cortes de metais.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Unidades</th>
                              <td>1</td>
                            </tr>
                            <tr>
                              <td scope="row">Rotações por minuto:</td>
                              <td scope="row">4.000RPM</td>
                            </tr>

                            <tr>
                              <td scope="row">Diâmetro do Disco:</td>
                              <td scope="row">14 Pol. (355mm)</td>
                            </tr>

                            <tr>
                              <td scope="row">Espessura Máx.:</td>
                              <td scope="row">Lâmina 2,8mm</td>
                            </tr>

                            <tr>
                              <td scope="row">Esquadria Esquerda:</td>
                              <td scope="row">0-45°</td>
                            </tr>

                            <tr>
                              <td scope="row">Esquadria Direita:</td>
                              <td scope="row">0-45°</td>
                            </tr>

                            <tr>
                              <td scope="row">Capacidade Máx.:</td>
                              <td scope="row">Corte Esquadria 90° Tubo</td>
                            </tr>

                            <tr>
                              <td scope="row">Quadrado:</td>
                              <td scope="row">A = 115mm X L = 115mm</td>
                            </tr>

                            <tr>
                              <td scope="row">
                                Capacidade Máx. Corte Esquadria
                              </td>
                              <td scope="row">
                                90° Tubo Retangular A = 115mm X L = 130mm L =
                                76mm X A = 229mm
                              </td>
                            </tr>

                            <tr>
                              <td scope="row">Capacidade Máx.:</td>
                              <td>
                                Corte Esquadria 90° Cantoneira: 115mm x 137mm
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div class="grid-infos-img">
                          <img
                            class="img-infos"
                            src="../assets/equipamentos/ferramentas/serra-de-corte.jpg"
                          />
                          <img
                            class="img-infos"
                            src="../assets/equipamentos/ferramentas/serra-de-corte-1.jpg"
                          />
                          <img
                            class="img-infos"
                            src="../assets/equipamentos/ferramentas/serra-de-corte-1.jpg"
                          />
                          <img
                            class="img-infos"
                            src="../assets/equipamentos/ferramentas/serra.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/furadeira-de-bancada.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Furadeira de bancada</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/serra-de-bancada.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Serra de bancada</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/cnc-router.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">CNC router</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/tico-tico.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Tico Tico.jpg</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/tupia.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Tupia</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/furadeira.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Furadeira</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/parafusadeira-a-bateria.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Parafusadeira a bateria</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/ferramentas/lixadeira-angular.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Lixadeira angular</p>
                  <p class="text-1">Unidades</p>
                  <p class="text-2">2</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style="
              margin: 70px 0 70px 0;
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
            <hr style="background: #dddddd; height: 1px; width: 100%" />
          </div>

          <div class="container-labs">
            <p class="horario-de-funcionamento">Horário de funcionamento</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/martelo.jpg"
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
                  src="../assets/equipamentos/cola.jpg"
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
                  src="../assets/equipamentos/alicate.jpg"
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

              <!--  -->

              <div class="equipamentos">
                <img
                  class="img-equipamentos"
                  src="../assets/equipamentos/clipes-de-madeira.jpg"
                />
                <div class="cont-ferramentas">
                  <p class="ferramenta">Clipes de madeira</p>
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
            <p class="sobre">Sobre o Curso</p>
            <b class="bold-sobre">Tipo:</b>
            <p class="light">Mestreado e Doutorado - Stricto Sensu</p>
            <b class="bold-sobre">Modalidade:</b>
            <p class="light">Presencial</p>
            <b class="bold-sobre">Duração</b>
            <p class="light">Mestrado: 24 meses, Doutorado: 42 Meses</p>
            <b class="bold-sobre">Período(s) Oferecidos(s):</b>
            <p class="light">Matutino, Vespentino e Noturno</p>
            <b class="bold-sobre">Local:</b>
            <p class="light">Campus Higienópolis</p>

            <hr />

            <div class="prof">
              <img
                class="img-prof"
                src="../assets/img/pompom.jpg"
                alt="Ivo Pons"
              />
              <div>
                Ivo Eduardo Roman Pons
                <P>Professor</P>
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

              <p class="secretaria">Secretária do Coordenador:</p>
              <p class="name">Daniele Aparecida Gomes</p>
              <div class="valor">
                Valor da mensalidade
                <p>R$1.200,00</p>
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
                  margin-left: 5px;
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
          </aside>
        </div>
      </div>

      <div class="container-barra">
        <div class="barra"></div>
        <p class="title-img-lab">Imagens do laboratório</p>
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="img-carrossel d-block w-100"
              src="../assets/img/1.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              class="img-carrossel d-block w-100"
              src="../assets/img/2.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              class="img-carrossel d-block w-100"
              src="../assets/img/3.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              class="img-carrossel d-block w-100"
              src="../assets/img/4.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              class="img-carrossel d-block w-100"
              src="../assets/img/5.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              class="img-carrossel d-block w-100"
              src="../assets/img/6.jpg"
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
    </main>
  </div>
</template>
<script>
export default {
  name: "MainContent",
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

.labs {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 26px;
  color: #555555;
}

.lab-title {
  background: #00547f;
  color: white;
  font-size: 17px;
  width: calc(100% - 50px);
  max-width: 1400px;
  margin: 0 25px;
  padding: 10px;
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

.equipamentos {
  display: flex;
  margin-bottom: 20px;
}

.container-labs {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
  padding: 30px;
  color: #555555;
  height: max-content;
}

.ferramenta {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.horario-de-funcionamento {
  font-size: 20px;
}

.text-1 {
  font-size: 12px;
  margin: 0;
}

.text-2 {
  font-size: 12px;
  margin: 0;
}

.saiba-mais {
  background: #cc141d;
  color: white;
  font-size: 12px;
  font-weight: 200px;
  width: max-content;
  padding: 5px 10px;
  border: none;
}

.cont-ferramentas {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 0;
  margin-left: 10px;
}

.img-equipamentos {
  width: 100px;
  height: 100px;
  object-fit: cover;
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
  margin-bottom: 10px;
}

.grid-infos-img {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
}

.infos {
  font-size: 12px;
  font-weight: 400;
}

.img-infos {
  width: 100%;
}

.bold-sobre {
  font-size: 18px;
}

.light {
  color: #1a1a1a;
  font-weight: 200;
}

.prof {
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 20px 0;
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

.secretaria,
.name {
  font-size: 14px;
}

.name {
  font-weight: 300;
}

.valor {
  margin: 20px 0 0 0;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  background: #f5f5f5;
  color: #555555;
  padding: 10px;
}

.valor p {
  color: #1a1a1a;
  font-size: 20px;
}

h1 {
  margin: 0 0 15px 0;
}

h3 {
  font-size: 17px;
  color: #555555;
  font-weight: 400;
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
</style>