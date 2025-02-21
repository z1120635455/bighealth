<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li class="active">全部</li>
        <li v-for="item in 40" :key="item">东城区</li>
      </ul>
    </div>
  </div>
</template>

<script setup>

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