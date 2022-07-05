<template>
  <div>
    <BannerInfos :bannerImg="bannerImg" :pageName="pageName" />
    <ListaBraba />
    <MainContent :email="email" :pageName="pageName" :conteudos="conteudos" />
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
        teste1: "tem que funcionar 1",
        apresentacao:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        teste4: "tem que funcionar 4",
      },
      pageName: "Laboratório de Marcenaria",
      bannerImg: "/img/labs/ceramica.jpg",
    };
  },
  components: {
    BannerInfos,
    ListaBraba,
    MainContent,
  },
};
</script>
