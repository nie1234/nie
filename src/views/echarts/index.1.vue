<template>
  <div class="echarts-container">
    <div class="list-box">
      <div class="list" v-for="item in list" :key="item.id">
        <div @click="getList(item.id)">{{ item.name }}</div>
      </div>
    </div>
    <div class="modelList" v-for="modelItem in modelList" :key="modelItem.modelId">
      <div>{{ modelItem.name }}</div>
    </div>
    <div class="echarts-box">
      <div class="echarts-item" v-for="echartsItem in modelList" :key="echartsItem.typeValue">
        <echarts-line :echartsItem="echartsItem"></echarts-line>
      </div>
    </div>
  </div>
</template>
<script>
import EchartsLine from './echarts-line'
export default {
  components: {
    EchartsLine
  },
  data () {
    return {
      list: [
        { id: 1, name: '温度' },
        { id: 2, name: '温度2' },
        { id: 3, name: '温度3' },
        { id: 4, name: '温度4' }
      ],
      modelList: [
        { modelId: 11, name: 'PM2.5', date: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], value: [820, 932, 901, 934, 1290, 1330, 1320], typeValue: 12 },
        { modelId: 21, name: 'PM10', date: ['Mon1', 'Tue1', 'Wed1', 'Thu1', 'Fri1', 'Sat1', 'Sun1'], value: [82, 932, 91, 934, 129, 1330, 1320], typeValue: 22 },
        { modelId: 31, name: '湿度', date: ['Mon2', 'Tue2', 'Wed2', 'Thu2', 'Fri2', 'Sat2', 'Sun2'], value: [820, 93, 901, 93, 120, 130, 130], typeValue: 32 }
      ],
      echarts: []
    }
  },
  mounted () {
  },
  methods: {
    getList (listId) {
      // 点击菜单栏模拟获取数据
      setTimeout(() => {
        this.modelList = [
          { modelId: 31, name: 'PM2.5 2', date: ['M', 'T', 'W', 'T', 'F', 'S', 'Su'], value: [80, 92, 91, 94, 120, 330, 130], typeValue: 13 },
          { modelId: 41, name: 'PM10 2', date: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], value: [502, 92, 91, 94, 129, 130, 120], typeValue: 23 }
        ]
      }, 1000)
    }
  }
}
</script>
<style lang="less">
.echarts-container {
  width: 1200px;margin: 0 auto;
}
.list-box {
  display: inline-block;vertical-align: top;
}
.list {
  line-height: 40px;background-color: rgb(27, 41, 123);color: #fff;width: 100px;
  border-bottom: 1px solid #fff;
}
.modelList {
  width: 200px;height: 200px;display: inline-block;background:rgba(229,1,19,0.05);margin-left: 20px;vertical-align: middle;
}
.echarts-box {
  width: 400px;display: inline-block;vertical-align: top;
}
.echarts-item {
  height: 200px;background-color: rgb(119, 183, 199);margin: 0 0 20px 20px;
}
</style>