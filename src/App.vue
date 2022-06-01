<template>
  <div>
    <NewHeader />
    <ListaBraba />
    <MainContent />
    <NewFooter />
  </div>
</template>

<script>
import ListaBraba from "./components/Lista.vue";
import MainContent from "./components/Main.vue";
import NewHeader from "./components/NewHeader.vue";
import NewFooter from "./components/NewFooter.vue";

export default {
  name: "App",
  components: {
    ListaBraba,
    MainContent,
    NewHeader,
    NewFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

*,
p {
  font-family: "roboto";
  padding: 0;
  margin: 0;
}
</style>