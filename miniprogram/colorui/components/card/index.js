Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    type: String,
    isCard: Boolean,
    data: {
      type: Array,
      value: []
    },
    mode: String,
    column: String,
    loading: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },
  observers: {
    'data': function (val) {
      let _data = val;
      _data.forEach(v => {
        v.loading = false
      });
      this.setData({
        _data
      })
      // console.log(_data)
    },
    'loading': function (val) {
      console.log(val);
      let _data = this.data._data;
      if (val == false) {
        _data.forEach(v => {
          v.loading = false
        });
      }
      if (val == true) {
        _data.forEach(v => {
          v.loading = true
        });
      }
      this.setData({
        _data
      })
    },
  },
  methods: {

  }
})