<template>
  <div class="z-upload-container">
    <el-button type="primary"
               @click="drawer = true">上传<i class="el-icon-upload el-icon--right"></i></el-button>

    <el-drawer title="图片上传"
               :visible.sync="drawer"
               :show-close="false"
               :modal="false"
               :direction="direction"
               :with-header="false"
               :before-close="handleClose">

      <div style="padding: 20px"
           v-if="drawer">
        <el-upload multiple
                   action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-change="handleImgSuccess"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove"
                   :auto-upload="false">
          <i class="el-icon-plus"></i>
        </el-upload>

        <el-dialog :visible.sync="dialogVisible"
                   :modal-append-to-body="false">
          <el-carousel trigger="click"
                       height="550px">
            <el-carousel-item v-for="item in srcList"
                              :key="item">
              <img style="background-size: cover;"
                   width="100%"
                   height="100%"
                   :src="item"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </el-dialog>

      </div>

    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      srcList: []
    }
  },
  methods: {
    handleImgSuccess(res, file) {
      // browser 返回的都是 Promise
      const sending = browser.runtime.sendMessage({ content: "图片上传成功", type: 'upload' });
      sending.then(this.handleResponse, this.handleError);
      this.srcList.push(res.url)
      // document.getElementById('kw').value = "测试获取 dom 并修改 input 框数据"
    },
    handleClose(done) {
      this.srcList = []
      done();
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogVisible = true;
    },
    handleResponse(message) {
      console.log(`background script sent a response: ${message.response}`);
    },
    handleError(error) {
      console.log(`Error: ${error}`);
    },
    handleDownload(file) {
      console.log(file);
    }
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
