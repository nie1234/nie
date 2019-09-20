<template>
  <div class="vuex-container">
    <button @click="add">加+</button>
    {{ count }}
    <div class="aa"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // }
  },
  methods: {
    add () {
      this.count = this.count + 1
      this.$store.dispatch('addcount', this.count)
      // console.log(this.$store.state.count)
    }
  }
}
</script>
<style scoped lang="less">
.vuex-container {
  .aa {
    width: 100px;height: 100px;background-color: pink;
  }
}
</style>
<style scoped>
  .vuex-container .aa {
    background-color: green;
  }
</style>