<template>
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">Tri-Shop 后台系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.account"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
    <el-form-item style="">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="forget">忘记密码</el-button>
    </el-form-item>
    <el-form-item style="">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="register">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          account: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
        // 登录
      login () {
        this.$axios
          .post('/user/login', {
            account: this.loginForm.account,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {
          })
      },
        // 忘记密码
      forget () {
        this.$axios
            .post('/user/forget?account='+this.loginForm.account)
            .then(successResponse => {
                if (successResponse.data.id !== 0) {
                    alert("账号信息为 \n"+successResponse.data)
                }
            })
            .catch(failResponse => {})
      },
        // 注册
      register () {
          this.$axios
              .post('/user/register', {
                  account: this.loginForm.account,
                  password: this.loginForm.password
              })
              .then(successResponse => {
                console.log(successResponse.data)
                if (successResponse.data.code !== 200) {
                  alert(successResponse.data.resultString)
                }
              })
              .catch(failResponse => {})
      }
    }
  }
</script>

<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>