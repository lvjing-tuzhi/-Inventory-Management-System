const app = getApp();
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    tabNav: Array,
    TabCur: Number
  },

  data: {
    CustomBar: app.globalData.CustomBar,
  },

  methods: {
    tabSelect(e) {
      console.log(e);
      this.setData({
        scrollLeft: (e.currentTarget.dataset.index - 1) * 60
      })
      this.triggerEvent("tabSelect", {
        index:  e.currentTarget.dataset.index
      }, {})
    }
  }
})