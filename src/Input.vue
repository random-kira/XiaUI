<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <icon name="error" class="inputIcon"></icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>

<script>
  import Icon from "./Icon"
  export default {
    name: 'Input',
    components: {Icon},
    props:{
      value:{
        type: String
      },
      disabled:{
        type: Boolean,
        default: false
      },
      readonly:{
        type: Boolean,
        default: false
      },
      error:{
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:14px;
    $box-shadow-color:rgba(0,0,0,0.5);
    .wrapper{
        font-size: $font-size;
        display: inline-block;
        >.inputIcon{
            vertical-align: middle;
        }
        > input{
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: inherit;
            padding: 0 8px;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error{
            margin-right: .1em;
            &:last-child{
                margin-right: 0;
            }
            >input{
              border-color: #FA5151;
            }
        }
    }
</style>
