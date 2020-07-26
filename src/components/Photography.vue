<template>
  <div class="page" id="photography">
    <div class="de">
      <div>
        <div class="intro">
          <h1>Außerdem beschäftige ich mich sehr gerne mit der Fotografie</h1>
        </div>

        <div class="photoOverview"></div> <!-- content is created by javascript -->
      </div>
    </div>

    <div class="en-us">
      <div>
        <div class="intro">
          <h1>Another interest of mine is photography</h1>
        </div>

        <div class="photoOverview"></div> <!-- content is created by javascript -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Photography",
  }
</script>

<style scoped lang="scss">
  #photography {
    background-color: #BFBFBF;

    > div > div {
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
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    #photography {
      > div > div {
        .photoOverview {
          width: 80%;

          .picture {
            width: 200px;
            height: 200px;
            margin-top: 40px;
          }
        }
      }

    }
  }

  @media screen and (max-width: 600px) {
    #photography {
      > div > div {
        .photoOverview {
          width: 70%;

          .picture {
            width: 100px;
            height: 100px;
            margin-top: 25px;
          }
        }
      }
    }
  }

</style>
