<template>
  <div class="page" id="landing-page">
    <div class="de">
    <span class="name">
        Michael	Kuckuk
    </span>
      <hr />
      <ul>
        <li>Student</li>
        <li>Programmierer</li>
        <li>Hobby-Fotograf</li>
      </ul>
    </div>
    <div class="en-us">
    <span class="name">
        Michael	Kuckuk
    </span>
      <hr />
      <ul>
        <li>Student</li>
        <li>Programmer</li>
        <li>Amateur Photographer</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Landingpage',
  }
</script>

<style scoped lang="scss">
  #landing-page {
    justify-content: center;
    align-items: center;

    > div {
      //background-color: rgba(255, 255, 255, .7);
      color: #FFFFFF;
      padding: 10px;
      font-weight: bold;
      //text-align: center;

      .name {
        font-size: 50px;
      }

      ul {
        font-size: 20px;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;

          &:not(:nth-child(1)):before {
            content: "\2022";
            margin: 0 .2em;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    #landing-page {
      max-width: 100%;
    }
  }
</style>
