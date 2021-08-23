<template>
    <div class="col"
         :class="colClass"
         :style="colStyle"
    >
        <slot></slot>
    </div>
</template>

<script>
  let validator = (value)=>{
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key=>{
    if(!(['span','offset'].indexOf(key)>=0)){
      valid = false
    }
  })
  return valid
}
  export default {

    name: 'Col',
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      },
      iPad:{
        type:Object,
        validator
      },
      narrowPc:{
        type:Object,
        validator
      },
      pc:{
        type:Object,
        validator
      },
      widePc:{
        type:Object,
        validator,
      }
    },
    data(){
      return{
        gutter: 0,
      }
    },
    methods:{
      createClasses (obj, str = '') {
        if (!obj) {return []}
        let array = []
        if (obj.span) { array.push(`col-${str}${obj.span}`) }
        if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
        return array
      }
    },
    computed:{
      colStyle () {
        let {gutter} = this
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        }
      },
      colClass(){
        let {span, offset, iPad, narrowPc, pc, widePc} = this
        let createClasses = this.createClasses
        return [
          ...createClasses({span, offset}),
          ...createClasses(iPad, 'iPad-'),
          ...createClasses(narrowPc, 'narrow-pc-'),
          ...createClasses(pc, 'pc-'),
          ...createClasses(widePc, 'wide-pc-'),
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


    @media (min-width: 577px) {
        $class-prefix-col: col-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-col}#{$n}{
                width:($n/ 24) * 100%;
            }
        }

        $class-prefix-offset: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-offset}#{$n}{
                margin-left:($n/ 24) * 100%;
            }
        }
    }

    @media (min-width: 769px) {
        $class-prefix-col: col-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-col}#{$n}{
                width:($n/ 24) * 100%;
            }
        }

        $class-prefix-offset: offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-offset}#{$n}{
                margin-left:($n/ 24) * 100%;
            }
        }
    }

    @media (min-width: 993px) {
        $class-prefix-col: col-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-col}#{$n}{
                width:($n/ 24) * 100%;
            }
        }

        $class-prefix-offset: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-offset}#{$n}{
                margin-left:($n/ 24) * 100%;
            }
        }
    }

    @media (min-width: 1200px) {
        $class-prefix-col: col-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-col}#{$n}{
                width:($n/ 24) * 100%;
            }
        }

        $class-prefix-offset: offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix-offset}#{$n}{
                margin-left:($n/ 24) * 100%;
            }
        }
    }


</style>
