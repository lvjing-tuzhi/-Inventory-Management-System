Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    count: {
      type: Number,
      value: 5
    },
    score: Number
  },

  data: {
    active: 0
  },

  methods: {
    click(e) {
      const {score,count} = this.data;
      const active = e.currentTarget.dataset.index + 1;
      this.setData({
        active
      })
      this.triggerEvent("click", {result : score/count*active}, {})
    }
  }
})