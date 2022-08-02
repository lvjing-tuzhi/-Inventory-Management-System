let timer = null;
//点赞延时触发
let n = 0; //自己的累加
let idx = -1; //特效的下标,用于删除
Component({
  properties: {

  },

  lifetimes: {
    attached() {
      n = 0; //自己的点击
    }
  },

  data: {
    style_animation: '',
    element: [],
  },

  methods: {
    onClickImage() {
      this.setData({
        style_animation: 'transform:scale(1.3);'
      })
      setTimeout(() => {
        this.setData({
          style_animation: 'transform:scale(1);'
        })
      }, 500)
      idx++;
      this.addPraise();
      this.triggerEvent('likeClick', {})
      this.likeHandle()();
      // this.debounceIdx((idx) => {
      //   let element = this.data.element;   
      //   console.log(element)    
      //   this.setData({
      //     ['element[' + idx + ']']: undefined
      //   })
      // }, 6000,idx)();
      this.delLike()();
    }

  },
  delLike(){
    //开始删除
    let delTimer = null;
    return () => {
      if (delTimer) {
        clearTimeout(delTimer);
        delTimer = null;
      }
      delTimer = setTimeout(() => {
        let element = this.data.element;
        console.log(element)
        this.setData({
          ['element[' + idx + ']']: undefined
        })
      }, 6000)
    }
  },
  addPraise() {
    const b = Math.floor(Math.random() * 6) + 1;
    const bl = Math.floor(Math.random() * 11) + 1; // bl1~bl11
    const image = [
      "https://live.madaidage.com/images/87Dnnqx6VvEPEIFTyrFUU7iVbPQiTnABBoXVuCb3.png",
      "https://live.madaidage.com/images/FjzCtTZiSRvwtpVUN4M3oYerhFFfcApM8QuowSLa.png",
      "https://live.madaidage.com/images/ThjL22NqftWbgAnhndlT1GULEj05vpZtvofIs6y5.png",
      "https://live.madaidage.com/images/xJrZipgNkl6Kn5yKitqGR4N01WWrtRL2maoG6GtN.png",
      "https://live.madaidage.com/images/Ywnf83SEoJKcxrNmVgrGfChNJXmz9molAiQRihCu.png",
      "https://live.madaidage.com/images/Ib4U7pbiI761iv06nb2oG0CleCwzf8C2WmyAC5VD.png",
      "https://live.madaidage.com/images/ka6QwciHZQei2bVWXrffB66LxS0nod9PrS42MWA2.png",
      "https://live.madaidage.com/images/meIUWhv5MvFsPnH1NLBVNDhmJQpIoOA1P3Nrnkq0.png",
      "https://live.madaidage.com/images/uMql5OOBjcyh6viGLWrspmbwAJ6qoK5vaf2v1nba.png"
    ]
    let obj = {
      className: `bubble bl${bl}`,
      image: image[b]
    }
    let element = this.data.element;
    element.push(obj);
    this.setData({
      element
    })
  },
  likeHandle() {
    console.log("进入likeHandle方法");
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
        console.log('likeClickDelay');
        this.triggerEvent('likeClickDelay', {
          data
        });
        n = 0;
      }, 2000)
    }

  },
  // debounce(fn, time) {
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
  //   debounceIdx(fn, time, idx) {
  //     let delTimer = null;
  //     return ()=>{
  //       if (delTimer) {
  //         clearTimeout(delTimer);
  //         delTimer = null;
  //       }
  //       delTimer = setTimeout(()=>{
  //         fn(idx);
  //       }, time)
  //     }
  //   }

})