//index.js
//获取应用实例
const app = getApp()

Page({
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
		  url: '../index/index'
		})
  },
  toModernPoetry: function() {
  	wx.navigateTo({
		  url: '../aboutModernPoetry/about'
		})
  },
  toAuthor: function() {
  	wx.navigateTo({
		  url: '../aboutAuthor/about'
		})
  },
  onShareAppMessage: function () {
    return {
      title: '现代诗歌精选集',
      path: '/page/user?id=123'
    }
  }
})
