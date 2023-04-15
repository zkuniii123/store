Page({
  data: {
    address: {
    name: '',
    phone: '',
    // detail: ''
    detail: 0,
    message: "",
    addressDesc:''
    },

  },

  onLoad() {
    var self = this;
    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          address: res.data
        })
      }
    })

  },
  formSubmit(e) {
    const value = e.detail.value;
    // console.log(value)
    if (value.name && value.phone.length === 11 && value.addressDesc) {
      console.log(value)
      wx.setStorage({
        key: 'address',
        data: value,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  }
})