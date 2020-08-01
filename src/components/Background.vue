<template>
  <div class="background">
    <div class="img"></div>
    <div class="overlay"></div>
  </div>
</template>

<script>
  export default {
    name: "Background",
  }
</script>

<style scoped lang="scss">
  .background {
    //todo: eigene bilder nehmen
    .img {
      background: url('../assets/IMG_3271.jpg') no-repeat 50% 50%;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      background-size: cover;
    }

    .overlay {
      background: url('../assets/mask.png') no-repeat;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      background-size: cover;
    }
  }
</style>
