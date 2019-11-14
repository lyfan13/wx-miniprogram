// Components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navData:[
      { color:'#fd4890',name: '商城', iconPath: '../../assets/tabbar/home.png', activePath:'../../assets/tabbar/home_active.png',routePath:'../../pages/index/index'},
      { color:'#f6d400',name: '分类', iconPath: '../../assets/tabbar/category.png', activePath:'../../assets/tabbar/category_active.png',routePath:'../../pages/category/category'},
      { color:'#a656b7',name: '社区', iconPath: '../../assets/tabbar/mlog.png', activePath:'../../assets/tabbar/mlog_active.png',routePath:'../../pages/mlog/mlog'},
      { color:'#6d58ad',name: '购物车', iconPath: '../../assets/tabbar/cart.png', activePath:'../../assets/tabbar/cart_active.png',routePath:'../../pages/cart/cart'},
      { color:'#40a887',name: '我', iconPath: '../../assets/tabbar/user.png', activePath:'../../assets/tabbar/user_active.png',routePath:'../../pages/user/user'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNavClick(e){
      const _index = e.currentTarget.dataset.index
      const _title = this.data.navData[_index].name
      wx.setNavigationBarTitle({
        title: _title,
        success: (result)=>{

        },
        fail: ()=>{},
        complete: ()=>{}
      });
      this.triggerEvent('changeNavIndex',{activeIndex:_index})
    }
  }
})
