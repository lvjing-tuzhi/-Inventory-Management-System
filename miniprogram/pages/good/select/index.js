// pages/good/select/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:{}
    },

    update(e) {
        wx.navigateTo({
          url: '../../good/add/addgood?goodId='+e.currentTarget.dataset.id,
        })
    },

    delete: function(e) {
        console.log("开始删除")
        wx.showLoading({
            title: '删除中',
          });
        console.log(e.currentTarget.dataset['id'])
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            data: {
                type: 'del',
                id: e.currentTarget.dataset['id']
            }
        }).then(res => {
            console.log(res)
            console.log("删除成功")
            this.get()
            wx.hideLoading();
        }).catch(res => {
            console.log("删除失败")
            console.log(res)
        })
    },

    get(){
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            data: {
                type: 'select'
            }
        }).then(res => {
            console.log(res.result.data)
            this.setData({
                goods: res.result.data
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.get()
        // console.log(this.data.goods)
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