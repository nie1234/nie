<template>
  <div class="slot-container">
    <div>我来占个位置</div>
    <slot name="header">header 具名插槽</slot>
    <slot>单个插槽</slot>
    <div class="color-list">
      <h2>{{ title }}</h2>
      <div class="list">
        <div class="list-item" v-for="(item, index) in items" :key="index">
          <slot v-bind="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SlotDemo',
  props: {
    title: {
      type: String,
      default: 'Colors'
    },
    items: {
      type: Array
    }
  }
}
</script>
<style lang="less">
.box {
  background-color: #333;
}
</style>