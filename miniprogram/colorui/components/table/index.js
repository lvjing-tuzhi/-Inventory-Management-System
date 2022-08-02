Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true, // 支持多个slot
  },

  properties: {
    data: {
      type: Array,
      value: []
    },
    header: {
      type: Array,
      value: []
    },
    grid: {
      type: Number,
      value: 1
    }
  },
  lifetimes: {
    attached() {

    },
    detached: function () {

    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    data:[],
    header:[],
    grid: 1
  },

  methods: {
    onRowClick(e) {
      // this.triggerEvent('rowClick', e, e.currentTarget.dataset.it)
    },
  }
})