<template>
  <div class="knowledge">
    <ul>
      <li>
        <img
          src="../../assets/HTML5_Logo.svg"
          title="HTML5 Logo by World Wide Web Consortium"
          alt="HTML5"
        />
      </li>
      <li>
        <img
          src="../../assets/CSS3_logo_and_wordmark.svg"
          title="CSS3 - Rudloff / CC BY (https://creativecommons.org/licenses/by/3.0)"
          alt="CSS3"
        />
      </li>
      <li>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          <img
            src="../../assets/ts-logo-512.svg"
            title="TypeScript"
            alt="TypeScript"
          />
        </a>
      </li>
      <li>
        <a
          href="https://reactjs.org/"
          target="_blank"
        >
          <img
            src="../../assets/React-icon.svg"
            alt="React"
            title="React - Facebook / Public domain"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/"
          target="_blank"
        >
          <img
            src="../../assets/npm-logo-red.svg"
            title="npm, Inc. / CC BY-SA 4.0"
            alt="npm"
          />
        </a>
      </li>
      <li>
        <a
          href="https://webpack.js.org/"
          target="_blank"
        >
          <img
            src="../../assets/webpack-icon.svg"
            alt="Webpack"
            title="Webpack"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.jetbrains.com/webstorm/"
          target="_blank"
        >
          <img
            src="../../assets/icon-webstorm.svg"
            title="Webstorm"
            alt="Webstorm"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Knowledge',
  })
</script>

<style scoped lang="scss">
  .knowledge {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      max-width: 800px;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;

      li {
        padding: 30px;
        display: inline-block;

        img, svg {
          width: 100px;
          height: 100px;
          max-width: 100px;
          max-height: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 1142px) {
    .knowledge {
      ul {
        max-width: 520px;

        li {
          padding: 30px;

          img, svg {
            max-width: 70px;
            max-height: 70px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .knowledge {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        max-width: 220px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;

        li {
          padding: 30px;
          display: inline-block;

          img, svg {
            max-width: 50px;
            max-height: 50px;
          }
        }
      }
    }
  }
</style>
