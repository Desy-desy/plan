import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jdqs from '../views/Jdqs.vue'
import Lol from '../views/Lol.vue'
import Xx from '../views/Xx.vue'
import Chwl from '../views/Chwl.vue'
import Zjyx from '../views/Zjyx.vue'
import Hpjy from '../views/Hpjy.vue'
import Cf from '../views/Cf.vue'
import Yz from '../views/Yz.vue'
import Ecy from '../views/Ecy.vue'
import Dnf from '../views/Dnf.vue'
import Bx from '../views/Bx.vue'
import Yqk from '../views/Yqk.vue'
import Wdsj from '../views/Wdsj.vue'
import Wz from '../views/WZ.vue'
import Wzrytv from '../views/Wzrytv.vue'
import Mn from '../views/Mn.vue'
import Gf from '../views/Gf.vue'
import Mnv from '../views/WZRY/Mnv.vue'
import Yx from '../views/Yx.vue'
import Df from '../views/Df.vue'
import All from '../views/JDQS/All.vue'
import Lxs from '../views/JDQS/Lxs.vue'
import Zy from '../views/JDQS/Zy.vue'
import Mnnv from '../views/JDQS/Mnv.vue'
import Fyt from '../views/JDQS/Fyt.vue'
import Ds from '../views/JDQS/Ds.vue'
import Jsq from '../views/JDQS/Jsq.vue'
import Lolall from '../views/LOL/Lolall.vue'
import Jj from '../views/LOL/Jj.vue'
import Yd from '../views/LOL/Yd.vue'
import Ns from '../views/LOL/Ns.vue'
import Lolyx from '../views/LOL/Lolyx.vue'
import Lolyqw from '../views/LOL/Lolyqw.vue'
import Xxall from '../views/XX/Xxall.vue'
import Qa from '../views/XX/Qa.vue'
import Hs from '../views/XX/Hs.vue'
import Xxxx from '../views/XX/Xxxx.vue'
import Tk from '../views/XX/Tk.vue'
import Wd from '../views/XX/Wd.vue'
import Nt from '../views/XX/Nt.vue'
import Yq from '../views/XX/Yq.vue'
import Xxyz from '../views/XX/Xxyz.vue'
import Netgame from '../views/Netgame.vue'
import Hot from '../views/Netgame.vue'
import Up from '../components/Up.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',redirect:"home"},
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  { 
    path: '/jdqs', 
    name:'Jdqs',
    component: Jdqs,
    children:[
      {path: '/jdqs', redirect:'/jdqs/all', component: All },
      {path: '/jdqs/all', component: All },
      {path: '/jdqs/lxs', component: Lxs },
      {path: '/jdqs/zy', component: Zy },
      {path: '/jdqs/mnv', component: Mnnv },
      {path: '/jdqs/fyt', component: Fyt },
      {path: '/jdqs/ds', component: Ds },
      {path: '/jdqs/jsq', component: Jsq }
    ]
  },
  { 
    path: '/lol', 
    name:'Lol',
    component: Lol ,
    children:[
      {path: '/lol', redirect: '/lol/lolall' ,component:Lolall },
      {path: '/lol/lolall', component: Lolall },
      {path: '/lol/jj', component: Jj },
      {path: '/lol/yd', component: Yd },
      {path: '/lol/ns', component: Ns },
      {path: '/lol/lolyx', component: Lolyx },
      {path: '/lol/lolyqw', component: Lolyqw }
    ]
  },
  { 
    path: '/xx', 
    name:'Xx',
    component: Xx ,
    children:[
      {path: '/xx', redirect:'/xx/xxall', component: Xxall },
      {path: '/xx/xxall', component: Xxall },
      {path: '/xx/qa', component: Qa },
      {path: '/xx/hs', component: Hs },
      {path: '/xx/xxxx', component: Xxxx },
      {path: '/xx/tk', component: Tk },
      {path: '/xx/wd', component: Wd },
      {path: '/xx/nt', component: Nt },
      {path: '/xx/yq', component: Yq },
      {path: '/xx/xxyz', component: Xxyz }
    ]
  },
  { 
    path: '/chwl', 
    name:'Chwl',
    component: Chwl 
  },
  { 
    path: '/zjyx', 
    name:'Zjyx',
    component: Zjyx 
  },
  { 
    path: '/hpjy', 
    name:'Hpjy',
    component: Hpjy 
  },
  { 
    path: '/cf', 
    name:'Cf',
    component: Cf 
  },
  { 
    path: '/yz', 
    name:'Yz',
    component: Yz 
  },
  { 
    path: '/ecy', 
    name:'Ecy',
    component: Ecy 
  },
  { 
    path: '/dnf', 
    name:'Dnf',
    component: Dnf 
  },
  { 
    path: '/bx', 
    name:'Bx',
    component: Bx 
  },
  { 
    path: '/yqk', 
    name:'Yqk',
    component: Yqk 
  },
  { 
    path: '/wdsj', 
    name:'Wdsj',
    component: Wdsj 
  },
  { 
    path: '/wz', 
    component: Wz,
    children:[
      {path: '/wz', redirect:'/wz/wzrytv', component: Wzrytv },
      {path: '/wz/wzrytv', component: Wzrytv },
      {path: '/wz/mn', component: Mn },
      {path: '/wz/gf', component: Gf },
      {path: '/wz/mnv', component: Mnv },
      {path: '/wz/yx', component: Yx },
      {path: '/wz/df', component: Df }
    ]
  },
  {
    path:'/netgame',
    component: Netgame
  },
  ,
  {
    path:'/hot',
    component: Hot
  },
  {
    path:'/up',
    component: Up
  }
  
  
  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
