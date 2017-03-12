<template>
  	<el-menu default-active="2" theme="dark" router unique-opened=“true” :default-active="$route.path">

      <el-submenu index="1">
            <template slot="title">内容管理</template>
	        <el-menu-item index="/module/news">新闻管理</el-menu-item>
	        <el-menu-item index="/module/goods">商品管理</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
            <template slot="title">微信管理</template>
            <el-menu-item index="/module/wxconfig">微信参数设置</el-menu-item>
            <el-menu-item index="/module/wxuser">微信用户</el-menu-item>
      </el-submenu>

    </el-menu>
</template>









<script>

</script>

<style>
	
</style>