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
  name: "CeramicaPage",
  components: {
    BannerInfos,
    MainContent,
  },
  data() {
    return {
      mateus: "mateus",
      asideInfos: {
        horarioDeFuncionamento: "13h às 16h",
        campus: "Campus Higienópolis",
        localizacao: "Prédio 9 - Arquitetura e Design",
        end: "R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907",
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
        bannerImg: "/img/lab/ceramica/ceramica_10.jpg",
        pageName: "Laboratório de Cerâmica",
        apresentacao:
          "No laboratório de cerâmica os alunos podem exercer a atividade de moldar, criando projetos desde copos ou pratos, até cobogós e esculturas e ainda terem suas peças queimadas e pintadas ao final do processo. Aqui, podessemos engrandecer a arte e técnica da fabricação de objetos tendo a argila como matéria prima.",
        video: "/img/lab/ceramica/video_ceramica_1.MP4",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          {
            imagensTeste: "/img/lab/ceramica/ceramica_1.jpeg",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_2.jpeg",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_3.jpeg",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_4.jpeg",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_5.jpg",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_6.jpg",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_7.JPG",
          },
          {
            imagensTeste: "/img/lab/ceramica/ceramica_8.jpeg",
          },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Forno industrial",
          sobre:
            "O processo de queima das peças em argila se dá de modo lento no início, aumentando de 100 °C em 100 °C a cada hora. Depois dos 200 °C, as peças encolhem cerca 10% do tamanho original por perder o resto da água que havia na argila. Esta queima deve ser lenta assim no início para que as peças não rachem ou empenem.",
          linkButton1: "#serradecorte",
          linkButton2: "serradecorte",
          tumble: "/img/lab/ceramica/equipamentos/01_forno.png",

          gridInfosImg: [
            {
              url: "/img/lab/ceramica/equipamentos/01_forno.png",
            },
         
          ],
        },
        {
          ferramenta: "Ferramentas de escultura",
          sobre:
            "Ferramentas para criação de diversas escultura para seus projeto em argila",
          linkButton1: "#ferramentaspdeescultura",
          linkButton2: "ferramentaspdeescultura",
          tumble: "/img/lab/ceramica/equipamentos/01_ferramentaspdeescultura.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/ceramica/equipamentos/ferramentaspdeescultura.jpg",
            },
            {
              url: "/img/lab/ceramica/equipamentos/01_ferramentaspdeescultura.jpg",
            },
         
          ],
        },
        
      ],
    };
  },
};
</script>
