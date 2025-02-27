<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" alt="" />
        <p>大健康 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p v-if="!userStore.userInfo.name" class="login" @click="login">登录/注册</p>
        <div class="dropdown" v-else>
          <el-dropdown>
          <span class="el-dropdown-link">{{ userStore.userInfo.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="goUser('/user/certification')" >实名认证</el-dropdown-item>
                <el-dropdown-item @click="goUser('/user/order')">挂号订单</el-dropdown-item>
                <el-dropdown-item @click="goUser('/user/patient')">就诊人管理</el-dropdown-item>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import { ArrowDown } from '@element-plus/icons-vue'

let userStore = useUserStore();
let $router = useRouter();
const goHome = () => {
  //编程式导航跳转到首页
  $router.push({ path: "/home" });
};

const login = () => {
  userStore.visiable = true;
};

//退出登录按钮的回调
const logout = () => {
  //通知pinia仓库清除用户相关的信息
  userStore.logout();
  //编程式导航路由跳转到首页
  $router.push({ path: "/home" });
};

//点击顶部下拉菜单进行路由跳转
const goUser = (path: string) => {
  $router.push({ path: path });
};
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;
      .dropdown {
        display: flex;
        align-items: center;
        //margin-top: 5px;
      }
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
