let loading = false;
Component({
  options: {
    addGlobalClass: true
  },
  properties: {

  },

  data: {
    show: false,
    status: '',
    message: '',
    time: 0
  },

  methods: {
    setShow(status,message,time = 1500) {
      if (loading) {
        return
      }
      loading = true;
      try {
        this.setData({
          status,message,time,
          show: true,
        })
        setTimeout(() => {
          this.setData({
            show: false,
          })
          loading = false;
          this.triggerEvent("end")
        }, time)
      } catch {
        loading = false;
      }
    }
  }
})