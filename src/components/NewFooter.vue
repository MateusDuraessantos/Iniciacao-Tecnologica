<template>
  <div>
    <footer>
      <img class="logo" src="/img/logo-mackenzie.svg" />
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

            Editoria Mackenzie TV Mackenzie Notícias Rádio Mackenzie Revista
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

        <hr style="margin: 30px 100px" />

        <div class="container-footer">
          <div class="creditos">
            <p>Universidade - São Paulo</p>

            Graduação e Pós-Graduação<br />
            Rua da Consolação, 930<br />
            Consolação, São Paulo<br />
            SP, 01302-907<br />
            (11) 2114-8000<br />
            (11) 2766-7000 <br />

            <p style="margin-top: 20px">Colégio - São Paulo</p>

            Infantil, Fundamental e Médio <br />
            Rua Itambé, 145 <br />
            Higienópolis, São Paulo <br />
            SP, 01239-001 <br />
            (11) 2766-7600 <br />

            <p style="margin-top: 20px">Instituto Cristão - Castro</p>

            Técnico e Médio Rod. Guataçara Borba Carneiro, km 03 Castro PR,
            84166-980 (42) 3232-4224
          </div>

          <div class="creditos">
            <p>Universidade - Alphaville</p>

            Graduação<br />
            Av. Mackenzie, 905<br />
            Tamboré, Barueri<br />
            SP, 06460-130<br />
            (11) 3555-2181/2159<br />

            <p style="margin-top: 20px">Colégio - São Paulo</p>
            Infantil, Fundamental e Médio <br />
            Av. Mackenzie <br />
            Tamboré, Barueri <br />
            SP, 06460-130 <br />
            (11) 3555-2000 <br />

            <p style="margin-top: 20px">Faculdade - Brasília</p>

            Graduação e Pós-Graduação <br />
            SGAS 906 Conj A Bloco 1 <br />
            Asa Sul, Brasília <br />
            DF, 70390-060 <br />
            (61) 3521-9300 <br />
          </div>
          <div class="creditos">
            <p>Universidade - Alphaville</p>

            Pós-Graduação<br />
            Al. Tocantins, 125<br />
            Alphaville, Barueri<br />
            SP, 06455-931<br />
            (11) 3555-2048/2022<br />

            <p style="margin-top: 20px">Colégio - São Paulo</p>

            Infantil, Fundamental e Médio <br />
            SHIS Ql 05 Chác. 74 a 79 <br />
            Lago Sul, Brasília <br />
            DF, 71600-500 <br />
            (61) 2106-9000 <br />
            (61) 3521-9000 <br />

            <p style="margin-top: 20px">Faculdade - Rio</p>
            Graduação e Pós-Graduação <br />
            Rua Buenos Aires, 283 <br />
            Centro, Rio de Janeiro <br />
            RJ, 20061-003 <br />
            (21) 2114-5252 <br />
          </div>
          <div class="creditos">
            <p>Universidade - Campinas</p>

            Graduação e Pós-Graduação<br />
            Av. Brasil, 1220<br />
            Jd. Guanabara, Campinas<br />
            SP, 13073-148<br />
            (19) 3211-4100<br />

            <p style="margin-top: 20px">Colégio - Palmas</p>

            Infantil, Fundamental e Médio<br />
            Qd. 106 Sul - Alameda 30<br />
            Lote 10-A, Palmas<br />
            TO, 77020-050<br />
            (63) 3236-5300<br />

            <p style="margin-top: 20px">Faculdade - Curitiba</p>
            Graduação e Pós-Graduação <br />
            Rua Padre Anchieta, 2770 <br />
            Bigorrilho, Curitiba <br />
            PR, 80730-000 <br />
            (41) 3240-5500 <br />
          </div>
        </div>

        <hr style="margin: 30px 100px" />

        <div class="container-footer">
          <div class="creditos">
            <p>Hospital Evangélico Dr. e Sra. Goldsby King</p>

            Rua: Hilda Bergo Duarte, 81 - Centro <br />
            Dourados, MS <br />
            PR, 79803-060 <br />
            +55 (067) 3416-7800 <br />
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
  padding: 30px 0 200px 0;

  background: #af1816;
  color: white;
  overflow: hidden;
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

.logo {
  position: absolute;
  right: -100px;
  top: 200px;
  height: 105%;
  opacity: 0.2;
}
</style>