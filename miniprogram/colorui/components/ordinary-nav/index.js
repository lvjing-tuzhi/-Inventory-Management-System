const systemInfo = wx.getSystemInfoSync()
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    isBack: {
      type: Boolean,
      value: false
    },
    isLucency: {
      type: Boolean,
      value: false
    },
    white: {
      type: Boolean,
      value: false
    },
  },

  lifetimes: {
    attached() {
      // wx.getSystemInfo({
      //   success: (res) => {
      //     const {windowWidth,windowHeight,statusBarHeight} = res;
      //     this.setData({windowWidth,windowHeight,statusBarHeight})
      //   }
      // })
      // 获取屏幕宽高
      // let data = wx.getMenuButtonBoundingClientRect();
      // const {height,top,bottom} = data;
      // this.setData({statusHeight:height,statusTop:top,statusBottom:bottom})
      const titleBarHeight = this.getTitleBarHeight();
      const statusBarHeight = this.getStatusBarHeight();
      console.log(titleBarHeight, statusBarHeight)
      this.setData({
        titleBarHeight,
        statusBarHeight
      })
    }
  },
  data: {
    statusHeight: 0,
    statusTop: 0,
    statusBottom: 0,
    windowWidth: 0,
    windowHeight: 0,
    titleBarHeight: 0,
    statusBarHeight: 0,
  },

  methods: {
    goBack() {
      console.log("goBack")
      wx.navigateBack({
        delta: 1
      })
    },

    pxConversionRpx(number) {
      return 750 / systemInfo.windowWidth * number
    },

    getNavigationBarHeight() {
      return this.getTitleBarHeight() + this.getStatusBarHeight()
    },
    getStatusBarHeight() {
      return this.pxConversionRpx(systemInfo.statusBarHeight)
    },
    getTitleBarHeight() {
      const statusBarHeight = systemInfo.statusBarHeight;
      const menu = wx.getMenuButtonBoundingClientRect();
      const resultHeight = menu.top - statusBarHeight;
      return this.pxConversionRpx(2 * resultHeight + menu.height);
    }
  }
})