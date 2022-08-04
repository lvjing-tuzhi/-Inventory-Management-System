// pages/good/addgood.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: {
            type: "insert",
            name: "aa",
            count: 0,
            price: 0,
            sellPrice: 0,
            descript: "",
        }
    },

    btnAdd: function () {
        wx.showLoading({
            title: '添加中',
          });
        let datas = this.data.goods
        console.log(datas)
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            data: datas
          }).then(res => {
              console.log(res)
              wx.hideLoading();
              if(res.errMsg == "cloud.callFunction:ok") {
                wx.showToast({
                    title: '添加成功',
                  })
              }else {
                wx.showToast({
                    title: '添加失败',
                  })
              }
              
          }).catch(res => {
            console.log(res)
            wx.hideLoading();
            wx.showToast({
                title: '添加失败',
            })
          })
    },

    back() {
        wx.navigateBack({
          delta: 0,
        })
    },

    // 解决input双向绑定对象问题
    bindKeyInput(e) {
        const key = e.currentTarget.dataset.key, value = e.detail.value
        this.setData({
          [key]: value
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})