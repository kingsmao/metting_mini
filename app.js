//appo.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            // 发起网络请求
              wx.request({
                  url: 'https://kingmao.top/core/code2Session.do',
                  data: {
                      code: res.code
                  },
                  success: res => {
                      wx.setStorageSync('openid', res.data.openid)
                      this.globalData.openid = res.data.openid
                  }
              })
          } else {
              console.log('登录失败！' + res.errMsg)
          }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
          if (res.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                  success: res => {
                      this.globalData.userInfo = res.userInfo
                      const userInfo = res.userInfo
                      const nickName = userInfo.nickName
                      const avatarUrl = userInfo.avatarUrl
                      const gender = userInfo.gender // 性别 0：未知、1：男、2：女
                      const province = userInfo.province
                      const city = userInfo.city
                      const country = userInfo.country
                      console.info("获取到用户信息")
                      wx.request({
                          url: 'https://kingmao.top/core/saveClientInfo.do',
                          data: {
                              openid: wx.getStorageSync('openid'),
                              nickName: nickName,
                              wxImg: avatarUrl
                          },
                          success(res) {
                              console.log(res);

                          }
                      })

                  }
              })
          }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})