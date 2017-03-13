<template>
  	<el-menu default-active="2" theme="dark" router unique-opened=“true” :default-active="$route.path">
	        <el-menu-item v-for="item in items" :index="item.path">{{ item.title }}</el-menu-item>
    </el-menu>
</template>




<script>
export default{
	data(){
		return{
			items : [
				{
					path:'/system/sites',
					title:'网站参数配置',
				},
				{
					path:'/system/group',
					title:'权限组管理',
				},
				{
					path:'/system/admin',
					title:'高级账户管理',
				}
			]
		}
	}
}
</script>










<style>
	
</style>