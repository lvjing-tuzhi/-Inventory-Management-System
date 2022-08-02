const reg = {
  regEmail : /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  regPhone : /^1[34578]\d{9}$/,
  regIdCard : /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  regChinese : /[\u4E00-\u9FA5]/,
  regRequire :  /\S/
}
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  properties: {
    value: String,
    placeholder: String,
    id : String,
    label: String,
    disabled: Boolean,
    extraClass: String,
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
    setInput(e){
      const {
        value = ''
      } = e.detail;
      this.setData({
        value
      });
    },
    check(type){
      console.log(type)
      const {value} = this.data;
      let s = '';
      for(let key in reg){
        if(type == key){
          s =  reg[key];
          break
        }
      }
      if(s){
        return s.test(value);
      }else{
        console.log("您传的参数有问题");
      }
    }
  }
})
