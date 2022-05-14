<template>
  <div>
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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                    Serra corte rápido construção robusta, morsa de aperto
                    rápido, guia de corte angular, compartimento integrado para
                    chave de ajuste e troca do disco, interruptor tipo gatilho
                    com função homem morto e orifício para cadeado. Ideal para
                    trabalhos em serralheiras e departamentos de manutenção em
                    cortes de metais.
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

    <!-- 2° Modal Saiba mais -->

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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
           

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
</template>

<script>
export default {
  name: "ListaBraba",

};


</script>

<style>
.saiba-mais {
  background: white;
  color: white;
  color: #cc141d;
  font-size: 12px;
  font-weight: 200px;
  width: max-content;
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