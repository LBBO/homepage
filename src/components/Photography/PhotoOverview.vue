<template>
  <div class="photoOverview">
    <div
      v-for="(picture, pictureIndex) of pictureFileNames"
      class="picture"
      @click="() => openImage(pictureIndex)"
    >
      <div
        class="child"
        :style="`background-image: url(${getImagePath(picture, true)})`"
      />
    </div>
  </div>
  <div
    class="overlay"
    v-if="showOverlay"
    @keypress.left="() => changeImage(-1)"
    @keypress.right="() => changeImage(1)"
  >
    <div
      class="img-switcher prev"
      @click="() => changeImage(-1)"
    >
      ◀
    </div>
    <div
      class="img"
      :style="`background-image: url(${getImagePath(currentImage)})`"
    />
    <div
      class="img-switcher next"
      @click="() => changeImage(1)"
    >
      ▶
    </div>
    <div
      class="close"
      @click="closeImage"
    />
  </div>
</template>

<script lang="ts">
  import { clearSelection, pathToAssets } from '../../util'
  import pictureFileNames from './pictureFileNames.json'

  export default {
    name: 'PhotoOverview',
    data: () => (
      {
        showOverlay: false,
        currentImageIndex: NaN,
        pictureFileNames,
      }
    ),
    computed: {
      currentImage: function (): string {
        return this.pictureFileNames[this.currentImageIndex]
      },
    },
    methods: {
      getImagePath(fileName: string, getPreview = false): string {
        return `${pathToAssets()}${getPreview ? 'previews/' : ''}${fileName}`
      },
      openImage: function (imageIndex: number) {
        this.showOverlay = true
        this.currentImageIndex = imageIndex
        this.registerKeyPress()
      },
      closeImage: function () {
        this.showOverlay = false
        this.currentImageIndex = NaN
        this.registerKeyPress()
      },
      changeImage: function (delta: number) {
        this.currentImageIndex = (
          this.currentImageIndex + delta + this.pictureFileNames.length
        ) % this.pictureFileNames.length
        clearSelection()
      },
      onKeyPress(e: KeyboardEvent) {
        if (e.key === 'ArrowLeft' || e.key === 'Left') {
          this.changeImage(-1)
        } else if (e.key === 'ArrowRight' || e.key === 'Right') {
          this.changeImage(1)
        } else if (e.key === 'Esc' || e.key === 'Escape') {
          this.closeImage()
        }
      },
      registerKeyPress() {
        document.addEventListener('keydown', this.onKeyPress)
      },
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.onKeyPress)
    },
  }
</script>

<style scoped lang="scss">
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .95);
    z-index: 100;
    top: 0;

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
