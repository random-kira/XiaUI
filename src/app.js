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
import Tabs from "./Tabs"
import TabsBody from "./Tabs-Body"
import TabsHead from "./Tabs-Head"
import TabsItem from "./Tabs-Item"
import TabsPane from "./Tabs-Pane"

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

Vue.component('xia-tabs',Tabs)
Vue.component('xia-tabs-body',TabsBody)
Vue.component('xia-tabs-head',TabsHead)
Vue.component('xia-tabs-item',TabsItem)
Vue.component('xia-tabs-pane',TabsPane)

import createElement from 'vue'

const h = createElement

new Vue({
  el: '#app',
  data:{
    selectedTab: 'two'
  },
  created(){
  },
  methods: {

  }
})
