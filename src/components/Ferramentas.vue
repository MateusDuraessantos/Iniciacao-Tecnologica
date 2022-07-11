<template>
  <div>
    <div
      style="
        margin: 40px 0;
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
    </div>

    <div class="container-labs">
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
        <!-- 1° -->

        <div v-for="(aqui, index) in ferramentas" :key="index">
          <div class="equipamentos">
            <img class="img-equipamentos" :src="aqui.tumble" />
            <div class="cont-ferramentas">
              <p class="ferramenta">{{ aqui.ferramenta }}</p>
              <p class="text-1">Unidades</p>
              <p class="text-2">2</p>
              <button
                class="saiba-mais"
                type="button"
                data-bs-toggle="modal"
                :data-bs-target="aqui.linkButton1"
              >
                Saiba mais
              </button>
            </div>
          </div>

          <!-- Conteúdo do modal -->

          <div
            class="modal fade"
            :id="aqui.linkButton2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {{ aqui.ferramenta }}
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
                    <tbody>
                      <tr>
                        <td scope="row">{{ aqui.ferramenta }}</td>
                        <td class="infos">
                          {{ aqui.sobre }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Unidades</th>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="grid-infos-img">
                    <img
                      v-for="(vamo, index) in aqui.gridInfosImg"
                      :key="index"
                      :src="vamo.url"
                      class="img-infos"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FerramentasLabs",
  props: {
    ferramentas: String,
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

/* Estilo do modal */

.saiba-mais {
  background: white;
  color: white;
  color: #cc141d;
  font-size: 12px;
  font-weight: 200px;
  width: max-content;
  border-radius: 50px;
  padding: 2px 10px;
  border: none;
  border: 1px solid #cc141d;
  transition: 0.3s;
}

.saiba-mais:hover {
  color: white;
  background: #cc141d;
  transition: 0.2s;
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
</style>