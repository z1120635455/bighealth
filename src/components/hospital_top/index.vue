<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" alt="" />
        <p>大健康 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login" @click="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
let $router = useRouter();
const goHome = () => {
  //编程式导航跳转到首页
  $router.push({ path: "/home" });
};

const login = () => {
  userStore.visiable = true;
};
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
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
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>