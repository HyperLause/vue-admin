
export default{
	checkLogin(that){
		//console.log(path);
		let path = that.$route.path
		if(path != '/'){
			//如果 未登录 跳转回 首页
			let userid = sessionStorage.getItem("userid");
			if(!userid){
				that.$router.push({path:'/'});
			}
		}
	}
}
