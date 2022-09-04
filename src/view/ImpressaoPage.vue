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
  name: "ImpressaoPage",
  components: {
    BannerInfos,
    MainContent,
  },
  data() {
    return {
      asideInfos: {
        horarioDeFuncionamento: "13h às 16h",
        campus: "Campus Higienópolis",
        localizacao: "Prédio 23",
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
        bannerImg: "/img/lab/impressao/impressao_4.jpg",
 
        pageName: "Laboratório de impressão",
        apresentacao:
          " As atividades desenvolvidas no LABImpressão voltam-se ao conhecimento e exploração de diferentes técnicas gráficas, visando ancorar processos de criação e produção de projetos do campo do design gráfico. Destinado a dar suporte às ações de ensino, pesquisa e extensão do Curso de Design, o laboratório propicia experimentos com processos reprodutivos originários das artes gráficas – xilogravura, linóleo-gravura, litogravura, gravura em metal e serigrafia –, bem como com processo digital fine art, abrindo possibilidades criativas para soluções projetuais, desde aplicações sobre diversidade de suportes, a experimentações de processos híbridos.",
        // video: "/img/lab/ceramica/video_ceramica_1.MP4",
        none: "display: none",
        carrosselOne: "Imagens do carrossel",
        carrosselTwo: "Imagens do carrossel",
        carrosselThree: "/img/lab/marcenaria/Teste.jpg",
        /* Todas as imagens do laboratório */
        gridTeste: [
          { imagensTeste: "/img/lab/impressao/impressao_1.jpg" },
          { imagensTeste: "/img/lab/impressao/impressao_2.jpg" },
          { imagensTeste: "/img/lab/impressao/impressao_3.jpg" },
          { imagensTeste: "/img/lab/impressao/impressao.png" },
        ],
      },

      /*  */

      ferramentas: [
        {
          ferramenta: "Tela de Serigrafia",
          sobre: "",
          linkButton1: "#tico-tico",
          linkButton2: "tico-tico",
          tumble: "/img/lab/impressao/equipamentos/serigrafia.jpg",
          gridInfosImg: [
            {
              url: "/img/lab/impressao/equipamentos/serigrafia.jpg",
            },
          ],
        },
        {
          ferramenta: "Rodo de serigrafia",
          sobre: "",
          linkButton1: "#rodo",
          linkButton2: "rodo",
          tumble: "/img/lab/impressao/equipamentos/rodo.webp",
          gridInfosImg: [
            {
              url: "/img/lab/impressao/equipamentos/rodo.webp",
            },
            {
              url: "/img/lab/impressao/equipamentos/rodos_madeira.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>
