//index.js
//获取应用实例
const app = getApp()
var query = wx.createSelectorQuery();

Page({
 
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  detail:function(){
    
      wx.navigateTo({
          url: '../detail/detail',
      })
  },
  onLoad: function () {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    });
 
    wx.setTabBarBadge({
      index:1,
      text: '12'
    })
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

  test: function (e) {
    var originalWidth = e.detail.width;//图片原始宽
    var originalHeight = e.detail.height;//图片原始高
     console.info(e.detail);
  }
})
