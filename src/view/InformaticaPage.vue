<template>
  <div>
    <BannerInfos :conteudos="conteudos" />
    <MainContent
      :ferramentas="ferramentas"
      :conteudos="conteudos"
      :asideInfos="asideInfos"
    />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "InformaticaPage",
  components: {
    BannerInfos,
    MainContent,
  },
  data() {
    return {
      asideInfos: {
        horarioDeFuncionamento: "13h às 16h",
        campus: "Campus Higienópolis",
        localizacao: "Prédio 10 - Chamberlain",
        // end: "R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907",
        /* Sobre o cordenador */
        cordenadorPerfil: "/img/eli.jpg",
        cordenadorNome: "Eli",
        cordenadorContato: "+55 (11) 0000-0000",
        cordenadorEmail: "mackenzie@mackenzie.com.br",

        tecnico: [
          {
            tecnicoImg: "/img/jake-sully.jpg",
            tecnicoName: "Jake Sully",
            tecnicoEmail: "avatar2brabo@century.com",
          },
          {
            tecnicoImg: "/img/walter-white.jpg",
            tecnicoName: "Walter White - Heisenberg",
            tecnicoEmail: "breakingbad@netflix.com",
          },
          {
            tecnicoImg: "/img/final-space.jpg",
            tecnicoName: "Final Space",
            tecnicoEmail: "finalspace@netflix.com",
          },
        ],
      },
      conteudos: {
        bannerImg: "/img/lab/informatica/informatica_1.jpg",
        pageName: "Laboratório de Informatica",
        apresentacao:
          "Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.",
        video: "/img/lab/informatica/video_informatica_1.MP4",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          {
            imagensTeste: "/img/lab/informatica/informatica_1.jpg",
          },
          {
            imagensTeste: "/img/lab/informatica/informatica_2.jpg",
          },
          {
            imagensTeste: "/img/lab/informatica/informatica_3.jpg",
          },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Serra de corte DeWalt",
          sobre:
            "",
          linkButton1: "#pcdell",
          linkButton2: "pcdell",
          tumble: "/img/lab/informatica/equipamentos/pcdell.webp",

          gridInfosImg: [
            {
              url: "/img/lab/informatica/equipamentos/pcdell.webp",
            },
          ],
        },
       
      ],
    };
  },
};
</script>
