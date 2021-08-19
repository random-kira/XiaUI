<template>
    <div class="col"
         :style="{colStyle}"
         :class="colClass"
    >
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'Col',
    props:{
      span:{
        type:Number
      },
      offset:{
        type:Number
      }
    },
    data(){
      return{
        gutter: 0,
      }
    },
    computed:{
      colStyle(){
        return{
          colStyle:{
            paddingLeft:this.gutter/2+'px',
            paddingRight:this.gutter/2+'px'
          }
        }
      },
      colClass(){
        let {span, offset} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      }
    }
  };
</script>

<style lang="scss" scoped>
    .col{
    height: 100px;
    background: grey;
    border: 1px solid darkgrey;
    display: inline-block;
    flex-shrink: 0;

    $class-prefix-col: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix-col}#{$n}{
            width:($n/ 24) * 100%;
            }
        }

    $class-prefix-offset: offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix-offset}#{$n}{
            margin-left:($n/ 24) * 100%;
            }
        }
    }

</style>
