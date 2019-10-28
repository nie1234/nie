<template>
  <div class="login-container">
    <div class="title">登录</div>
    <Form class="form-box" ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="username">
        <Input type="text" v-model="formInline.username" placeholder="请输入用户名" />
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="请输入密码" />
      </FormItem>
      <FormItem prop="captcha">
        <Input type="text" v-model="formInline.captcha" placeholder="请输入验证码" class="captchaInput" />
        <img :src="captchaUrl" alt="" class="captchaImg" @click="captchaChange">
      </FormItem>
      <FormItem>
        <Button class="signInBtn" type="primary" :loading="loading" @click.native="signIn()">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        username: '',
        password: '',
        captcha: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      captchaUrl: process.env.VUE_APP_API_BASE + '/admin/auth/captcha/verify',
      loading: false
    }
  },
  methods: {
    captchaChange () { // 验证码点击更新
      let url = process.env.VUE_APP_API_BASE + '/admin/auth/captcha/verify'
      this.captchaUrl = `${url}?x=${Math.random()}`
    },
    signIn () { // 登录按钮
      this.$refs.formInline.validate((valid) => {
        // console.log(valid)
        if (valid) {
          this.loading = true
          this.$store.dispatch('login', this.formInline).then((res) => {
            this.loading = false
            if (res.code !== 0) {
              this.$Message.error(res.message)
              this.captchaChange()
              return
            }
            // console.log(11111)
            // this.$router.path({
            //   name: 'index'
            // })
            window.location.href = '/'
          }).catch(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
  .login-container {
    background-color: #00152c;height: 100%;overflow: hidden;
    .title {
      font-size: 20px;color: #fff;font-weight: 500;text-align: center;margin-top: 100px;
    }
    .form-box {
      width: 400px;margin: 50px auto;
      .ivu-form-item {
        width: 100%;
        .ivu-form-item-content {
          line-height: 40px;
        }
        .ivu-input {
          height: 40px;font-size: 14px;
        }
      }
      .captchaInput {
        width: 280px;display: inline-block;
      }
      .captchaImg {
        width: 100px;height: 40px;float: right;
      }
      .signInBtn {
        width: 100%;height: 40px;font-size: 16px;letter-spacing: 2px;margin-top: 40px;font-weight: 500;
      }
    }
  }
</style>