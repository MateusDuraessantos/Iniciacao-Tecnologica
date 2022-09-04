<template>
  <div>
    <BannerInfos :conteudos="conteudos" />
    <MainContent
      :ferramentas="ferramentas"
      :conteudos="conteudos"
      :asideInfos="asideInfos"
      :teste="teste"
    />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "JoiaPage",
  components: {
    BannerInfos,
    MainContent,
  },
  data() {
    return {
      asideInfos: {
        horarioDeFuncionamento: "13h às 16h",
        campus: "Campus Higienópolis",
        localizacao: "Prédio 24",
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
        bannerImg: "/img/lab/joia/joia.jpg",
        pageName: "Laboratório de Cerâmica",
        apresentacao:
          " O Laboratório de Vidro e Jóia faz parte do histórico de laboratórios do curso de Design da FAU e possui grande repertório de realizações, moldes e histórico de experimentações que podem auxiliar empresas, empreendedores e designers a desenvolverem soluções criativas, ou simplesmente expandirem seus horizontes produtivos. O LabVidro/Joia é um espaço de produção de conhecimentos por meio de experimentações. Tem como objetivo orientar o aluno pela temática do vidro e da joia, colocar em prática as teorias específicas para a realização do projeto por meio das técnicas e ferramentas disponibilizadas no espaço do laboratório e diante deste cenário, promover a inovação com discussões e práticas que são essenciais para o processo criativo do designer.",
        video: "/img/lab/joia/20210622_170116.mp4",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          {
            imagensTeste: "/img/lab/joia/LabVidro_foto_-_grace_kishimoto.png",
          },
          {
            imagensTeste: "/img/lab/joia/01_20220524_214512.jpg",
          },
          {
            imagensTeste: "/img/lab/joia/03_20220524_214531.jpg",
          },
          {
            imagensTeste: "/img/lab/joia/05_20220524_214615.jpg",
          },
          {
            imagensTeste: "/img/lab/joia/06_20220524_214634.jpg",
          },
          {
            imagensTeste: "/img/lab/joia/08_20220524_214837.jpg",
          },
          {
            imagensTeste: "/img/lab/joia/VIDRO_01.JPG",
          },
          {
            imagensTeste: "/img/lab/joia/09_20220524_214914.jpg",
          },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Serra de joia ajustável",
          sobre:
            "Utilizado para cortar madeira, metais e plásticos. Para utilizá-lo, basta fixar a lâmina, respeitando seu sentido, e fazer pressão correndo a ferramenta pelo material a ser cortado.",
          linkButton1: "#serradejoia",
          linkButton2: "serradejoia",

          tumble: "/img/lab/joia/equipamentos/serra_de_joias_ajustavel.jpg",

          gridInfosImg: [
            {
              url: "/img/lab/joia/equipamentos/serra_de_joias_ajustavel.jpg",
            },
            {
              url: "/img/lab/joia/equipamentos/01_serra_de_joias_ajustavel.jpg",
            },
          ],
        },
        {
          ferramenta: "Paquímetro",
          sobre:
            "Utilizado para cortar madeira, metais e plásticos. Para utilizá-lo, basta fixar a lâmina, respeitando seu sentido, e fazer pressão correndo a ferramenta pelo material a ser cortado.",
          linkButton1: "#serradejoia",
          linkButton2: "serradejoia",

          tumble: "/img/lab/joia/equipamentos/paquimetro.webp",

          gridInfosImg: [
            { url: "/img/lab/joia/equipamentos/paquimetro.webp" },
            { url: "/img/lab/joia/equipamentos/paquimetro.jpg" },
          ],
        },

        {
          ferramenta: "Maçarico",
          sobre:
            "O maçarico funciona criando uma chama potente e direcionada através de seu bico, que permite cortar, fundir ou aquecer os materiais, a fim de ter uma forma que, quando resfriada, seja resistente e permaneça dentro da moldagem. Pode ser usada também em materiais derivados do plástico.",
          linkButton1: "#macarico",
          linkButton2: "macarico",
          tumble: "/img/lab/joia/equipamentos/macarico.jpg",

          gridInfosImg: [
            { url: "/img/lab/joia/equipamentos/macarico.jpg" },
            { url: "/img/lab/joia/equipamentos/01_macarico.jpg" },
          ],
        },
        {
          ferramenta: "Lima",
          sobre: "Ela serve pra desbaste e acabamento de metais, além de ser bastante usada pra remover soldas e acabamentos antigos de peças.",
          linkButton1: "#lima",
          linkButton2: "lima",
          tumble: "/img/lab/joia/equipamentos/lima.jpg",

          gridInfosImg: [
            { url: "/img/lab/joia/equipamentos/lima.jpg" },
            { url: "/img/lab/joia/equipamentos/lima.webp" },
          ],
        },
      ],
    };
  },
};
</script>
