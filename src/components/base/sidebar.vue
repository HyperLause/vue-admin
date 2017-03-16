<template>
  <el-menu theme="dark" router unique-opened :default-active="$route.path">
    <el-submenu v-for="item in items" :index="'i'+item.id" :key="item.id">
      <template slot="title">{{ item.label }}</template>
      <el-menu-item v-for="child in item.children" :index="'/base/'+child.id" :key="child.id">{{ child.label }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<script>
export default {
  data() {
    return {
      items : []
    }
  },
  mounted() {
    this.getItems();
  },
  methods : {
    getItems() {
      //console.log(this.api.menu)
      this.$http.get(this.api.menu).then(response => {
        // 这里是处理正确的回调
        this.items = response.data
      }, response => {
        // 这里是处理错误的回调
        console.log(response)
      });
    }
  }
}

/*

    items的数据格式
            [
                {
                    index : 1,
                    title : '内容管理',
                    children : [
                        {
                            path : '/base/news',
                            title : '新闻管理'
                        },
                        {
                            path : '/base/goods',
                            title : '商品管理'
                        }
                    ]
                },
                {
                    index : 2,
                    title : '微信管理',
                    children : [
                        {
                            path : '/base/wxconfig',
                            title : '微信配置'
                        },
                        {
                            path : '/base/wxuser',
                            title : '微信用户管理'
                        }
                    ]
                }
            ]
*/
</script>





<style>

</style>
