// //index.js
// //获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    activeIndex:0,
    hasToken: false
  },
  handleLogin () {
    console.log('handleLogin')
    wx.showToast({
      title: '登陆成功！',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: (result) => {
        this.setData({
          hasToken: true
        })
      },
      fail: () => { },
      complete: () => { }
    });
  },
  changeNavIndex: function (e) {//改变导航index
    this.setData({
      activeIndex: e.detail.activeIndex
    })
  },
  //options(Object)
  onLoad: function (options) {

  }
});

// Page({
//   data: {
//     motto: 'Hello World',
//     activeIndex:0,
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   changeNavIndex:function(e){//改变导航index
//     this.setData({
//       activeIndex:e.detail.activeIndex
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     wx.getStorage({
//       key: 'userInfo',
//       success: (result)=>{
//         console.log('getStorage',result)
//         this.setData({
//           userInfo:result.data,
//           hasUserInfo:true
//         })
//         app.globalData.userInfo = result.data
//       },
//       fail: ()=>{},
//       complete: ()=>{}
//     });
//   },
//   getUserInfo: function(e) {
//     console.log('getUserInfo',e)
//     app.globalData.userInfo = e.detail.userInfo
//     wx.setStorage({
//       key: 'userInfo',
//       data: e.detail.userInfo,
//       success: (result)=>{
//         console.log('存储userInfo成功',result)
//       },
//       fail: ()=>{},
//       complete: ()=>{}
//     });
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
