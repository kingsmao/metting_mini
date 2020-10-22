//appo.js

import {request} from "/request/index.js";


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
                    console.log("wxlogin code:" + res.code)
                    request({url: "/core/code2Session.do", method: "GET", data: {code: res.code}})
                        .then(result => {
                            console.log(result);
                            wx.setStorageSync('openid', result.openid)
                            this.globalData.openid = result.openid
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

                            request({
                                url: "/core/saveClientInfo.do", method: "GET", data: {
                                    openid: wx.getStorageSync('openid'),
                                    nickName: nickName,
                                    wxImg: avatarUrl
                                }
                            }).then(result => {
                                console.log(result);
                            })

                        }
                    })
                } else {
                    console.log("res.authSetting['scope.userInfo'] is null")
                }
            }
        })
    },


    globalData: {
        userInfo: null
    }
})