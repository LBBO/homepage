<template>
  <div class="footer page">
    <div class="de">
      <ul>
        <li><a href="https://twitter.com/LBBO_" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://github.com/LBBO" target="_blank"><i class="fab fa-github"></i></a></li>
        <li><a href="{{email}}"><i class="far fa-envelope"></i></a></li>
      </ul>
    </div>

    <div class="en-us">
      <ul>
        <li><a href="https://twitter.com/LBBO_" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://github.com/LBBO" target="_blank"><i class="fab fa-github"></i></a></li>
        <li><a class="emailLink"><i class="far fa-envelope"></i></a></li>
      </ul>
    </div>

    <svg width="0" height="0">
      <radialGradient id="instagramGradient" r="150%" cx="30%" cy="107%">
        <stop stop-color="#fdf497" offset="0" />
        <stop stop-color="#fdf497" offset="0.05" />
        <stop stop-color="#fd5949" offset="0.45" />
        <stop stop-color="#d6249f" offset="0.6" />
        <stop stop-color="#285AEB" offset="0.9" />
      </radialGradient>
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Footer',
    data: () => (
      {
        email: ['mailto', ':', 'mdk', '@', 'kuckuk', '.', 'com'].join(''),
      }
    ),
  }
</script>

<style scoped lang="scss">
  .footer {
    //background-color: #717171;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/IMG_3247.jpg');
    background-size: cover;

    & > div {
      flex-grow: 1;
      color: #FFFFFF;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
      position: relative;
      overflow: hidden;

      h1 {
        position: absolute;
        top: 10%;
      }

      ul {
        align-self: center;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        flex-wrap: wrap;
        padding: 0;

        li {
          display: inline-block;
          font-size: 5em;

          a, a:active, a:visited {
            color: inherit;
          }

          &:hover {
            cursor: pointer;

            .fa-twitter {
              color: #1DA0F1;
            }

            .fa-github {
              color: #171515;
              background-color: #FFF;
              border-radius: 500px;
            }

            .fa-instagram * {
              fill: url(#instagramGradient);
            }

            .fa-envelope {
              color: #E55F4C;
            }

            .fa-discord {
              color: #8B9DFE;
              //color: #8191E9;
            }
          }
        }
      }
    }
  }
</style>
