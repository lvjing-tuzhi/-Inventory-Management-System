Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    extraClass: String,
    bg: {
      type: String,
      value: ''
    },
    round: {
      type: Boolean,
      value: false
    },
    radius: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    sm: {
      type: Boolean,
      value: false
    },
    xs: {
      type: Boolean,
      value: false
    },
    striped: {
      type: Boolean,
      value: false
    },
    active: {
      type: Boolean,
      value: false
    },
  },

  lifetimes:{
    attached(){
      setTimeout(() => {
        this.setData({
          loading: true
        })
      }, 500)
    }
  },
  data: {
    loading: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})