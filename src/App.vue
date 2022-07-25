<template>
  <div>
    <NewHeader class="NewHeader" />
    <router-view></router-view>
    <NewFooter />
  </div>
</template>

<script>
import NewHeader from "./components/NewHeader.vue";
import NewFooter from "./components/NewFooter.vue";

export default {
  name: "App",
  props: {
    estilo: String,
  },
  components: {
    NewHeader,
    NewFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.routerLink {
  text-decoration: none;
}

.NewHeader {
  position: sticky;
  top: -70px;
  z-index: 1000;
  width: 100%;
}

*,
p {
  font-family: "roboto";
  padding: 0;
  margin: 0;
}

.selecionado {
  background: #8c0816;
}

.videos {
  width: 100%;
  margin-top: 25px;
}
</style>