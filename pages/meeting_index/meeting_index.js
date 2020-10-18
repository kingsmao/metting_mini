// 0 引入 用来发送请求的 方法 一定要把路径补全
import {request} from "../../request/index.js";

// pages/meeting_index/meeting_index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        availableMeetingList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.availableRoomByTime();
    },

    timeParams: {
        beginTime: "2020-11-12",
        endTime: "2020-01-11"
    },

    /**
     * 获取可用的会议室
     */
    availableRoomByTime() {
        request({url: "/availableRoomByTime", method: "GET", data: this.timeParams})
            .then(result => {
                console.log(result)
                this.setData({
                    availableMeetingList: result
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