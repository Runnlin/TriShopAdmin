<template>
  <div>
    <el-row >
      <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
      <el-tooltip effect="light" placement="right"
        v-for="item in products" :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.name}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>售价：{{item.fee}}</span><br>
          <span>销量：{{item.sales}}</span><br>
          <span>剩余库存：{{item.quantity}}</span>
        </p>
        <el-card style="width: 145px;margin-bottom: 20px;float: left;margin-right: 15px" class="product"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover" @click="editProduct(item)">
            <img :src="item.photoUrl" alt="图片">
          </div>
          <div class="info">
            <div class="title">{{item.name}}</div>
          </div>
          <div class="fee">￥{{item.fee}}</div>
          <i class="el-icon-delete" style="color:red" @click="deleteProduct(item.id)"></i>
        </el-card>
      </el-tooltip>
      <EditForm @onSubmit="loadProducts()" ref="edit"></EditForm>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page='1'
        :page-size='20'
        layout="total, prev, pager, next"
        
        :pager-count="11"
        :total="products.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import EditForm from './EditForm'
import SearchBar from './SearchBar'

export default {
  name: 'Products',
  components: {EditForm, SearchBar},
  data () {
    return {
      products: []
    }
  },
  mounted: function () {
    this.loadProducts()
  },
  methods: {
    loadProducts () {
      var _this = this
      this.$axios.get('/products').then(resp => {
        if(resp && resp.status === 200) {
          _this.products = resp.data
        }
      })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    searchResult () {
      var _this = this
      this.$axios
        .get('/product/search?keywords='+this.$refs.searchBar.keywords, {
        }).then(resp => {
          if(resp && resp.status === 200) {
            _this.products = resp.data
            _this.currentPage = 1
          }
        })
    },
    deleteProduct (id) {
      var _this = this
      this.$confirm('这会永久删除本商品，确定吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios
        .get('/product/delete?id='+id)
        .then(resp => {
          if(resp && resp.status === 200) {
            this.loadProducts()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: "已取消删除"
        })
      })
      
    },
    editProduct (item) {
      this.$refs.edit.dialogFormVisible = true
      this.$refs.edit.form = {
        id: item.id,
        name: item.name,
        photoUrl: item.photoUrl,
        introduction: item.introduction,
        swipes: item.swipes,
        fee: item.fee,
        quantity: item.quantity,
        type: item.type
      }
    }
  }
}
</script>

<style scoped>
  .cover {
    align-content: center;
    margin-bottom: 6px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 170px;
  }

  .title {
    font-size: 14px;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding: 5px;
  }

  .fee {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: center;
    left: 0;
    right: 0;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>
