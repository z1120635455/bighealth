<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span> / 医院详情</span>
      </div>
      <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>医院挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详细</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><setting /></el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeFilled,
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
} from '@element-plus/icons-vue'
import {useRouter,useRoute} from "vue-router";
import {onMounted} from "vue";
import useDetailStore from "@/store/modules/hospitalDetail";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
let $router = useRouter()
let $route = useRoute()
let detailStore = useDetailStore()
const changeActive = (path:string) => {
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
}
onMounted(()=>{
  //获取医院详情的数据
  detailStore.getHospital($route.query.hoscode as string);
  //获取某一个医院科室的数据
  detailStore.getDeparment($route.query.hoscode as string);
})

</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      color: #7f7f7f;
    }
  }
  .content {
    flex: 8;
  }
}
</style>