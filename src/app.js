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


new Vue({
    el:'#app',
    methods:{
      showToast(message){
        this.$toast(message)
      }
    }
  }
)
