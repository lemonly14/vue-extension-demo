<template>
  <div class="z-upload-container">
    <el-button type="primary"
               @click="drawer = true">查看页面图片<i class="el-icon-upload el-icon--right"></i></el-button>

    <el-drawer title="查看页面图片"
               :visible.sync="drawer"
               :show-close="false"
               :modal="false"
               :direction="direction"
               :with-header="false">
      <div class="block">
        <el-image style="width: 100px; height: 100px"
                  :src="img"
                  fit="fill"
                  v-for="(img,index) in imgList"
                  :key="index"></el-image>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    imgList: {
      type: Array,
      default() { }
    }
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      dialogImageUrl: '',
      disabled: false,
    }
  },
  mounted() {
    console.log('imgList', this.imgList)
  },
  methods: {

  }
};
</script>

<style lang="scss" >
.z-upload-container {
  .upload-container {
    .el-upload-dragger {
      width: 180px;
      height: 90px;
    }
  }
  .el-image{
    padding: 10px;
  }
}
</style>
<style lang="scss" scoped>
.z-upload-container {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px 20px;
}
</style>
