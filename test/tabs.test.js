const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsHead from '../src/Tabs-Head'
import TabsBody from '../src/Tabs-Body'
import TabsItem from '../src/Tabs-Item'
import TabsPane from '../src/Tabs-Pane'

Vue.component('xia-tabs', Tabs)
Vue.component('xia-tabs-head', TabsHead)
Vue.component('xia-tabs-body', TabsBody)
Vue.component('xia-tabs-item', TabsItem)
Vue.component('xia-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <xia-tabs selected="one">
        <xia-tabs-head>
          <xia-tabs-item name="one"> one </xia-tabs-item>
          <xia-tabs-item name="two"> two </xia-tabs-item>
          <xia-tabs-item name="three"> three </xia-tabs-item>
        </xia-tabs-head>
        <xia-tabs-body>
          <xia-tabs-pane name="one"> 111111 </xia-tabs-pane>
          <xia-tabs-pane name="two"> 222222 </xia-tabs-pane>
          <xia-tabs-pane name="three"> 333333 </xia-tabs-pane>
        </xia-tabs-body>
      </xia-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="one"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
})
