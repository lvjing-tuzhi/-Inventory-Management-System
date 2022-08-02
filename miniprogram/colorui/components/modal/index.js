const app = getApp();
Component({
   options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    extraClass: String,
    title: String,
    show: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: ''
    },
    src: String,
    prompt: String,
    direction: String
  },

  data: {
    CustomBar: app.globalData.CustomBar,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideModal(e) {
      this.setData({
        show: false
      })
    },
  }
})
