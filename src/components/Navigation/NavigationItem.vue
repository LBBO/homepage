<template>
  <a
    :href="`#${$props.id}`"
    @click="onClick"
  >
    <span />
  </a>
</template>

<script lang="ts">
  export default {
    name: 'NavigationItem',
    props: {
      id: String,
    },
    methods: {
      onClick: function (event: Event) {
        event.preventDefault()
        document.querySelector(`#${this.$props.id}`)
          ?.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          })
      },
    },
  }
</script>

<style scoped lang="scss">
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
</style>
