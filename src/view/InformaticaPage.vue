<template>
  <div>
    <BannerInfos :conteudos="conteudos" />
    <MainContent :conteudos="conteudos" />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "InformaticaPage",
  data() {
    return {
      conteudos: {
        bannerImg: "/img/lab/informatica/informatica_1.jpg",
        pageName: "Laboratório de Informática",
        apresentacao:
          "Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboe a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunose a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos.Texto de apresentação do laboratório contando um pouco sobre a história e possibilidades possíveis para os alunos",
        video: "/img/lab/informatica/video_informatica_1.MP4",
      },
    };
  },
  components: {
    BannerInfos,
    MainContent,
  },
};
</script>

