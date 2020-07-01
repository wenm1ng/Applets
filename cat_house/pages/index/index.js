//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    msg: '点击我呀',
    time: (new Date()).toString(),
    a:1,
    b:2,
    c:3,
    message:[{a:'666'},{b:'777'}],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4],
    items: {
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    }
  },

  clickMe: function() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    console.log(this.data.objectArray);
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    console.log(this.data.numberArray);
    this.setData({
      numberArray: this.data.numberArray
    })
  },

  onReachBottom:function(e){
    console.log('文明很帅');
  },
  onPageScroll:function(e){
    console.log('文明还是很帅');
    wx.navigateTo({ url: '../../pages/article/article?id=1&other=abc' })
    //使用 wx.navigateTo({ url: 'pageD' }) 可以往当前页面栈多推入一个 pageD，此时页面栈变成 [ pageA, pageB, pageC, pageD ]。
    // 使用 wx.navigateBack() 可以退出当前页面栈的最顶上页面，此时页面栈变成 [ pageA, pageB, pageC ]。
    // 使用wx.redirectTo({ url: 'pageE' }) 是替换当前页变成pageE，此时页面栈变成 [ pageA, pageB, pageE ]
  }
  //参数
  // data  Object  页面的初始数据
  // onLoad  Function  生命周期函数--监听页面加载，触发时机早于onShow和onReady
  // onReady Function  生命周期函数--监听页面初次渲染完成
  // onShow  Function  生命周期函数--监听页面显示，触发事件早于onReady
  // onHide  Function  生命周期函数--监听页面隐藏
  // onUnload  Function  生命周期函数--监听页面卸载
  // onPullDownRefresh Function  页面相关事件处理函数--监听用户下拉动作
  // onReachBottom Function  页面上拉触底事件的处理函数
  // onShareAppMessage Function  用户点击右上角转发
  // onPageScroll  Function  页面滚动触发事件的处理函数
  // 其他  Any 可以添加任意的函数或数据，在Page实例的其他函数中用 this 可以访问
})
