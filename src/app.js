import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import  ButtonGroup from "./Button-group"

Vue.component('xia-button', Button)
Vue.component('xia-icon', Icon)
Vue.component('xia-button-group',ButtonGroup)

new Vue({
    el:'#app',
  }
)
