<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>

export default{
  mounted(){
    this.checkLogin();
  },
  methods:{
		checkLogin(){
			//console.log(path);
			let path = this.$route.path
			if(path != '/'){
				//如果 未登录 跳转回 首页
				let userid = sessionStorage.getItem("userid");
				if(!userid){
					this.$router.push({path:'/'});
				}
			}
		}
  }
}

</script>

<style>
	body {
		margin: 0px;
		padding: 0px;
		background: #1F2D3D;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
	}

	#app {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
</style>
