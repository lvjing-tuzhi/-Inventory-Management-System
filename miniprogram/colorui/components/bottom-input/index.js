// mycomponents/l-bottom-input/index.js
Component({
  properties: {
    
  },

  data: {
    sms:'',
    inputFocus: true,//输入框焦点
  },

  lifetimes:{
    attached(){
      // this.setData({
      //   inputFocus: true
      // })
    }
  },
  methods: {
    sendmessage() {
      if(this.data.sms == ''){
        return
      }
      this.triggerEvent("send",{
        sms: this.data.sms
      },{})
      this.setData({
        sms: ""
      })
    },
  }
})
