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
          account: 'admin',
          password: 'admin'
        },
        responseResult: []
      }
    },
    methods: {
        // 登录
      login () {
        var _this = this
        this.$axios
          .post('/user/login', {
            account: this.loginForm.account,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              // 把登录信息发给store
              _this.$store.commit('login', successResponse.data.resultString)
              var path = this.$route.query.redirects
              this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
            } else {
              alert(successResponse.data.resultString)
              this.loginForm.account = ''
              this.loginForm.password = ''
            }
            console.log(this.$store.state)
          })
          .catch(failResponse => {
            console.log("登录发生错误: "+ failResponse)
          })
      },
        // 忘记密码
      forget () {
        this.$axios
            .post('/user/forget?account='+this.loginForm.account)
            .then(successResponse => {
                if (successResponse.data.code === 200) {
                  alert("您的密码为 \n"+successResponse.data.resultString)
                } else {
                  alert(successResponse.data.resultString)
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