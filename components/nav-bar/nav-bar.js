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
      { name: '商城', iconPath: '../../assets/tabbar/home.png', activePath:'../../assets/tabbar/home_active.png',routePath:'../../pages/index/index'},
      { name: '分类', iconPath: '../../assets/tabbar/category.png', activePath:'../../assets/tabbar/category_active.png',routePath:'../../pages/category/category'},
      { name: '社区', iconPath: '../../assets/tabbar/mlog.png', activePath:'../../assets/tabbar/mlog_active.png',routePath:'../../pages/mlog/mlog'},
      { name: '购物车', iconPath: '../../assets/tabbar/cart.png', activePath:'../../assets/tabbar/cart_active.png',routePath:'../../pages/cart/cart'},
      { name: '我', iconPath: '../../assets/tabbar/user.png', activePath:'../../assets/tabbar/user_active.png',routePath:'../../pages/user/user'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNavClick(e){
      var _index = e.currentTarget.dataset.index
      this.triggerEvent('changeNavIndex',{activeIndex:_index})
    }
  }
})
