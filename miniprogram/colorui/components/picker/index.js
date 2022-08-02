Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  properties: {
    type : String,
    value: String,
    id : String,
    label: String,
    extraClass: String,
    picker: Array,
    index: Number,
    //多列
    multiIndex: Array,
    multiArray: Array,
    //时间
    date: String,
    time: String,
    start: String,
    end: String,
    //地区
    customItem: Array,
    region: Array,
  },

  data: {
    index: 0
  },

  methods: {
    pickerChange(e) {
      console.log(e);
      this.setData({
        index: e.detail.value
      })
    },
    multiChange(e) {
      this.setData({
        multiIndex: e.detail.value
      })
    },
    multiColumnChange(e) {
      let data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
              data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
              break;
            case 1:
              data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
              data.multiArray[2] = ['鲫鱼', '带鱼'];
              break;
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          switch (data.multiIndex[0]) {
            case 0:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                  break;
                case 1:
                  data.multiArray[2] = ['蛔虫'];
                  break;
                case 2:
                  data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                  break;
                case 3:
                  data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                  break;
                case 4:
                  data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                  break;
              }
              break;
            case 1:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['鲫鱼', '带鱼'];
                  break;
                case 1:
                  data.multiArray[2] = ['青蛙', '娃娃鱼'];
                  break;
                case 2:
                  data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                  break;
              }
              break;
          }
          data.multiIndex[2] = 0;
          break;
      }
      this.setData(data);
    },
    timeChange(e) {
      this.setData({
        time: e.detail.value
      })
    },
    dateChange(e) {
      this.setData({
        date: e.detail.value
      })
    },
    regionChange: function(e) {
      this.setData({
        region: e.detail.value
      })
    },
  }
})
