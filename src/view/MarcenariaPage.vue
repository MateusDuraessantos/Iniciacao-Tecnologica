<template>
  <div>
    <BannerInfos :conteudos="conteudos" />
    <MainContent :ferramentas="ferramentas" :conteudos="conteudos" />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "MarcenariaPage",
  data() {
    return {
      conteudos: {
        bannerImg: "/img/lab/marcenaria/marcenaria_1.jpg",
        pageName: "Laboratório de Marcenaria",
        apresentacao:
          "Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.",
        video: "/img/lab/marcenaria/video_marcenaria_1.mp4",
      },
      /*  */
      ferramentas: [
        {
          ferramenta: "Serra de corte DeWalt",
          sobre:
            "Serra corte rápido construção robusta, morsa de aperto rápido, guia de corte angular, compartimento integrado para chave de ajuste e troca do disco, interruptortipo gatilho com função homem morto e orifício para cadeado. Ideal para trabalhos em serralheiras e departamentos de manutenção em cortes de metais.",
          linkButton1: "#serradecorte",
          linkButton2: "serradecorte",
          tumble: require("../assets/equipamentos/ferramentas/serra-de-corte.jpg"),
          gridInfosImg: [
            { url: "/img/equipamentos/ferramentas/serradecorte.jpg" },
            { url: "/img/equipamentos/ferramentas/serradecorte.jpg" },
          ],
        },
        {
          ferramenta: "Furadeira",
          sobre:
            "Furadeiras são máquinas que têm como função principal executar furos nos mais diversos tipos de materiais. Para tanto o motor da furadeira aplica uma alta velocidade de rotação a uma ou várias brocas que serão responsáveis pela remoção de material desejada.",
          linkButton1: "#furadeira",
          tumble: require("../assets/equipamentos/ferramentas/furadeira.jpg"),
          gridInfosImg: [
            { url: "/img/equipamentos/ferramentas/furadeira.jpg" },
            { url: "/img/equipamentos/ferramentas/furadeira.jpg" },
            { url: "/img/equipamentos/ferramentas/furadeira.jpg" },
            { url: "/img/equipamentos/ferramentas/furadeira.jpg" },
          ],
          linkButton2: "furadeira",
        },

        {
          ferramenta: "Tico Tico",
          sobre: "",
          linkButton1: "#tico-tico",
          linkButton2: "tico-tico",
          tumble: require("../assets/equipamentos/ferramentas/tico-tico.jpg"),
          gridInfosImg: [
            { url: "/img/equipamentos/ferramentas/tico-tico.jpg" },
            { url: "/img/equipamentos/ferramentas/tico-tico.jpg" },
            { url: "/img/equipamentos/ferramentas/tico-tico.jpg" },
            { url: "/img/equipamentos/ferramentas/tico-tico.jpg" },
          ],
        },
        {
          ferramenta: "Tupia Tupia",
          sobre: "",
          linkButton1: "#tupia-tupia",
          linkButton2: "tupia-tupia",
          tumble: require("../assets/equipamentos/ferramentas/tupia-tupia.jpg"),
          gridInfosImg: [
            { url: "/img/equipamentos/ferramentas/tupia-tupia.jpg" },
            { url: "/img/equipamentos/ferramentas/tupia-tupia.jpg" },
            { url: "/img/equipamentos/ferramentas/tupia-tupia.jpg" },
            { url: "/img/equipamentos/ferramentas/tupia-tupia.jpg" },
          ],
        },
      ],
    };
  },
  components: {
    BannerInfos,
    MainContent,
  },
};
</script>
