<template>
  	<el-menu default-active="2" theme="dark" router unique-opened=“true” :default-active="$route.path">

      <el-submenu index="1">
            <template slot="title">系统设置</template>
	        <el-menu-item index="/system/sites">网站参数配置</el-menu-item>
	        <el-menu-item index="/system/admin">高级账户管理</el-menu-item>
      </el-submenu>

    </el-menu>
</template>

<script>

</script>

<style>
	
</style>