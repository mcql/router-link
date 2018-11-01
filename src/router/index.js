import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/content/page1'
import Page2 from '@/content/page2'
import Page3 from '@/content/page3'
import Page4 from '@/content/page4'
import Pagex1 from '@/content1/page1'
import Pagex2 from '@/content1/page2'
import Pagex3 from '@/content1/page3'
import Pagex4 from '@/content1/page4'
import Pagea1 from '@/content2/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[{
        path: '/Pagex1',
        name: 'Pagex1',
        component: Pagex1
      },{
        path: '/Pagex2',
        name: 'Pagex2',
        component: Pagex2
      },{
        path: '/Pagex3',
        name: 'Pagex3',
        component: Pagex3
      },{
        path: '/Pagex4',
        name: 'Pagex4',
        component: Pagex4
      }]
    },{
      path: '/Page1',
      name: 'Page1',
      component: Page1,
      children:[{
        path: '/Pagea1/:id',
        name: 'Pagea1',
        component: Pagea1,
      }]
    },{
      path: '/Page2',
      name: 'Page2',
      component: Page2
    },{
      path: '/Page3',
      name: 'Page3',
      component: Page3
    },{
      path: '/Page4',
      name: 'Page4',
      component: Page4
    }
  ]
})
