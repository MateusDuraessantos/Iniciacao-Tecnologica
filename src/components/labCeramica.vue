<template>
  <div>
    <NewHeader />
    <ListaBraba />
    <MainContent />
    <NewFooter />
  </div>
</template>

<script>
import ListaBraba from "./Lista.vue";
import MainContent from "./Main.vue";
import NewHeader from "./NewHeader.vue";
import NewFooter from "./NewFooter.vue";

export default {
  name: "labCeramica",
  components: {
    ListaBraba,
    MainContent,
    NewHeader,
    NewFooter,
  },
};
</script>
