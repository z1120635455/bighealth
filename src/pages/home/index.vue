<template>
  <div>
    <Carousel></Carousel>
    <Search></Search>
    <el-row :gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel"></Level>
        <Region @getRegion="getRegion"></Region>
        <div v-if="hasHospitalArr.length > 0" class="hospital">
          <Card class="item" v-for="(item,index) in hasHospitalArr" :key="index" :hospitalInfo="item"></Card>
        </div>
        <el-empty v-else description="暂无数据" />
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout="prev, pager, next, jumper,->,sizes,total"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="4">
        <Tip></Tip>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tip from './tip/index.vue'
import {onMounted, ref} from "vue";
import {reqHospital} from "@/api/home";
import {Content, HospitalResponseData} from "@/api/home/type";

let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let hasHospitalArr = ref<Content>([])
let total = ref(0)
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");
onMounted(()=>{
  getHospitalInfo()
})

const getHospitalInfo = async () =>{
  let result:HospitalResponseData = await reqHospital( pageNo.value,
      pageSize.value,
      hostype.value,
      districtCode.value)
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content
    total.value = result.data.totalElements
  }
}

const currentChange = () =>{
  getHospitalInfo()
}
const sizeChange = (value: number) =>{
  //当前页码归第一页
  // pageNo.value = 1;
  //再次发请求获取医院的数据
  getHospitalInfo();
}

const getLevel = (level:string) => {
  hostype.value = level
  getHospitalInfo();
}
const getRegion = (region:string) => {
  districtCode.value = region
  getHospitalInfo();
}
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0;
  }
}
::v-deep(.el-pagination) {
  margin-bottom: 20px;
}
</style>