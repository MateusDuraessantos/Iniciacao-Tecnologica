<template>
  <div>
    <BannerInfos :conteudos="conteudos" />
    <ListaBraba />
    <MainContent :conteudos="conteudos"  :ferramentas="ferramentas" />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import ListaBraba from "../components/Lista.vue";
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
      ferramentas: {
        serraDeCorte: "Apenas um Show",
      },
    };
  },
  components: {
    BannerInfos,
    ListaBraba,
    MainContent,
  },
};
</script>
