<template>
  <div class="user">
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span> / 会员中心</span>
      </div>
      <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
      >
        <el-menu-item index="/user/certification" @click="goUser('/user/certification')">
          <el-icon><icon-menu /></el-icon>
          <span>实名认证</span>
        </el-menu-item>
        <el-menu-item index="/user/order" @click="goUser('/user/order')">
          <el-icon><document /></el-icon>
          <span>挂号订单</span>
        </el-menu-item>
        <el-menu-item index="/user/patient" @click="goUser('/user/patient')">
          <el-icon><user /></el-icon>
          <span>就诊人管理</span>
        </el-menu-item>
        <el-menu-item index="/user/profile" @click="goUser('/user/profile')">
          <el-icon><Postcard /></el-icon>
          <span>账号信息</span>
        </el-menu-item>
        <el-menu-item index="/user/feedback" @click="goUser('/user/feedback')">
          <el-icon><setting /></el-icon>
          <span>意见反馈</span>
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
  Document,
  User,
  Postcard,
  HomeFilled,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import {useRoute, useRouter} from "vue-router";
let $router = useRouter()
let $route = useRoute()
const goUser = (path:string) => {
  $router.push({ path });
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content {
    flex: 8;
  }
}
</style>