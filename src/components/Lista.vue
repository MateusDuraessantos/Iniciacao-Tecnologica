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
                  <td scope="row">Capacidade Máx. Corte Esquadria</td>
                  <td scope="row">
                    90° Tubo Retangular A = 115mm X L = 130mm L = 76mm X A =
                    229mm
                  </td>
                </tr>

                <tr>
                  <td scope="row">Capacidade Máx.:</td>
                  <td>Corte Esquadria 90° Cantoneira: 115mm x 137mm</td>
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
</style>