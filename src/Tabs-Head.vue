<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Tabs-Head',
    inject:['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected',(item, vm)=>{
            let {width, left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left}px`
      })
    }
  };
</script>

<style lang="scss" scoped>
    $tabs-height: 40px;
    $border-color: #ddd;
    $blue:blue;
    .tabs-head{
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        border: 1px solid $border-color;
        position: relative;
        > .line{
            position: absolute;
            bottom:0;
            border-bottom: 1px solid $blue;
            transition: all 250ms linear;
        }
        > .actions-wrapper{
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>
