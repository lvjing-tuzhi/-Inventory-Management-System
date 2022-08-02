Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    extraClass: String,
    title: String,
    color: {
      type: String,
      value: 'blue'
    }
  },

  data: {

  },

  methods: {
    click(e){
      this.triggerEvent("click",e,{})
    }
  }
})