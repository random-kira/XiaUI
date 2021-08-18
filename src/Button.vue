<template>
    <button class="xia-button" :class="{[`icon-${iconPosition}`]: true}">
        <xia-icon :name="icon" v-if="icon" class="xia-icon"></xia-icon>
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
            height: 1em;
            width: 1em;
            order: 1;
            margin-right: .1em;
        }
        >.content {
            order:2;
        }
        &.icon-right{
          >.icon{
              order: 2;
              margin-right: 0;
              margin-left: .1em;
          }
            >.content {
                order:1;
            }
        }

    }

</style>
