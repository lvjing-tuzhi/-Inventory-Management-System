Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    loading: {
      type: Boolean,
      value: true
    },
    active: {
      type: Boolean,
      value: true
    },
    column: {
      type: Number,
      value: 0
    },
    columnWidth: {
      type: Array,
      value: []
    },
    endHeight: {
      type: String,
      value: ""
    },
    avatar: Boolean
  },
  observers: {
    'columnWidth': function (old, now) {
      console.log(old, now)
    
    }
  },
  data: {

  },
  lifetimes: {
    attached() {
      console.log(this.data.columnWidth)
    }
  },
  methods: {

  }
});