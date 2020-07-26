<template>
  <div class="photoOverview">
    <div
      v-for="picture of pictureFileNames"
      class="picture"
    >
      <div
        class="child"
        :style="`background-image: url(src/assets/previews/${picture})`"
      />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'PhotoOverview',
    data: () => (
      {
        pictureFileNames: [
          'IMG_0571-2.jpg', 'IMG_0961.jpg', 'IMG_1360.jpg', 'IMG_1551.jpg', 'IMG_1556.jpg', 'IMG_1650-1.jpg',
          'IMG_2255.jpg', 'IMG_2566.jpg', 'IMG_2889.jpg',
        ],
      }
    ),
  }
</script>

<style scoped lang="scss">
  .photoOverview {
    width: 1199px;
    display: flex;
    flex-flow: row wrap;
    align-content: space-around;
    justify-content: space-around;

    .picture {
      width: 300px;
      height: 300px;
      margin-top: 50px;
      overflow: hidden;
      position: relative;
      background-size: cover;
      margin-left: 10px;
      margin-right: 10px;

      //Force GPU to render the background image for performance boost
      -webkit-transform: translate3d(0, 0, 0);

      background-repeat: no-repeat;
      background-position: 50% 50%;
      cursor: pointer;

      .child {
        width: 100%;
        height: 100%;
        background: no-repeat 50% 50%;
        transition: all .5s;
        color: #EBEBEB;
        display: flex;
        flex-direction: row;
        align-items: center;

        &::before {
          content: "";
          display: none;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }

        span {
          display: none;
          width: 100%;
          text-align: center;
          z-index: 1;
          font-size: 25px;
          padding: 30px;
        }
      }

      &:hover .child {
        transform: scale(1.1);

        span {
          display: block;
        }

        &::before {
          display: block;
        }
      }
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    .photoOverview {
      width: 80%;

      .picture {
        width: 200px;
        height: 200px;
        margin-top: 40px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .photoOverview {
      width: 70%;

      .picture {
        width: 100px;
        height: 100px;
        margin-top: 25px;
      }
    }
  }
</style>
