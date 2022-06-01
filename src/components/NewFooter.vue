<template>
  <div>
    <footer>
      <div class="grid-creditos">
        <div class="container-footer">
          <div class="creditos">
            <p>Outros Sites</p>
            <p>Institucional</p>

            O instituto Universidade Colégios Chancelaria Andrew Jumper (CPAJ)
            MackPesquisa Responsabilidade Social
          </div>
          <div class="creditos">
            <p>Parceiras e negócios</p>

            Ambiente de inovação e Empreendedorismo Mackenzie Educacional
            Sistema Mackenzie de Ensino
          </div>
          <div class="creditos">
            <p>Serviços Educacionais</p>

            Curso de curta Duração Mackenzie Lnaguege Center Universidade
            Language Center Universaide Aberta DO tempo Útil International
            Affairs (COI)
          </div>
          <div class="creditos">
            <p>Pesquisa e inovação</p>

            Apple Developer Academy Centro Mackenzie de Liberdade Econômia
            Centro de Rádio Astronomia e Astrofísica (CFP) Vitrine Tecnologica
          </div>
          <div class="creditos">
            <p>Mídia / Notícias:</p>

            Editoria Mackenzie TV Mackenzie[ Notícias Rádio Mackenzie Revista
            Mackenzie
          </div>
          <div class="creditos">
            <p>Sociais e Culturais:</p>

            Capelania Centro Histórico e Cultural Mackenzie Voluntário
            Responsabilidade Social

            <p style="margin-top: 20px">Hospitais:</p>

            Hospital Universitário Evangélico Mackenzie Hospital Evangélico
          </div>
        </div>
      </div>

      <div class="container-mensagem">
        <div class="mensagem">
          <p>@Copyright - 2022 - Instituto Presbiteriano Mackenzie</p>
          <p>“E conhecereis a verdade, e a verdade vos libertará.” João 8:32</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NewFooter",
};
</script>

<style scoped>
footer {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: center;
  margin-top: 100px;
  border: solid #00547f;
  border-width: 4px 0 0 0;
  width: 100%;
  height: 500px;
  background: #cc141d;
  color: white;
}

.grid-creditos {
  font-weight: 300;
}

.container-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  width: calc(100% - 150px);
  height: max-content;
  margin: auto;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #555555;
}

.mensagem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 40px;
  width: calc(100% - 100px);

  max-width: 1400px;
  font-size: 14px;
  color: white;
}

.mensagem p {
  margin: 0;
}

/* imagens do laboratório */

.container-barra {
  display: flex;
  align-items: center;
  margin: 0 25px;
  width: 100%;
  max-width: 1400px;
}

.barra {
  width: 3px;
  height: 38px;
  margin-right: 10px;
  background: #7a1f7f;
}

.img-lab {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.title-img-lab {
  margin: 25px 0;
  font-weight: 400;
}

.img-lab img {
  height: 16vw;
  width: 100%;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
  object-fit: cover;
  transition: 0.2s;
}

.img-lab img:hover {
  transform: scale(1.02);
  transition: 0.2s;
}

.img-carrossel {
  height: 35vw;
  width: 100%;
  object-fit: cover;
}
</style>