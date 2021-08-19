import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from "./Button-group"
import Input from "./Input"
import Col from "./Col"
import Row from "./Row"

Vue.component('xia-button', Button)
Vue.component('xia-icon', Icon)
Vue.component('xia-button-group',ButtonGroup)
Vue.component('xia-input',Input)
Vue.component('xia-col',Col)
Vue.component('xia-row',Row)

new Vue({
    el:'#app',
  }
)
