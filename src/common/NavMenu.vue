<template>
<el-card :body-style="{padding: '0px'}">
<!-- this.$route.path 确保刷新后还在本页 -->
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1200px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <span style="position: absolute;padding-top: 20px;right: 0%;left: 0%; font-size: 20px;font-weight: bold">TriShop Admin</span>
    </el-menu>
</el-card>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/productmanage', navItem: '商品管理'},
        {name: '/usermanage', navItem: '用户管理'},
        {name: '/statistic', navItem: '统计中心'},
        {name: '/swagger-ui.html', navItem: 'API'}
      ]
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
