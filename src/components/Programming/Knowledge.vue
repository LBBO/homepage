<template>
  <div class="knowledge">
    <ul>
      <li>
        <img
          src="img/html.png"
          alt="HTML5"
        />
      </li>
      <li>
        <img
          src="img/css.png"
          title="CSS3"
          alt="CSS3"
        />
      </li>
      <li>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          <img
            src="img/javascript.png"
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
            src="img/angular.png"
            alt="React"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/"
          target="_blank"
        >
          <img
            src="img/npm.png"
            alt="npm"
          />
        </a>
      </li>
      <li>
        <a
          href="https://bower.io/"
          target="_blank"
        >
          <img
            src="img/bower.png"
            alt="Bower"
          />
        </a>
      </li>
      <li>
        <a
          href="https://webpack.js.org/"
          target="_blank"
        >
          <img
            src="img/gulp.png"
            alt="Webpack"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.jetbrains.com/webstorm/"
          target="_blank"
        >
          <img
            src="img/webstorm.png"
            alt="Webstorm"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Knowledge',
  }
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
