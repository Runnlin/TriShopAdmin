// 后台管理首页
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="about">
    <ul>
      <li>
        TriShop 2017115370庄润林
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to TriShop Admin'
    }
  },
  methods: {
    admin () {
      this.$router.replace({path: '/home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.about {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
