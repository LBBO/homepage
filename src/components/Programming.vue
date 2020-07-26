<template>
  <div class="page" id="programming">
    <div class="de">
      <h1>Ich kenne mich mit</h1>

      <div class="knowledge">
        <ul>
          <li>
            <img src="img/html.png" title="HTML5" />
          </li>
          <li>
            <img src="img/css.png" title="CSS3" />
          </li>
          <li>
            <a href="https://www.javascript.com/" target="_blank" title="JavaScript">
              <img src="img/javascript.png" />
            </a>
          </li>
          <li>
            <a href="https://angularjs.org/" target="_blank" title="AngularJS">
              <img src="img/angular.png" />
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/" target="_blank" title="NPM">
              <img src="img/npm.png" />
            </a>
          </li>
          <li>
            <a href="https://bower.io/" target="_blank" title="Bower">
              <img src="img/bower.png" />
            </a>
          </li>
          <li>
            <a href="http://gulpjs.com/" target="_blank" title="Gulp">
              <img src="img/gulp.png" />
            </a>
          </li>
          <li>
            <a href="https://www.jetbrains.com/webstorm/" target="_blank" title="Webstorm">
              <img src="img/webstorm.png" />
            </a>
          </li>
        </ul>
      </div>

      <h1>aus und habe damit folgende Projekte geschaffen</h1>

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

    <div class="en-us">
      <h1>I am familiar with</h1>

      <div class="knowledge">
        <ul>
          <li>
            <img src="img/html.png" title="HTML5" />
          </li>
          <li>
            <img src="img/css.png" title="CSS3" />
          </li>
          <li>
            <a href="https://www.javascript.com/" target="_blank" title="JavaScript">
              <img src="img/javascript.png" />
            </a>
          </li>
          <li>
            <a href="https://angularjs.org/" target="_blank" title="AngularJS">
              <img src="img/angular.png" />
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/" target="_blank" title="NPM">
              <img src="img/npm.png" />
            </a>
          </li>
          <li>
            <a href="https://bower.io/" target="_blank" title="Bower">
              <img src="img/bower.png" />
            </a>
          </li>
          <li>
            <a href="http://gulpjs.com/" target="_blank" title="Gulp">
              <img src="img/gulp.png" />
            </a>
          </li>
          <li>
            <a href="https://www.jetbrains.com/webstorm/" target="_blank" title="Webstorm">
              <img src="img/webstorm.png" />
            </a>
          </li>
        </ul>
      </div>

      <h1>and have created the following projects</h1>

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
  export default {
    name: 'Programming',
  }
</script>

<style scoped lang="scss">
  #programming {
    background: #EBEBEB url('../assets/code.png') no-repeat;
    background-size: auto;
    color: #2B2B2B;

    h1 {
      text-align: center;
    }

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

      .projects {
        .project-carousel {
          max-width: 100%;
        }
      }
    }
  }
</style>
