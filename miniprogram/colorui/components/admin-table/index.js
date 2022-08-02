Component({
  options: {
    multipleSlots: true, // 支持多个slot
    addGlobalClass: true,
  },
  properties: {
    list: {
      type: Array,
      value: []
    },
    header: {
      type: Array,
      value: []
    },
    del: {
      type: Boolean,
      value: false
    },
    show: {
      type: Boolean,
      value: false
    },
    update: {
      type: Boolean,
      value: false
    },
    cover: {
      type: Boolean,
      value: true
    }
  },
  lifetimes: {
    attached() {

    },
    detached: function () {

    },
  },

  data: {
    list:[],
    header:[],
  },

  methods: {
    action(e) {
      this.triggerEvent("action",{_id:e.currentTarget.dataset._id, data:e.currentTarget.dataset.item, action:e.currentTarget.dataset.action})
    },
  }
})