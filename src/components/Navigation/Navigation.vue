<template>
  <nav>
    <div>
      <NavigationItem id="landing-page" />
      <NavigationItem id="programming" />
      <NavigationItem id="photography" />
      <NavigationItem id="footer" />
    </div>
  </nav>
</template>

<script lang="ts">
  import NavigationItem from './NavigationItem.vue'
  export default {
    name: 'Navigation',
    components: { NavigationItem },
  }
</script>

<style scoped lang="scss">
  nav {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    right: 20px;
    height: 100%;
    z-index: 100;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    nav {
      display: none;
    }
  }
</style>
