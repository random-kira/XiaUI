<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
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
    props:{
      position:{
        type:String,
        default:'top',
        validator(value){
          return ['top','bottom','left','right'].indexOf(value)>=0
        }
      },
      trigger:{
        type:String,
        default:'click',
        validator(value){
          return ['click','hover'].indexOf(value)>=0
        }
      }
    },
    mounted () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClickPopover)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.mouseLeaveClose)
      }
    },
    destroyed () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClickPopover)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.mouseLeaveClose)
      }
    },
    methods:{
      positionContent(){
        const {contentWrapper, triggerWrapper} =  this.$refs
        document.body.appendChild(contentWrapper)
        let {width, height, left, top} = triggerWrapper.getBoundingClientRect()
        let {height:heightC } = contentWrapper.getBoundingClientRect()
        let positions = {
          top:{top:top+window.screenY, left:left+window.screenX},
          bottom:{top:top+height+window.screenY,left:left+window.screenX},
          left:{
            top:top+window.screenY+(height-heightC)/2,
            left:left+window.screenX
          },
          right:{
            top:top+window.screenY+(height-heightC)/2,
            left:left+window.screenX+width
          }
        }

        contentWrapper.style.top = positions[this.position].top + 'px'
        contentWrapper.style.left = positions[this.position].left + 'px'
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
      },
      // get_current_element(event){
      //   let x = event.clientX
      //   let y = event.clientY
      //   return document.elementFromPoint(x, y)
      // },
      mouseLeaveClose(e){
        //获取ele 如果是content 就return
        // let ele = this.get_current_element(e)
        // if( ele === this.$refs.contentWrapper ){return}
        // console.log(ele)
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
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;


        &.position-top{

          transform: translateY(-100%);
          margin-top: -10px;
          &::before, &::after{
              content: '';
              display: block;
              border: 10px solid transparent;
              position: absolute;
              left:10px;
            }
          &::before{
            border-top-color: black;
            border-bottom: none;
            top:100%;
            }
          &::after{
            border-top-color: white;
            border-bottom: none;
            top:calc(100% - 1px);
            }
        }
        &.position-bottom{
            margin-top: 10px;
            &::before, &::after{
                content: '';
                display: block;
                border: 10px solid transparent;
                position: absolute;
                left:10px;
            }
            &::before{
                border-bottom-color: black;
                border-top: none;
                bottom:100%;
            }
            &::after{
                border-bottom-color: white;
                border-top: none;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                content: '';
                display: block;
                border: 10px solid transparent;
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-left-color: black;
                border-right: none;
                left: 100%;
            }
            &::after {
                border-left-color: white;
                border-right: none;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                content: '';
                display: block;
                border: 10px solid transparent;
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-right-color: black;
                border-left: none;
                right: 100%;
            }
            &::after {
                border-right-color: white;
                border-left: none;
                right: calc(100% - 1px);
            }
        }


    }

</style>
