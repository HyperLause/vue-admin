<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="8" class="logo">
        Penny Admin by Vue
      </el-col>
      <el-col :span="16" class="pn-btn-group">
        <el-menu theme="dark" class="pn-btn-top" mode="horizontal" router>
          <el-menu-item index="/base">基本功能</el-menu-item>
          <el-menu-item index="/system">系统功能</el-menu-item>
          <el-menu-item index="" @click="logout">退出登录</el-menu-item>
        </el-menu>
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
export default{
  mounted(){
    this.checkLogin();
  },
  methods : {
		checkLogin(){
			//如果 未登录 跳转回 首页
			let userid = sessionStorage.getItem("userid");
			let token = sessionStorage.getItem("token");

      //登录
      this.$http.post(this.api.usertoken,{userid:userid,token:token},{
        emulateJSON:true
      }).then(response => {
        // 这里是处理正确的回调
        let res = response.data
        if(res.code != 200){
          //登录失败
          this.$notify({
            title: '错误',
            message: res.result,
            type: 'error'
          });
          this.$router.push({path:'/'});
        }
      }, response => {
        // 这里是处理错误的回调
        console.log(response)
      });
		},
    logout(){
      this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
        sessionStorage.removeItem('userid');
        sessionStorage.removeItem('token');
        this.$router.push({ path: '/' });
        this.$message({
          type: 'success',
          message: '已成功退出!'
        });
			}).catch(() => {

			});
    }
  }
}
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

    .container .header .pn-btn-top{
        float: right;
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
        padding:10px;
    }
</style>
