<template>
  <div class="index-container">
    首页
    <Button type="primary" @click="loginOutBtn">退出登录</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    loginOutBtn () {
      this.$store.dispatch('loginOut').then((res) => {
        if (res.code === 0) {
          location.href = '/'
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>