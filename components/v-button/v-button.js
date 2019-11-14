// components/v-button/v-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:'确定'
    },
    width:{
      type:String,
      value:'240rpx'
    },
    height:{
      type:String,
      value:'70rpx'
    },
    bgColor:{
      type:String,
      value:'#F84D90'
    },
    color:{
      type:String,
      value:'white'
    },
    radius:{
      type:String,
      value:'500rpx'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLogin(){
      this.triggerEvent('handleLogin')
    }
  }
})
