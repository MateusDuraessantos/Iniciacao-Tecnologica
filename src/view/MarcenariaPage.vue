<template>
  <div>

    <!-- banner -->
    <div class="container-banner">
      <div class="banner">
        <div>
          <h1>Laboratório de Marcenaria</h1>
          <p>
            <strong>Centro de Marcenara e construção civil</strong> |
            <em class="campus-higienopolis"> Campus Higienópolis</em>
          </p>
        </div>
        <div></div>
      </div>
    </div>
    <!--  -->
    <ListaBraba />
    <MainContent />
  </div>
</template>

<script>
import ListaBraba from "../components/Lista.vue";
import MainContent from "../components/Main.vue";

export default {
  name: "MarcenariaPage",
  components: {
    ListaBraba,
    MainContent,
  },
};
</script>


<style scoped>
.container-banner {
  background-image: url("../assets/img/lab/marcenaria/capa.jpg");
}
</style>