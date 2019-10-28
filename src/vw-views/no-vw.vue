<!-- 测试selectorBlackList: ['.no-vw'] 指定不转换为vw -->
<template>
  <div class="vw-container">
    <div class="vw-class">vw-class</div>
    <div class="vw-class2">vw-class2</div>
    <div class="no-vw">no-vw</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.vw-container {
  .vw-class {
    width: 100px;height: 100px;background-color: black;
  }
  .vw-class2, .no-vw {
    width: 100px;height: 100px;background-color: pink;
  }
}
</style>