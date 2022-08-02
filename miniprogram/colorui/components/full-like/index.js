let timer = null;
//点赞延时触发
let n = 0; //自己的累加
let idx = -1; //特效的下标,用于删除
Component({
  properties: {

  },

  data: {
    box: [],

  },

  lifetimes: {
    attached: function () {

    },
    detached: function () {

    },
  },

  methods: {
    pageClick(e) {
      let x = e.detail.x;
      let y = e.detail.y;
      for (var i = 0; i < 5; i++) {
      idx++;
      this.addPraise(x, y, idx);
      this.triggerEvent('likeClick', {})
      this.likeHandle()();
      this.delBox()();
      // this.debounceIdx((idx) => {
      //   let box = this.data.box;
      //   this.setData({
      //     ['box[' + idx + ']']: undefined
      //   })
      // }, 6000, idx)();
      }
    },
    delBox() {
      let delTimer = null;
      return () => {
        if (delTimer) {
          clearTimeout(delTimer);
          delTimer = null;
        }
        delTimer = setTimeout(() => {
          let box = this.data.box;
          this.setData({
            ['box[' + idx + ']']: undefined
          })
        }, 6000)
      }
    },
    addPraise(x, y) {
      let element = [];
      // for(let i = 0;i < 5; i++){
      element.push(this.created())
      // }
      let obj = {
        x,
        y,
        element,
        idx
      }
      let box = this.data.box;
      box.push(obj)
      this.setData({
        box
      })
    },
    created() {
      const b = Math.floor(Math.random() * 6) + 1;
      const bl = Math.floor(Math.random() * 11) + 1; // bl1~bl11
      const image = [
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/1.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/2.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/3.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/4.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/5.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/6.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/7.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/8.png",
        "cloud://could-3gpmtjxfc5eed68f.636f-could-3gpmtjxfc5eed68f-1304798122/star/9.png"
      ]
      return {
        className: `bubble bl${bl}`,
        image: image[b]
      }
    },
    likeHandle() {
      console.log("进入likeHandle方法")
      return () => {
        n = n + 1;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          let data = {
            number: n
          }
          console.log('likeClickDelay')
          this.triggerEvent('likeClickDelay', {
            data
          })
          n = 0;
        }, 3000)
      }
    }
    // this.debounce(() => {
    //   let data = {
    //     number: n
    //   }
    //   console.log('likeClickDelay')
    //   this.triggerEvent('likeClickDelay', {data})
    //   n = 0;
    // }, 3000)();
  },
  // debounce(fn, time) {
  //   let timer = null;
  //   return function(){
  //     if (timer) {
  //       clearTimeout(timer);
  //       timer = null;
  //     }
  //     timer = setTimeout(() => {
  //       fn();
  //     }, time)
  //   }
  // },
  // debounceIdx(fn, time, idx) {
  //   let delTimer = null;
  //   return () => {
  //     if (delTimer) {
  //       clearTimeout(delTimer);
  //       delTimer = null;
  //     }
  //     delTimer = setTimeout(() => {
  //       fn(idx);
  //     }, time)
  //   }
  // }
})