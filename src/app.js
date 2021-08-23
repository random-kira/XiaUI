import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from "./Button-group"
import Input from "./Input"
import Col from "./Col"
import Row from "./Row"
import Layout from "./Layout"
import Sider from "./Sider"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Toast from "./Toast"
import plugin from "./plugin"

Vue.component('xia-button', Button)
Vue.component('xia-icon', Icon)
Vue.component('xia-button-group',ButtonGroup)
Vue.component('xia-input',Input)
Vue.component('xia-col',Col)
Vue.component('xia-row',Row)

Vue.component('xia-layout',Layout)
Vue.component('xia-sider',Sider)
Vue.component('xia-content',Content)
Vue.component('xia-footer',Footer)
Vue.component('xia-header',Header)

Vue.component('xia-toast',Toast)
Vue.use(plugin)

import createElement from 'vue'

const h = createElement

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
  created(){
  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position:position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: 3,
      })
    }
  }
})
