// 后台管理首页
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="about">
    <ul>
      <li>
        TriShop 是20171153班第3组的《软件工程》实验项目
      </li>
    </ul>
    <ul>
      <li>
        成员：陈惠珊、黄楚杰、杨言权、张子雄、庄润林
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
