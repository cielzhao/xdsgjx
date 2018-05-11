//获取应用实例
const app = getApp()

Page({
  onShareAppMessage: function () {
    return {
      title: '现代诗歌精选集',
      path: '/page/user?id=123'
    }
  }
})
