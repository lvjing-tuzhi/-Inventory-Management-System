let loading = false;
const animation = wx.createAnimation({
  duration: 400,
  timingFunction: 'ease-out',
  delay: 0,
  transformOrigin: '50% 50% 0'
});//动画
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    message: String,
    time: {
      type: Number,
      value: 2000
    },
    status: String,
    show: Boolean
  },

  data: {
    animation: ""
  },

  methods: {
    setShow() {
      if (loading) {
        return
      }
      loading = true;
      try {
        const {
          message,
          status,
          time
        } = this.data;
        this.start_animation();
        setTimeout(() => {
          this.end_animation();
          loading = false;
          this.triggerEvent("end")
        }, time)
      } catch {
        loading = false;
      }
    },
    start_animation(){
      animation.height('80rpx').step()
      this.setData({
        animation: animation.export(),
      })
    },
    end_animation(){
      animation.height('0rpx').step()
      this.setData({animation: animation.export()})
    },
  }
})