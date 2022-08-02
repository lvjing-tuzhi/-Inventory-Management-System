let idx = -1; //用做唯一的wx:key
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    _temp: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        if (newVal == {}) {
          return;
        }
        console.log(newVal);
        idx = idx + 1;
        let createBox = this.create(newVal);
        this.setData({
          ['box[' + idx + ']']: createBox
        })
        this.debounceIdx((idx) => {
          this.setData({
            ['box[' + idx + ']']: undefined
          })
          console.log(this.data.box)
        }, 12000, idx)();
      }
    }
  },
  data: {
    box: []
  },
  methods: {
    create(object) {
      let obj = {
        text: object.text,
        status: object.status,
        gift: object.gift || 0,
        id: 'a' + idx,
        top: Math.ceil(Math.random() * 100),
        time: (Number)(Math.random() * 5) + 5,
        color: this.getRandomColor()
      }
      console.log("time", obj.time)
      return obj;
    },
    getRandomColor() {
      const color_arr = [
        "#esd771",
        "#dcecdd",
        "#7cbaad",
        "#7a83b3",
        "#bb5644",
        "#ebb282",
        "#79b1d8",
        "#98d0de",
        "#e4844e",
        "#85fefe",
        "#fb5422",
        "#f6d087",
      ]
      let i = parseInt(Math.random() * 5)
      return color_arr[i]
    },
   
    debounceIdx(fn, time, idx) {
      let timer = null;
      return () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          fn(idx);
        }, time)
      }
    },
    test() {
      idx = idx + 1;
      let obj = {
        text: "LeeYa祝你恭喜发财" + idx + '次',
        status: 'like',
        gift: 0
      }
      let createBox = this.create(obj);
      console.log("createBox", createBox);
      let box = this.data.box;
      box.push(createBox);
      this.setData({
        box
      })
    }
  }
})