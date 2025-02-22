<template>
  <div class="search">
    <el-autocomplete
      :trigger-on-focus="false"
      v-model="hosname"
      :fetch-suggestions="fetchData"
      clearable
      placeholder="请你输入医院的名称"
      @select="goDetail"
    />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { reqHospitalInfo } from "@/api/home/index.js";
import { HospitalInfo } from "@/api/home/type";
import { ref } from "vue";
import { useRouter } from "vue-router";
let hosname = ref<string>("");
const fetchData = async (keyword: string, cb: any) => {
  //当用户输入完关键字次函数会执行一次，发请求获取需要展示的数据即可
  let res: HospitalInfo = await reqHospitalInfo(keyword);
  //整理数据，变成人家组件需要数据格式
  let showData = res.data.map((item) => {
    return {
      value: item.hosname, //展示的医院的名字
      hoscode: item.hoscode, //存储医院的编码
    };
  });
  // console.log(res.data);
  //给组件提供展示的户数
  cb(showData);
};
let $router = useRouter();
const goDetail = (item: any) => {
  //点击推荐项目进入医院详情页,将来需要携带query参数(医院的编码)
  $router.push({
    path: "/hospital/register",
    query: { hoscode: item.hoscode },
  });
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  ::v-deep(.el-autocomplete) {
    width: 600px;
    max-width: 600px;
    //margin-right: 10px;
  }
}
</style>