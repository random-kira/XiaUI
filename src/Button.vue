<template>
    <button class="xia-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <xia-icon :name="icon" v-if="icon&&(!loading)" class="icon"></xia-icon>
        <xia-icon name="loading" v-if="loading" class="loading icon"></xia-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  import Icon from "./Icon"
  export default {
    name: 'Button',
    components: {Icon},
    props:{
      icon:{},
      iconPosition:{
        type: String,
        default:'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right');
        }
      },
      loading:{
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
    $button-height: 32px;
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .xia-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        >.loading {
            animation: spin 1s infinite linear;
        }
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        >.icon  {
            order: 1;
            margin-right: .1em;
        }
        >.content {
            order:2;
        }
    }

    .icon-right{
        >.icon{
            order: 2;
            margin-right: 0;
            margin-left: .1em;
        }
        >.content {
            order:1;
        }
    }

</style>
