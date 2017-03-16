<template>
  <el-menu theme="dark" router unique-opened :default-active="$route.path">
    <el-menu-item v-for="item in items" :index="item.path" :key="item.id">{{ item.title }}</el-menu-item>
  </el-menu>
</template>




<script>
export default{
	data() {
		return {
			items : [
        {
          id : '100',
          path:'/system/menu',
          title:'基本功能菜单管理',
        },
				{
          id : '200',
					path:'/system/table',
					title:'表格',
				},
				{
          id : '300',
					path:'/system/form',
					title:'表单',
				},
				{
          id : '400',
					path:'/system/sites',
					title:'网站参数配置',
				},
				{
          id : '500',
					path:'/system/group',
					title:'权限组管理',
				},
				{
          id : '600',
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
