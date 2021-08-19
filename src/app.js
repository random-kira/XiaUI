import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from "./Button-group"
import Input from "./Input"

Vue.component('xia-button', Button)
Vue.component('xia-icon', Icon)
Vue.component('xia-button-group',ButtonGroup)
Vue.component('xia-input',Input)

new Vue({
    el:'#app',
  }
)
