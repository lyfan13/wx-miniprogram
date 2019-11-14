//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    activeIndex:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeNavIndex:function(e){//改变导航index
    this.setData({
      activeIndex:e.detail.activeIndex
    })
  },
  onLoad: function () {
    console.log('onLoad')
  },
  getUserInfo: function(e) {
    console.log('getUserInfo',e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
