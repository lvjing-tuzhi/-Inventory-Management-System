const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
    //自己加的
    isHome: {
      type: [Boolean, String],
      default: false
    },
    isLeftCustom: {
      type: [Boolean, String],
      default: false
    },
    myBgColor: {
      type: String,
      default: ''
    }, 
    isLucency: {
      type: Boolean,
      default: false
    }, 
    isContent: {
      type: Boolean,
      value: true
    }, 
    noFixed: {
      type: Boolean,
      default: false
    }, 
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },
    BackHome(){
      wx.reLaunch({
        url: '/guide-pages/pages/home/home',
      })
    },
    toHome(){
      wx.reLaunch({
        url: '/guide-pages/pages/home/home',
      })
    }
  }
})