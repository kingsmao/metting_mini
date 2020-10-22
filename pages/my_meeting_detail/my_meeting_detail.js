import {request} from "../../request/index.js";

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

    deleteMeeting: function(e) {
        var item = e.currentTarget.dataset.item;
        console.log(item);
        console.log(wx.getStorageSync('openid'));
        const openId = wx.getStorageSync('openid');
        const meetingId = item;
        request({
            url: "/cancelMeetingRoom?openId=" + openId + "&meetingId=" + meetingId , method: "POST"      
    })
        .then(result => {
            console.log(result)

            wx.navigateTo({
                url: '../my_meeting_list/my_meeting_list'
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