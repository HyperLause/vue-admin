<template>
  <div id="app">

    <div id="menu">
      <router-link v-for="item in items" :to="{path:item.url}" >{{ item.title }} {{ item.url }}</router-link>
    </div>
      <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
    <el-button type="primary">默认按钮</el-button>

    <el-switch
    on-text="OK"
    off-text="NO"
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          title:"首页",
          url:"/"
        },
        {
          title:"测试",
          url:"test"
        },
        {
          title:"新闻",
          url:"news"
        }
      ],

        radio2: 3
        ,
        value2: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#menu a{color:#F60;display: inline-block;padding:0px 10px;}
</style>
