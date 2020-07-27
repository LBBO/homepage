<template>
  <Background />

  <LanguageSwitch :value="lang" @input="lang = $event" />

  <Navigation />

  <div class="container" :lang="lang">
    <Landingpage />
    <Programming />
    <Photography />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Landingpage from './components/Landingpage.vue'
  import Programming from './components/Programming/Programming.vue'
  import Photography from './components/Photography/Photography.vue'
  import Footer from './components/Footer.vue'
  import LanguageSwitch from './components/LanguageSwitch.vue'
  import Navigation from './components/Navigation/Navigation.vue'
  import Background from './components/Background.vue'

  export default {
    name: 'App',
    components: {
      Background,
      Navigation,
      LanguageSwitch,
      Footer,
      Photography,
      Programming,
      Landingpage,
    },
    data: () => (
      {
        lang: localStorage.getItem('usedLanguage') ?? 'de',
      }
    ),
    watch: {
      lang: (lang: string) => {
        localStorage.setItem('usedLanguage', lang)
      },
    },
  }
</script>

<style lang="scss">
  html {
    height: 100%;
    min-height: 100%;

    @mixin visible {
      max-height: 100vh;
      transition: max-height .5s ease-in .5s, padding .5s ease-in .5s;
      overflow: hidden;
    }

    @mixin invisible {
      max-height: 0;
      padding: 0 !important;
      transition: max-height .5s ease-out, padding .5s ease-out;
      overflow: hidden;
    }

    [lang="en-us"] {
      .en-us {
        @include visible
      }

      .de {
        @include invisible
      }
    }

    [lang="de"] {
      .de {
        @include visible
      }

      .en-us {
        @include invisible
      }
    }

    body {
      margin: 0;
      padding: 0;
      height: 100%;
      min-height: 100%;
      display: flex;
      font-family: Roboto, sans-serif;
    }
  }
</style>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .container {
    min-height: 100%;
    width: 100%;
    flex-direction: column;

    .page {
      min-height: calc(100vh - 40px);
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 20px;

      & > * {
        max-width: calc(100% - 56px);
      }
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    .container {
      .page {
        & > *, &:not(:nth-child(1)) li {
          max-width: 100%;
        }

        &:nth-child(1) {
          max-width: calc(100% - 56px);
        }
      }
    }
  }
</style>
