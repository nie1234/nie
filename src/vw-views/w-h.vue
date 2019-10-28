<!-- postcss-aspect-ratio-mini 宽高比 -->
<template>
  <div class="v-w-contatiner">
    <div class="a2">dfdfdfd</div>
    <div aspectratio w-188-246>
      <div aspectratio-content>dkfdjflkdj</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.v-w-contatiner {
  .a2 {
    width: 188px;height: 246px;background-color: #ccc;
  }
  [w-188-246] {
    width: 188px;background-color: pink;
  }
  [w-188-246] {
    aspect-ratio: '188:246'
  }
}
</style>