<template>
  <div class="page" id="programming">
    <div>
      <h1 class="de">Ich kenne mich mit</h1>
      <h1 class="en-us">I am familiar with</h1>

      <Knowledge />

      <h1 class="de">aus und habe damit folgende Projekte geschaffen</h1>
      <h1 class="en-us">and have created the following projects</h1>

      <div class="projects">
        <div class="project-carousel">
          <header>
            <h2>
              <span class="year-switcher prev-year">&#9664;</span>
              <span class="title">
                        <span class="year"></span>
                        <aside class="counter"></aside>
                    </span>
              <span class="year-switcher next-year">&#9654;</span>
            </h2>
          </header>
          <a href="#" target="_blank">
            <div class="screenshots">
              <span class="project-switcher prev-project">&#9664;</span>
              <img src="" />
              <span class="project-switcher next-project">&#9654;</span>
            </div>
            <div class="description">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Knowledge from './Knowledge.vue'

  export default {
    name: 'Programming',
    components: { Knowledge },
  }
</script>

<style scoped lang="scss">
  #programming {
    background: #EBEBEB url('../../assets/code.png') no-repeat;
    background-size: auto;
    color: #2B2B2B;

    h1 {
      text-align: center;
    }

    .projects {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px 0;

      .project-carousel {
        $projectCarouselWidth: 700px;
        color: #EBEBEB;
        width: $projectCarouselWidth;
        max-width: $projectCarouselWidth;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #3E3E3E;
        border-radius: 10px;
        padding: 0 10px;

        header {
          width: 100%;

          h2 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            span {
              display: flex;

              &.year-switcher {
                margin: 0 15px;
                cursor: pointer;
                font-weight: normal;

                &.prev-year {
                }

                &.next-year {
                }
              }

              &.title {
                display: flex;
                flex-direction: column;

                aside {
                  font-size: medium;
                  font-weight: normal;
                }
              }
            }
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        & > a {
          display: flex;
          flex-direction: column;
          align-items: center;

          .screenshots {
            position: relative;

            img {
              width: $projectCarouselWidth;
            }

            .project-switcher {
              font-weight: normal;
              position: absolute;
              margin: 0;
              top: calc(50% - 14.5px);
              padding: 10px;
              background-color: rgba(0, 0, 0, .5);
              border-radius: 100%;
              width: 21px;
              text-align: center;

              &.disabled {
                cursor: default;
                color: #6F6F6F;
              }

              &.prev-project {
                left: 15px;
              }

              &.next-project {
                right: 15px;
              }
            }
          }

          .description {
            padding: 20px;

            a {
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1142px) { //the extra 42px get rid of some weird bug, that was just the simplest fix
    #programming {
      background: #EBEBEB;

      h1 {
        text-align: center;
      }

      .projects {
        .project-carousel {
          width: 100%;
          max-width: 700px;
          border-radius: 0;
          padding: 0;

          header {
            h2 {
              span {
                &.title {
                  aside {
                    font-size: medium;
                    font-weight: normal;
                  }
                }
              }
            }
          }

          a {
            .screenshots {
              img {
                width: 100%;
              }

              .project-switcher {
                //display: none;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    #programming {
      .projects {
        .project-carousel {
          max-width: 100%;
        }
      }
    }
  }
</style>
