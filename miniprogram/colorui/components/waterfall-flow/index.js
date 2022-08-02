let leftHeight = 0;
let rightHeight = 0;
let leftData = []; //瀑布流生成前临时存放的数组
let rightData = [];
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    data: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        newVal.splice(0, oldVal.length);
        this.create(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftData: [],
    rightData: []
  },

  lifetimes: {
    attached() {

    }
  },
  methods: {
    create(data) {
      let promiseArr = [];
      for (let i in data) {
        let p = new Promise((resolve, reject) => {
          wx.getImageInfo({
            src: data[i].image,
            complete: (res) => {
              console.log(res);
              let proportion = res.height / res.width;
              let width = 375;
              data[i].height = width * proportion;
              resolve(data[i])
            }
          })
        })
        promiseArr.push(p)
      }
      Promise.all(promiseArr).then(res => {
        console.log(res)
        this.sort(res);
        this.setData({
          leftData,rightData
        })
      })
    },
    sort(data){
      data.forEach(item => {
        if (leftHeight <= rightHeight) {
          leftHeight += item.height;
          leftData.push(item)
        } else {
          rightHeight += item.height;
          rightData.push(item);
        }
      });
    }
  }
})