import {request} from "../../request/index.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        myMeetingList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.myMeetingList();
    },

    /**
     * 获取我预定的会议室列表
     */
    myMeetingList() {
        request({url: "/myMeetingList", method: "GET", data: {openId: wx.getStorageSync('openid')}})
            .then(result => {
                console.log(result)
                this.setData({
                    myMeetingList: result
                })
            })
    },

    goToMeetingDetail: function(e) {
        var item = e.currentTarget.dataset.item;
        console.log(item);
        wx.navigateTo({
            url: '../my_meeting_detail/my_meeting_detail?meetingId=' + item
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