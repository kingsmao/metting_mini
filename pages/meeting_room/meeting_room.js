import {request} from "../../request/index.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        /*预定会议室参数*/
        reserveMeetingParams: {
            roomId: '',
            beginTime: '',
            endTime: '',
            departmentId: '',
            meetingName: '',
            userName: ''
        },

        /*预定会议室初始化数据*/
        meetingRoom: {
            roomId: '',
            roomName: '',
            date: '',
            beginTime: '',
            endTime: '',
            userName: '',
            /*已有会议室列表*/
            meetingList: [],
            /*部门列表*/
            departmentList: [],
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const roomId = options.roomId;
        const beginTime = options.beginTime;
        const endTime = options.endTime;
        const date = options.date;
        const openId = wx.getStorageSync('openid');
        request({
            url: "/meetingRoomInfo", method: "GET", data: {
                roomId,
                beginTime,
                endTime,
                date,
                openId
            }
        }).then(result => {
            //console.log(result);
            this.setData({
                meetingRoom: result
            })
            console.log(this.meetingRoom)
        })

    },

    formSubmit(e) {
        const roomId = this.data.meetingRoom.roomId;
        const departmentId = e.detail.value.departmentId;
        const openId = wx.getStorageSync('openid');
        const meetingName = e.detail.value.meetingName;
        const beginTime = this.data.meetingRoom.date + " " + this.data.meetingRoom.beginTime + ":00";
        const endTime = this.data.meetingRoom.date + " " + this.data.meetingRoom.endTime + ":00";
        const userName = this.data.meetingRoom.userName;
        request({
            url: "/reserveMeetingRoom", method: "POST", data: {
                roomId,
                departmentId,
                openId,
                meetingName,
                beginTime,
                endTime,
                userName
            }
        }).then(result => {
            console.log(result);
            wx.navigateTo({
                url: '../meeting_index/meeting_index'
              })
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