Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    fileList: {
      type: Array,
      value: []
    }
  },

  data: {

  },

  methods: {
    chooseImage() {
      this.doUpload((res) => {
        console.log(res)
        let fileList = this.data.fileList;
        if (this.data.fileList.length != 0) {
          this.setData({
            fileList: [...fileList, res]
          })
        } else {
          fileList.push(res)
          this.setData({
            fileList
          })
        }
      })
      // Common.doUpload((res) => {
      //   console.log(res)
      //   let fileList = this.data.fileList;
      //   if (this.data.fileList.length != 0) {
      //     this.setData({
      //       fileList: [...fileList, res]
      //     })
      //   } else {
      //     fileList.push(res)
      //     this.setData({
      //       fileList
      //     })
      //   }
      // })
    },
    delImg(e) {
      let fileList = this.data.fileList;
      fileList.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        fileList
      })
    },
    viewImage(e) {
      wx.previewImage({
        urls: this.data.fileList,
        current: e.currentTarget.dataset.url
      });
    },
    doUpload(callbackFun) {
      wx.chooseImage({
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          return callbackFun({
            tempFilePaths
          })
          // wx.uploadFile({
          //   url: '', //仅为示例，非真实的接口地址
          //   filePath: tempFilePaths[0],
          //   name: 'file',
          //   formData: {

          //   },
          //   success (res){
          //     const data = res.data
          //   }
          // })
        }
      })
    },
    // doUpload(callbackFun) {
    //   wx.chooseImage({
    //     count: 1,
    //     sizeType: ['compressed'],
    //     sourceType: ['album', 'camera'],
    //     success(res) {
    //       wx.showLoading({
    //         title: '上传中',
    //       })
    //       const filePath = res.tempFilePaths[0];
    //       const timestamp = (new Date()).valueOf();
    //       const cloudPath = `my-image${timestamp}${filePath.match(/\.[^.]+?$/)[0]}`
    //       wx.cloud.uploadFile({
    //         cloudPath,
    //         filePath,
    //         success: res => {
    //           console.log('[上传文件] 成功：', res)
    //           const {
    //             fileID
    //           } = res
    //           return callbackFun({
    //             fileID,
    //             cloudPath,
    //             filePath
    //           })
    //         },
    //         fail: e => {
    //           console.error('[上传文件] 失败：', e)
    //           wx.showToast({
    //             icon: 'none',
    //             title: '上传失败',
    //           })
    //         },
    //         complete: () => {
    //           wx.hideLoading()
    //         }
    //       })
    //     },
    //     fail: e => {
    //       console.error(e)
    //     }
    //   })
    // },

    // 上传视频
    // doUploadVideo(callbackFun) {
    //   wx.chooseVideo({
    //     sourceType: ['album'],
    //     success(res) {
    //       console.log(res)
    //       wx.showLoading({
    //         title: '上传中',
    //       })
    //       const filePath = res.tempFilePath;
    //       const timestamp = (new Date()).valueOf();
    //       const cloudPath = `my-video${timestamp}`
    //       wx.cloud.uploadFile({
    //         cloudPath,
    //         filePath,
    //         success: res => {
    //           console.log('[上传文件] 成功：', res)
    //           const {
    //             fileID
    //           } = res
    //           return callbackFun({
    //             fileID,
    //             cloudPath,
    //             filePath
    //           })
    //         },
    //         fail: e => {
    //           console.error('[上传文件] 失败：', e)
    //           wx.showToast({
    //             icon: 'none',
    //             title: '上传失败',
    //           })
    //         },
    //         complete: () => {
    //           wx.hideLoading()
    //         }
    //       })
    //     },
    //     fail: e => {
    //       console.error(e)
    //     }
    //   })
    // },
  }
})