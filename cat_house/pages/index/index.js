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
          hasUserInfo: true,
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
    // wx.navigateTo({ url: '../../pages/article/article?id=1&other=abc' })
    //使用 wx.navigateTo({ url: 'pageD' }) 可以往当前页面栈多推入一个 pageD，此时页面栈变成 [ pageA, pageB, pageC, pageD ]。
    // 使用 wx.navigateBack() 可以退出当前页面栈的最顶上页面，此时页面栈变成 [ pageA, pageB, pageC ]。
    // 使用wx.redirectTo({ url: 'pageE' }) 是替换当前页变成pageE，此时页面栈变成 [ pageA, pageB, pageE ]
  },

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
  
  // https://mp.weixin.qq.com/debug/wxadoc/dev/api/ 微信官方api文档
  // 发起网络请求
  // wx.request({
  //   url: 'test.php',
  //   data: {},
  //   header: { 'content-type': 'application/json' },
  //   success: function(res) {
  //    // 收到https服务成功后返回
  //    console.log(res.data)
  //   },
  //   fail: function() {
  //    // 发生网络错误等情况触发
  //   },
  //   complete: function() {
  //    // 成功或者失败后触发
  //   }
  // })
  
  //事件官方文档 https://mp.weixin.qq.com/debug/wxadoc/dev/component/ 
  // touchstart  手指触摸动作开始
  // touchmove 手指触摸后移动
  // touchcancel 手指触摸动作被打断，如来电提醒，弹窗
  // touchend  手指触摸动作结束
  // tap 手指触摸后马上离开
  // longpress 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
  // longtap 手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
  // transitionend 会在 WXSS transition 或 wx.createAnimation 动画结束后触发
  // animationstart  会在一个 WXSS animation 动画开始时触发
  // animationiteration  会在一个 WXSS animation 一次迭代结束时触发
  // animationend  会在一个 WXSS animation 动画完成时触发
  // 
  
  //回调对象参数
  // type  String  事件类型
  // timeStamp Integer 页面打开到触发事件所经过的毫秒数
  // target  Object  触发事件的组件的一些属性值集合
  // currentTarget Object  当前组件的一些属性值集合
  // detail  Object  额外的信息
  // touches Array 触摸事件，当前停留在屏幕中的触摸点信息的数组
  // changedTouches  Array 触摸事件，当前变化的触摸点信息的数组
  handleTap: function(evt) {
      console.log(evt)
       // 当点击inner节点时
    // evt.target 是inner view组件
       // evt.currentTarget 是绑定了handleTap的outer view组件
       // evt.type == “tap”
       // evt.timeStamp == 1542
       // evt.detail == {x: 270, y: 63}
       // evt.touches == [{identifier: 0, pageX: 270, pageY: 63, clientX: 270, clientY: 63}]
       // evt.changedTouches == [{identifier: 0, pageX: 270, pageY: 63, clientX: 270, clientY: 63}]

      //target 、currentTarget对象属性
      // id String  当前组件的id
      // tagName String  当前组件的类型
      // dataset Object  当前组件上由data-开头的自定义属性组成的集合
  },
  handleTap1: function(evt) {
    console.log(1);
  },
  handleTap2: function(evt) {
    console.log(2);
  },
  handleTap3: function(evt) {
    console.log(3);
  },
  handleTap4: function(evt) {
    console.log(4);
  },

  //wx.getSystemInfo wx.getSystemInfoSync 获取手机信息
  //判断做兼容
  //if (wx.openBluetoothAdapter) {
  //   wx.openBluetoothAdapter()
  // } else {
  //   // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
  //   wx.showModal({
  //     title: '提示',
  //     content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  //   })
  // }
})
