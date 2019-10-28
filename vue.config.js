const pxtoviewport = require('postcss-px-to-viewport')
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtoviewport({
            viewportWidth: 750,
            unitPrecision: 5, // 单位转换后保留的精度
            viewportUnit: 'vw', // 希望使用的视口单位
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            exclude: /node_modules|src\/views/i,
            selectorBlackList: ['.no-vw'], // 指定不转换为vw
          }),
          postcssAspectRatioMini()
        ]
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
      Aliplayer: 'Aliplayer',
      AliPlayerComponent: 'AliPlayerComponent'
    }
  }
}