<template>
    <div class="xia-button-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'Button-Group',
    mounted() {
      for(let node of this.$el.children){
        if(node.nodeName.toLocaleLowerCase() !== 'button'){
          console.warn(`xia-button-group的子元素应该是xia-button，你写的是{node.nodeName}`)
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    .xia-button-group{
        display: inline-flex;
        vertical-align: middle;

        > .xia-button{
            &:not(:first-child){
                margin-left: -1px;
            }
            border-radius: 0;
            &:first-child{
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            &:last-child{
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }

        }
    }
</style>
