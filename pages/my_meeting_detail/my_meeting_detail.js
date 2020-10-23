import {request} from "../../request/index.js";

import {getSetting, chooseAddress, openSetting, showModal, showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        myMeetingDetail: {
            roomId: '',
            roomName: '',
            description: '',
            meetingId: '',
            meetingName: '',
            beginTime: '',
            endTime: '',
            departmentName: '',
            userName: '',
            status: '',
            statusMsg: '' ,
            canDelete: true
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     
        this.myMeetingDetail(options.meetingId);
    },

    /**
     * 获取预定会议室的详情
     */
    myMeetingDetail(id) {
        console.log(id)
        request({
                url: "/myMeetingDetail", method: "GET", 
                data: {
                    openId: wx.getStorageSync('openid'),
                    meetingId: id
                }
        }).then(result => {
                console.log(result)
                this.setData({
                    myMeetingDetail: result
                })
            })
    },

    async deleteMeeting(e) {
        var item = e.currentTarget.dataset.item;
        const openId = wx.getStorageSync('openid');
        const meetingId = item;

        wx.showModal({
          title: '后悔药',
          cancelText: '取消',
          confirmText: '确认',
          content: '怎么就后悔了呢？不是说好的一起拼秋裤吗？',
          showCancel: true,
          success: (result) => {
              console.info(result)
            if(result.confirm) {
                request({
                    url: "/cancelMeetingRoom?openId=" + openId + "&meetingId=" + meetingId , method: "POST"      
                }).then(result => {
                    console.log(result)
        
                    wx.navigateTo({
                        url: '../my_meeting_list/my_meeting_list'
                      })
                })
            } else {
                
            }
            
          },
          fail: (res) => {
              return
          },
        })
        
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