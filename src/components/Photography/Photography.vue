<template>
  <div class="page" id="photography">
    <div>
      <div class="intro de">
        <h1>Außerdem beschäftige ich mich sehr gerne mit der Fotografie</h1>
      </div>

      <div class="intro en-us">
        <h1>Another interest of mine is photography</h1>
      </div>

      <PhotoOverview />
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import PhotoOverview from './PhotoOverview.vue'

  export default defineComponent({
    name: "Photography",
    components: { PhotoOverview },
  })
</script>

<style scoped lang="scss">
  #photography {
    background-color: #BFBFBF;

    > div {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .intro {
        color: #2B2B2B;
        text-align: center;
        padding: 0 30px;

        a {
          color: inherit;

          &:hover {
            color: #3D00EE;
          }
        }
      }
    }
  }
</style>
