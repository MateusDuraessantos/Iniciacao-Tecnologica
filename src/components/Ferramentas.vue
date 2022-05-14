<template>
  <div>
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

    <!--  -->

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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
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
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
          </div>
        </div>

        <!--  -->

        <div class="equipamentos">
          <img class="img-equipamentos" :src="lixadeira.imgPath" />
          <div class="cont-ferramentas">
            <p class="ferramenta">{{ lixadeira.name }}</p>
            <p class="text-1">Unidades</p>
            <p class="text-2">{{ lixadeira.unidades }}</p>
            <button
              class="saiba-mais"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FerramentasLabs",
  data() {
    return {
      lixadeira: {
        avatar: "alicate.jpg",
        name: "Lixadeira angular",
        unidades: "2",
        imgPath: require("../assets/equipamentos/ferramentas/lixadeira-angular.jpg"),
      },
    };
  },
};
</script>

<style>
.container-labs {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
  padding: 30px;
  color: #555555;
  height: max-content;
}
.equipamentos {
  display: flex;
  margin-bottom: 20px;
}
.img-equipamentos {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.cont-ferramentas {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 0;
  margin-left: 10px;
}
.ferramenta {
  font-size: 14px;
  font-weight: 600;
}
.text-1 {
  font-size: 12px;
  margin: 0;
}

.text-2 {
  font-size: 12px;
  margin: 0;
}
h3 {
  font-size: 17px;
  color: #555555;
  font-weight: 400;
}
.horario-de-funcionamento {
  font-size: 20px;
  margin-bottom: 30px;
}
</style>