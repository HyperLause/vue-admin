import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import dashboard from '@/components/dashboard'
import system from '@/components/system'
import login from '@/components/login'
import sidebar from '@/components/sidebar'
import module from '@/components/module'
import mainbar from '@/components/mainbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'home',
		component: home,
	    children: [
	        {
	        	path: '/', 
	        	components : {
	        		default:dashboard,
	        		sidebar:sidebar
	        	}, 
	        	name: 'dashboard' 
	        },
	        { 
	        	path: '/system', 
	        	components: {
	        		default:dashboard,
	        		sidebar:system
	        	}, 
	        	name: 'system' 
	        },
	        {
	        	path: '/module/:subject', 
	        	components : {
	        		default:module,
	        		sidebar:sidebar
	        	}, 
	        	name: 'module' 
	        },
	        {
	        	path: '/system/:subject', 
	        	components : {
	        		default:mainbar,
	        		sidebar:system
	        	}, 
	        	name: 'mainbar' 
	        },
	    ]
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    },

  ]
})
