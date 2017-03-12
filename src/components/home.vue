<template>
  <el-row class="container">

    <el-col :span="24" class="header">
      <el-col :span="8" class="logo">
        Penny Admin by Vue
      </el-col>
      <el-col :span="16" class="pn-btn-group">
        <router-link :to="{path:'/'}">信息管理</router-link>
        <router-link :to="{path:'/system'}">系统设置</router-link>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside>
        <router-view name="sidebar"></router-view>
      </aside>
      <section class="content">
        <router-view></router-view>
      </section>
    </el-col>
  </el-row>
</template>

<script>

</script>

<style>
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .container .header {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    color: #c0ccda;
  }

  .container .header .logo {
    font-size: 20px;
    color: #FFF;
    text-indent:1em;
  }

  .container .header .pn-btn-group{
    text-align: right;
  }

  .pn-btn-group a{
    color:#FFF;
  }

  .main {
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  .main aside {
    width: 230px;
  }

  .content {
    background: #f1f2f7;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 230px;
    overflow-y: scroll;
    padding: 20px;
  }
</style>