<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{active:activeFlag==''}" @click="changeRegion('')">全部</li>
        <li :class="{active:activeFlag==item.value}" v-for="item in regionArr" :key="item.value" @click="changeRegion(item.value)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, onMounted, ref} from "vue";
import {HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData} from "@/api/home/type";
import {reqHospitalLevelAndRegion} from "@/api/home";
let regionArr = ref<HospitalLevelAndRegionArr>([]);


onMounted(() => {
  getRegion();
});
const getRegion = async () => {
  let res: HospitalLevelAndRegionResponseData =
      await reqHospitalLevelAndRegion("Beijin");
  //存储医院等级的数据
  if (res.code == 200) {
    regionArr.value = res.data;
  }
};
let activeFlag = ref<string>('')
let $emit = defineEmits(['getRegion']);
const changeRegion = (region:string) => {
  activeFlag.value = region
  $emit('getRegion',region)
}


</script>

<style lang="scss" scoped>
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      width: 50px;
      min-width: 50px;
      margin-right: 10px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 5px;
        margin-bottom: 10px;
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