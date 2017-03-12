import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import dashboard from '@/components/dashboard'
import system from '@/components/system'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		component: home,
	    children: [
	        { path: '/', components:{default:dashboard,sidebar:system}, name: 'dashboard' },
	        { path: '/system', components: {default:system,sidebar:dashboard}, name: 'system' },
	    ]
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    },

  ]
})
