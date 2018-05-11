//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrl: 'https://thumbnail10.baidupcs.com/thumbnail/5c7e786a7a2c538aa4e1001d23f6b47d?fid=772610679-250528-663990640333627&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rKfw3jOLEShbqIJzCg3tPUAyevY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3004018633934829974&dp-callid=0&time=1525924800&size=c1920_u1080&quality=90&vuk=772610679&ft=image&autopolicy=1'
  },
  onShareAppMessage: function () {
    return {
      title: '现代诗歌精选集',
      path: '/page/user?id=123'
    }
  },
  previewImage: function() {
    wx.previewImage({
      urls: this.data.imgUrl.split(',')
    })
  }
})
