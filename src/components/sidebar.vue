<template>
  <div class="sidebar">
  	<el-menu default-active="2" theme="dark">

      <el-submenu index="1">
        <template slot="title">导航一</template>

          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>

      </el-submenu>

      <el-submenu index="2">
        <template slot="title">导航一</template>

          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>

</script>

<style>
	
</style>