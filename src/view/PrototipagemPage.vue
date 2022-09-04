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
  name: "PrototipagemPage",
  components: {
    BannerInfos,
    MainContent,
  },
  data() {
    return {
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
        bannerImg: "/img/lab/prototipagem/prototipagem_8.1.jpg",
        pageName: "Laboratório de Prototipagem",
        apresentacao:
          "Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.",
        video: "/img/lab/prototipagem/video_prototipagem_1.MP4",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          {
            imagensTeste: "/img/lab/prototipagem/prototipagem_1.jpg",
          },
          {
            imagensTeste: "/img/lab/prototipagem/prototipagem_3.jpg",
          },
          {
            imagensTeste: "/img/lab/prototipagem/prototipagem_6.jpg",
          },
          {
            imagensTeste: "/img/lab/prototipagem/prototipagem_8.jpg",
          },
          {
            imagensTeste: "/img/lab/prototipagem/prototipagem_9.jpg",
          },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Impressora 3D",
          sobre:
            "O processo de impressão em 3D transforma um objeto inteiro em milhares de pequenas fatias, depois, que é feito de baixo para cima, fatia a fatia. Essas minúsculas camadas se unem para formar um objeto sólido.",
          linkButton1: "#serradecorte",
          linkButton2: "serradecorte",

          tumble: "/img/lab/prototipagem/equipamentos/01_impressora.jpg",
          gridInfosImg: [
            {
              url: "/img/lab/prototipagem/equipamentos/01_impressora.jpg",
            },
            {
              url: "/img/lab/prototipagem/equipamentos/impressora.webp",
            },
          ],
        },
        {
          ferramenta: "Impressora a laser",
          sobre:
            "O processo de impressão em laser um objeto inteiro em milhares de pequenas fatias, depois, que é feito de baixo para cima, fatia a fatia. Essas minúsculas camadas se unem para formar um objeto sólido.",
          linkButton1: "#laser",
          linkButton2: "laser",

          tumble: "/img/lab/prototipagem/equipamentos/01_laser.jpg",
          gridInfosImg: [
            {
              url: "/img/lab/prototipagem/equipamentos/01_laser.jpg",
            },
            {
              url: "/img/lab/prototipagem/equipamentos/02_laser.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>
