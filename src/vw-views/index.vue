<template>
    <router-view></router-view>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
[aspectratio] {
  position: relative;
}
[aspectratio]::before {
  content: '';display: block;width: 1px;margin-left: -1px;height: 0;
}
[aspectratio-content] {
  position: absolute;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;
}
</style>