// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'


//统一接口地址设置
import api from './api';
//将api 赋值给全局 属性
Vue.prototype.api = api;


//全局函数
import utils from './utils';
Vue.prototype.$utils = utils;


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
