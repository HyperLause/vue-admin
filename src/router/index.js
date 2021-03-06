import Vue from 'vue'
import Router from 'vue-router'


import login from '@/components/login'
import home from '@/components/home'
import dashboard from '@/components/dashboard'


import base_sidebar from '@/components/base/sidebar'
import base_module from '@/components/base/module'

import system_sidebar from '@/components/system/sidebar'
import system_menu from '@/components/system/menu'
import system_table from '@/components/system/table'
import system_form from '@/components/system/form'
import system_module from '@/components/system/module'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'login',
    	component:login
    },

    {
		path: '/base',
		name: 'base',
		component: home,
	    children: [
	        {
	        	path: '/base',
	        	components : {
	        		default:dashboard,
	        		sidebar:base_sidebar
	        	},
	        	name: 'base_dashboard'
	        },
	        {
	        	path: '/base/:subject',
	        	components : {
	        		default:base_module,
	        		sidebar:base_sidebar
	        	},
	        	name: 'base_module'
	        },
	    ]
    },

    {
		path: '/system',
		name: 'system',
		component: home,
	    children: [
	        {
	        	path: '/system',
	        	components : {
	        		default:dashboard,
	        		sidebar:system_sidebar
	        	},
	        	name: 'system_dashboard'
	        },
	        {
	        	path: '/system/menu',
	        	components : {
	        		default:system_menu,
	        		sidebar:system_sidebar
	        	},
	        	name: 'system_menu'
	        },
	        {
	        	path: '/system/table',
	        	components : {
	        		default:system_table,
	        		sidebar:system_sidebar
	        	},
	        	name: 'system_table'
	        },
	        {
	        	path: '/system/form',
	        	components : {
	        		default:system_form,
	        		sidebar:system_sidebar
	        	},
	        	name: 'system_form'
	        },
	        {
	        	path: '/system/:subject',
	        	components : {
	        		default:system_module,
	        		sidebar:system_sidebar
	        	},
	        	name: 'system_module'
	        },
	    ]
    },

  ]
})
