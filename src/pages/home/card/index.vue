<template>
  <div>
    <el-card style="max-width: 480px" shadow="hover">
      <div class="content">
        <div class="left">
          <div class="hospital_name">
            {{ hospitalInfo.hosname }}
          </div>
          <div class="tip">
            <div class="level">
              <el-icon><OfficeBuilding /></el-icon>
              <span>{{ hospitalInfo.param.hostypeString }}</span>
            </div>
            <div class="time">
              <el-icon>
                <Timer />
              </el-icon>
              <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Timer, OfficeBuilding } from "@element-plus/icons-vue";

defineProps(["hospitalInfo"]);
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;

  .left {
    width: 60%;

    .tip {
      color: #7f7f7f;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      .level,
      .time {
        display: flex;
        align-items: center;

        span {
          margin-left: 5px;
        }
      }
    }
  }

  .right {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
