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

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .95);
    z-index: 100;

    .img {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      width: 100%;
      height: 100%;
    }

    .close {
      position: fixed;
      top: 50px;
      right: 50px;
      cursor: pointer;
      display: inline-block;
      width: 50px;
      height: 50px;
      overflow: hidden;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 100%;
        top: 50%;
        left: 0;
        height: 4px;
        margin-top: -2px;
        background: #BABABA;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    .img-switcher {
      font-weight: normal;
      position: absolute;
      margin: 0;
      top: calc(50% - 14.5px);
      padding: 10px;
      background-color: rgba(0, 0, 0, .5);
      border-radius: 100%;
      width: 21px;
      text-align: center;
      color: #BABABA;
      cursor: pointer;
      z-index: 1;

      &.disabled {
        cursor: default;
        color: #6F6F6F;
      }

      &.prev {
        left: 50px;
      }

      &.next {
        right: 50px;
      }
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    .overlay {
      .close {
        top: 15px;
        right: 15px;
      }

      .img-switcher {
        display: none;
      }
    }
  }

</style>
