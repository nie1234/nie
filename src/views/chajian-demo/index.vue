<template>
  <div class="index-container">
    <div v-once>{{ message }}</div>
    <div>{{ message }}</div>
    <!-- <div v-show="message">v-show</div> -->
    <!-- <template v-show="message">dfdfdfd</template>
    <template v-if="message">dfdfdfd</template> -->
    <!-- <div v-if="message">v-if</div> -->
    <div v-pre>{{ message }}</div>
    <div v-cloak>{{ message }}</div>
    <slot-demo :items="colors" title="Colors">
      <div class="box">
        <h1>slot demo</h1>
        <p>this is slot demo!</p>
      </div>
      <div slot="header">放到具名插槽内的内容</div>
      <template #header>简写</template>
      <template scope="color">
        <div :style="{background:color.hex}">{{ color.name }}</div>
      </template>
    </slot-demo>
    <div v-bind="{id: 'divId'}">dfdfd</div>
    <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
    <button @click="changeMessage">修改信息</button>
    <transition name="fade">
      <!-- <p v-if="message">Hello Word!!</p> -->
      <div v-if="message" class="fang"></div>
      <div class="yuan" v-else></div>
    </transition>
    <div id="app">
      <img src="../../assets/logo.png" width="25%" alt="">
      <hr>
      <button @click="open">open toast</button>
    </div>
  </div>
</template>
<script>
import SlotDemo from '../../components/HelloWorld'

export default {
  components: {
    SlotDemo
  },
  data () {
    return {
      message: false,
      colors: [
        { name: 'Yellow', hex: '#F4D03F'},
        { name: 'Green', hex: '#229954' },
        { name: 'Purple', hex: '#9B59B6' }
      ]
    }
  },
  methods: {
    changeMessage () {
      this.message = !this.message
    },
    open () {
      this.$toast('网络请求失败， 请刷新你的页面!')
    }
  }
}
</script>
<style>
.index-container {
  color: red;
}
[v-cloak] {
  /* display: none; */
  color: fuchsia;
}
.box {
  width: 100px;height: 300px;background-color: pink;
}
#divId {
  color: aqua;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fang, .yuan {
  background-color: darkorchid;width: 200px;height: 200px;opacity: .6;
}
.yuan {
  border-radius: 50%;
}
</style>