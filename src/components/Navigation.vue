<template>
  <nav>
    <div>
      <a href="#landing-page"><span></span></a>
      <!--<a href="#about"><span></span></a>-->
      <a href="#programming"><span></span></a>
      <a href="#photography"><span></span></a>
      <a href="#footer"><span></span></a>
    </div>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Navigation',
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

      a {
        cursor: pointer;
        color: #FFFFFF;
        display: block;
        width: 16px;
        height: 16px;
        margin: 10px;

        span {
          display: block;
          border-radius: 100%;
          border: 2px solid rgba(255, 255, 255, 0);
          background: #CCCCCC;
          width: 14px;
          height: 14px;
          transition: all .25s ease;
        }

        &:hover, &.active {
          span {
            border: 2px solid #CCCCCC;
            background: #505050;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    nav {
      display: none;
    }
  }
</style>
