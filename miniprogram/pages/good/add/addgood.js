// pages/good/addgood.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: {
            _id: null,
            type: "insert",
            name: "aa",
            count: 0,
            price: 0,
            sellPrice: 0,
            descript: "",
        },
        btnType: true, // 按钮类型，true为增加，false为修改
        goodId: null
    },

    btnUpdate() {
        let datas = this.data.goods
        console.log("datas")
        console.log(datas)
        wx.showLoading({
            title: '修改中',
          });
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            type: 'update',
            data: datas
        }).then(res => {
            wx.hideLoading();
              if(res.result.errMsg == "document.update:ok") {
                wx.showToast({
                    title: '修改成功',
                  })
                wx.redirectTo({
                  url: '../select/index',
                })
              }else {
                wx.showToast({
                    title: '修改失败',
                  })
              }
              console.log(res)
        }).catch(res => {
            console.log(res)
            wx.hideLoading();
            wx.showToast({
                title: '修改失败',
            })
          })
    },

    btnAdd: function () {
        let datas = this.data.goods
        wx.showLoading({
            title: '添加中',
          });
        console.log(datas)
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            data: datas
          }).then(res => {
              console.log(res)
              wx.hideLoading();
              if(res.result.errMsg == "collection.add:ok") {
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

    get(goodId) {
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            data: {
                type: 'selectById',
                id: goodId
            }
        }).then(res => {
            console.log("查询成功")
            this.setData({
                goods: {
                    type: 'update',
                    _id: res.result.data[0]._id,
                    name: res.result.data[0].name,
                    count: res.result.data[0].count,
                    price: res.result.data[0].price,
                    sellPrice: res.result.data[0].sellPrice,
                    descript: res.result.data[0].descript,
                }
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
        let isType = options.goodId==null?true:false
        if(!isType) {
            this.get(options.goodId)
            this.setData({
                btnType: options.goodId==null?true:false,
                goodId: options.goodId
            })
            
        }
        
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