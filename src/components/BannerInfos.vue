<template>
  <div class="container-banner">
    <div class="banner">
      <div class="text-banner">
        <h1> {{ pageName }}</h1>
        <p>
          <strong>Centro de Marcenara e construção civil</strong> |
          <em class="campus-higienopolis">
            Campus Higienópolis apareça desgraça</em
          >
        </p>
      </div>
      <img class="imagem-banner" :src="bannerImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerInfos",
  props: {
    bannerImg: String,
    pageName: String
  },
};
</script>

<style scoped>
.container-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 370px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background: black;
}

.text-banner {
  position: relative;
  z-index: 100;
}

.imagem-banner {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  opacity: .6;
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
