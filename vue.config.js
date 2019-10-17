module.exports = {
  configureWebpack: config => {
    config.externals = {
      Aliplayer: 'Aliplayer',
      AliPlayerComponent: 'AliPlayerComponent'
    }
  }
}