<template>
  <el-form :model="account" :rules="rules" ref="account" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;" class="remember">
      <el-button type="primary" style="width:100%;" :loading="loading" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        account: {
          username: 'admin',
          password: '123456'
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      };
    },
    methods : {
      login(){
        this.$refs.account.validate(valid => {
          if(valid){
            this.loading = true;
            let userParams = {
              username : this.account.username,
              password : this.account.password
            }
            //登录
            this.$http.post(this.api.user,userParams,{
              emulateJSON:true
            }).then(response => {
              // 这里是处理正确的回调
              let res = response.data
              if(typeof res == 'string'){
                res = JSON.parse(res);
              }
              console.log(typeof res);
              console.log(res);
              if(res.code == 200){
                //登录成功 收到token和 用户id 存储session
                sessionStorage.setItem('userid', res.result.userid);
                sessionStorage.setItem('token', res.result.token);
                this.$router.push({ path: '/system/table' });
                this.$message({
                  type: 'success',
                  message: '已成功登录!'
                });
              }else{
                //登录失败
                this.$notify({
                  title: '错误',
                  message: res.result,
                  type: 'error'
                });
                this.loading = false;
              }
            }, response => {
              // 这里是处理错误的回调
              console.log(response)
              this.loading = false;
            });
          }else{
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    border: 2px solid #8492A6;
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 35px 0px 45px 0px;
  }
</style>
