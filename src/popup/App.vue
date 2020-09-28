<template>
  <div class="popup-container">
    <el-button type="primary"
               @click="getData">
      获取豆瓣电影接口
    </el-button>
    <el-card :body-style="{ padding: '0px' }"
             v-if="info.title !== ''">
      <img :src="info.images.small"
           class="image">
      <div style="padding: 14px;">
        <span>标题： {{info.title}}</span>
        <div class="bottom clearfix">
          <span>集数：{{info.episodes_count}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// 引入 background 中的方法
import { testBackground, getDataSuccess } from "@/background";
import { getMovie } from "@/api";
export default {
  name: "app",
  data() {
    return {
      q: "",
      info: {
        title: '',
        episodes_count: '',
        images: {},
      }
    };
  },
  methods: {
    handleBtn() {
      testBackground()
    },
    getData() {
      getMovie().then(res => {
        this.info = res
        getDataSuccess()
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.popup-container {
  .search {
    display: flex;
  }
  .box-card {
    width: 480px;
  }
}
</style>
