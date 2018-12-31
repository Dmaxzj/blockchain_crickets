import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Crickets from '@/components/Crickets'
import Market from '@/components/Market'
import WorldCup from '@/components/WorldCup'
import Cricket from '@/components/Cricket'
import Consignment from '@/components/Consignment'
import Buy from '@/components/Buy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: 'user/crickets',
        name: 'mycrickets',
        component: Crickets
      },
      {
        path: 'crickets',
        name: 'allcrickets',
        component: Crickets
      },
      {
        path: 'market',
        name: 'rollcricket',
        component: Market
      },
      {
        path: 'worldcup',
        name: 'worldcup',
        component: WorldCup
      },
      {
        path: 'crickets/:cricketId',
        name: 'cricket',
        component: Cricket
      },
      {
        path: 'market/consignment',
        name: 'consignment',
        component: Consignment
      },
      {
        path: 'market/buy',
        name: 'buy',
        component: Buy
      }]

    },


  ]
})
