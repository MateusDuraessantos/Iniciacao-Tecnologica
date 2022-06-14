<template>
  <div>
    <NewHeader />
    <router-view></router-view>
    <NewFooter />
  </div>
</template>

<script>
import NewHeader from "./components/NewHeader.vue";
import NewFooter from "./components/NewFooter.vue";

export default {
  name: "App",
  components: {
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

/* banners de todas as páginas */

.container-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 370px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner {
  width: calc(100% - 50px);
  max-width: 1400px;
  color: white;
}

.campus-higienopolis {
  font-weight: 200;
}
</style>