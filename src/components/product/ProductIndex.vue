// 商品管理
<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu @indexSelect="listByType" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <products class="products-area" ref="productArea"></products>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Products from './Products'

  export default {
    name: 'Product',
    components: {SideMenu, Products},
    methods: {
      listByType () {
        var _this = this
        var type = this.$refs.sideMenu.id
        var url = '/product/types?types='+type
        this.$axios.get(url).then(resp => {
          _this.$refs.productArea.products = resp.data
          _this.$refs.productArea.currentPage = 1
        })
      }
    }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>