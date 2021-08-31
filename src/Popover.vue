<template>
    <div class="popover" @click="onClickPopover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'Popover',
    data(){
      return {
        visible:false
      }
    },
    methods:{
      positionContent(){
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left+window.screenX+'px'
        this.$refs.contentWrapper.style.top = top+window.screenY+'px'
      },
      onClickDocument(e){
        if (this.$refs.popover.contains(e.target)||this.$refs.contentWrapper.contains(e.target))
          {
            return
          }
          this.close()
        },
      onClickPopover(event){
        if (this.$refs.triggerWrapper.contains(event.target)){
          if(this.visible === true){
            this.close()
          }else {
            this.open()
          }
        }
      },


      open(){
        this.visible = true
        this.$nextTick(()=>{
          this.positionContent()
          document.addEventListener('click',this.onClickDocument)
        })
      },
      close(){
        this.visible = false
        document.removeEventListener('click',this.onClickDocument)
      }
    }

  };
</script>

<style lang="scss" scoped>
    $border-color:#333;
    $border-radius:4px;
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        border: 1px solid greenyellow;
    }

    .content-wrapper{
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background: white;
        margin-top: -10px;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        transform: translateY(-100%);
        &::before, &::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            position: absolute;
            left:10px;
        }
        &::before{
            border-top-color: black;
            top:100%;
        }
        &::after{
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }

</style>
