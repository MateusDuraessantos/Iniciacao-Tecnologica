<template>
  <div>
    <BannerInfos :bannerImg="bannerImg" :pageName="pageName" />
    <MainContent :pageName="pageName" />
  </div>
</template>

<script>
import BannerInfos from "../components/BannerInfos.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "InformaticaPage",
  data() {
    return {
      pageName: "Laboratório de Informática",
      bannerImg: "/img/labs/informatica.jpg",
    };
  },
  components: {
    BannerInfos,
    MainContent,
  },
};
</script>

