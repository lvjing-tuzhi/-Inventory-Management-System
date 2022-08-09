// pages/myhome/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    pay: function() {
        console.log("执行支付事件");
        wx.cloud.callFunction({
  name: '函数名',
  data: {
    // ...
  },
  success: res => {
    const payment = res.result.payment
    wx.requestPayment({
      ...payment,
      success (res) {
        console.log('pay success', res)
      },
      fail (err) {
        console.error('pay fail', err)
      }
    })
  },
  fail: console.error,
})
    },
    add: function() {
      wx.navigateTo({
        url: '../good/add/addgood'
      })      
    },
    select: function() {
        console.log("查看库存");
        wx.navigateTo({
          url: '../good/select/index'
        })
        // wx.cloud.callFunction({
        //   name: 'quickstartFunctions',
        //   data: {
        //     type: 'select'
        //   }
        // }).then(res => {
        //   console.log(res)
        // })
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