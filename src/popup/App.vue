<template>
  <div class="popup-container">
    <!-- <el-button type="primary"
               @click="getData">
      获取豆瓣电影接口
    </el-button> -->
    <el-upload action=""
               list-type="picture-card"
               :limit='1'
               :on-preview="handlePictureCardPreview"
               :http-request="uploadImg"
               :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <div class="solve-container">
      <div>
        <div v-for="(item,index) in rootList"
             :key="index + 'item'">识别分类：{{item}}</div>
      </div>
      <div>
        <div class="keyword"
             v-for="(item,index) in keywordLsit"
             :key="index + 'item1'"
             @click="searchKey(item)">关键词：{{item}}</div>
      </div>

    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%"
           :src="dialogImageUrl"
           alt="">
    </el-dialog>
  </div>
</template>

<script>
// 引入 background 中的方法
import { getDataSuccess } from "@/background";
//引入百度识别api
import { getInfo } from "@/api";
export default {
  name: "app",
  data() {
    return {
      q: "",
      dialogImageUrl: '',
      dialogVisible: false,
      rootList: [],
      keywordLsit: [],
      info: {
        title: '',
        episodes_count: '',
        images: {},
      }
    };
  },
  methods: {
    // 移除上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.showInput()
      this.keywordLsit = []
      this.rootList = []
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadImg(content) {
      this.hideInput()
      const bgPage = chrome.extension.getBackgroundPage();
      let params = ''
      let imgFile = new FileReader();
      imgFile.readAsDataURL(content.file);
      imgFile.onload = async res => {
        //图片转成base64并encodeURIComponent处理
        params = 'image=' + encodeURIComponent(res.currentTarget.result.match(/base64,(\S*)/)[1])
        const resInfo = await getInfo(params)
        resInfo.result.forEach((item, index) => {
          this.rootList.push(item.root)
          this.keywordLsit.push(item.keyword)
        })
        bgPage.getDataSuccess()
      };
    },
    //使用tabs 新建一个tab页面  并指定地址
    searchKey(val) {
      let params = {}
      params.url = `https://www.baidu.com/s?ie=utf-8&wd=${encodeURIComponent(val)}&tn=78040160_14_pg&ch=8`
      chrome.tabs.create(params)
    },
    //隐藏上传按钮
    hideInput() {
      const inputDom = document.getElementsByClassName('el-upload--picture-card')[0]
      inputDom.style.display = 'none'
    },
    //显示上传按钮
    showInput() {
      const inputDom = document.getElementsByClassName('el-upload--picture-card')[0]
      inputDom.style.display = ''
    }
  }
};
</script>

<style lang="scss" scoped>
.popup-container {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .solve-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .keyword {
      cursor: pointer;
    }
  }
  .image {
    width: 200px;
  }
  .search {
    display: flex;
  }
  .box-card {
    width: 480px;
  }
}
</style>
