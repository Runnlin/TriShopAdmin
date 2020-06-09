<template>
  <div>
    <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"></i>
    <!-- 下面的sync同步控制前面的属性 -->
    <el-dialog title="添加/修改商品"
           :visible.sync="dialogFormVisible"
           @close="clear">
    <el-form v-model="form" style="text-align:left" ref="dataForm">
      <el-form-item label="商品名字" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品封面图" :label-width="formLabelWidth" prop="photo_url">
        <el-input v-model="form.photoUrl" autocomplete="off" placeholder="图片 URL"></el-input>
        <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
      </el-form-item>
      <el-form-item label="商品介绍" :label-width="formLabelWidth" prop="introduction">
        <el-input type="textarea"  v-model="form.introduction" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品轮播图" :label-width="formLabelWidth" prop="swipe">
        <el-input type="textarea"  v-model="form.swipe" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品售价" :label-width="formLabelWidth" prop="fee">
        <el-input v-model="form.fee" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品库存" :label-width="formLabelWidth" prop="quantity">
        <el-input v-model="form.quantity" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" :label-width="formLabelWidth" prop="type">
        <el-select v-model="form.type" placeholder="选择分类">
          <el-option label="手机" value="1"></el-option>
          <el-option label="运动" value="2"></el-option>
          <el-option label="零食" value="3"></el-option>
          <el-option label="女装" value="4"></el-option>
          <el-option label="男装" value="5"></el-option>
          <el-option label="家电" value="6"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取消</el-button>
      <el-button type="primart" @click="onSubmit">确定</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import ImgUpload from './ImgUpload'

export default {
  name: 'EditForm',
  components: {ImgUpload},
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        photoUrl: '',
        introduction: '',
        swipe: '',
        fee: '',
        quantity: '',
        type: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    clear () {
      this.form = {
        name: '',
        photoUrl: '',
        introduction: '',
        swipe: '',
        fee: '',
        quantity: '',
        type: ''
      }
    },
    onSubmit () {
      this.$axios
        .post('/product/add', {
          name: this.form.name,
          photoUrl: this.form.photoUrl,
          introduction: this.form.introduction.replace("\"","\'").replace("\n",""),
          swipe: this.form.swipe.replace("\"","\'").replace("\n",""),
          fee: this.form.fee,
          quantity: this.form.quantity,
          type: this.form.type
        })
        .then(resp => {
          if (resp && resp.status === 200) {
            this.dialogFormVisible = false
            this.$emit('onSubmit') // Products.vue
          }
        })
    },
    uploadImg () {
      this.form.photoUrl = this.$refs.imgUpload.url
    }
  }
}
</script>

<style scoped>
  .el-icon-circle-plus-outline {
    margin: 50px 0 0 20px;
    font-size: 100px;
    float: left;
    cursor: pointer;
  }
</style>
