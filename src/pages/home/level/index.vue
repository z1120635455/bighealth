<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{active:activeFlag==''}" @click="changLevel('')">全部</li>
        <li :class="{active:activeFlag==item.value}" v-for="item in levelArr" :key="item.value" @click="changLevel(item.value)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from "vue";
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";
let levelArr = ref<HospitalLevelAndRegionArr>([]);
let activeFlag = ref<string>('')
onMounted(() => {
  getLevel();
});
const getLevel = async () => {
  let res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("HosType");
  //存储医院等级的数据
  if (res.code == 200) {
    levelArr.value = res.data;
  }
};
let $emit = defineEmits(['getLevel']);
const changLevel = (level:string) =>{
  activeFlag.value = level
  $emit('getLevel',level)
}
</script>

<style lang="scss" scoped>
.level {
  h1 {
    color: #7f7f7f;
    font-weight: 900;
    margin: 10px 0px;
  }
  .content {
    display: flex;
    color: #7f7f7f;
    margin-top: 10px;
    .left {
      width: 50px;
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>