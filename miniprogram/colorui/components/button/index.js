Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    round: {
      type: Boolean,
      value: false
    },
    radius: {
      type: Boolean,
      value: false
    },
    icon: {
      type: Boolean,
      value: false
    },
    sm: {
      type: Boolean,
      value: false
    },
    lg: {
      type: Boolean,
      value: false
    },
    shadow: {
      type: Boolean,
      value: false
    },
    block: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    line: {
      type: String,
      value: ''
    },
    lines: {
      type: String,
      value: ''
    },
    bgColor: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
