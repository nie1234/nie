<template>
  <div style="width: 100%;height: 100%;" class="" :id="'echarts' + echartsItem.typeValue"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: {
    echartsItem: {
      type: Object
    }
  },
  data () {
    return {
      echarts: null
    }
  },
  watch: {
    echartsItem(oldItem, newItem) { // 监听传入的数据有没有变化有变化则重新加载图标
      this.myChart1()
    }
  },
  mounted () {
    this.myChart1()
  },
  methods: {
    myChart1 () {
      this.$nextTick(() => {
        this.echarts = echarts.init(document.getElementById('echarts' + this.echartsItem.typeValue))
        this.echarts.setOption({
          xAxis: {
            type: 'category',
            data: this.echartsItem.date
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.echartsItem.value,
            type: 'line'
          }]
        })
      })
    }
  }
}
</script>
<style lang="less">

</style>