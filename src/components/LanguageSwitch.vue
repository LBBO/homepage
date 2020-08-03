<template>
  <div class="language-switch">
    <input
      type="checkbox"
      id="language"
      :checked="isChecked"
      @input="$emit('input', $event?.target?.checked ? 'de' : 'en-us')"
      @input.stop="stopPropagation"
    />
    <label for="language"></label>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'LanguageSwitch',
    props: {
      value: String,
    },
    computed: {
      isChecked: function (): boolean {
        return this.$props.value === 'de'
      },
    },
    methods: {
      stopPropagation: (event: Event) => event.stopPropagation(),
    },
  })
</script>

<style scoped lang="scss">
  .language-switch {
    position: absolute;
    top: 23px;
    right: 60px;
    color: #FFFFFF;
    overflow: visible;
    width: 60px;
    z-index: 100;

    &:before {
      content: 'DE';
      position: absolute;
      left: -24px;
      top: 8px;
      font-size: 0.8rem;
    }

    &:after {
      content: 'EN';
      position: absolute;
      right: -22px;
      top: 8px;
      font-size: 0.8rem;
    }

    input {
      display: none;
    }

    label {
      display: block;
      cursor: pointer;
      width: 60px;

      &:before {
        border-radius: 30px;
        content: '';
        background-color: rgba(255, 255, 255, .1);
        height: 30px;
        width: 60px;
        position: absolute;
      }
    }

    label:after {
      //box-sizing: border-box;
      content: '';
    }

    input:checked + label:after {
      background: #000233 url('../assets/flag_de.png') 0 center;
      transition: all .25s ease-in-out;
      transform: translate(0, 0);
    }

    input + label:after {
      background: #EEBB33 url('../assets/flag_usa.png') 0 center;
      transition: all .25s ease-in-out;
      height: 24px;
      width: 24px;
      border: 2px solid #FFFFFF;
      position: absolute;
      top: 3px;
      left: 3px;
      transform: translate(30px, 0);
      border-radius: 30px;
    }
  }
</style>
