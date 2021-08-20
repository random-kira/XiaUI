<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'Layout',
    data(){
      return{
        layoutClass:{
          hasSider: false
        }
      }
    }
  ,
    mounted() {
      this.$children.forEach((vm)=>{
        console.log(vm.$options.name)
        if(vm.$options.name==='Sider'){
            this.layoutClass.hasSider = true
        }
      })
    }
  };
</script>

<style lang="scss" scoped>
  .layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
        flex-direction: row;
    }
  }

</style>
