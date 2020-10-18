// 0 引入 用来发送请求的 方法 一定要把路径补全
import {request} from "../../request/index.js";
import {getSetting, chooseAddress, openSetting, showModal, showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';


// pages/meeting_index/meeting_index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '2020-10-18',
        beginTime: '11:01',
        endTime: '12:01',
        availableMeetingList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.availableRoomByTime();
    },

    /**
     * 获取可用的会议室
     */
    availableRoomByTime() {
        const beginTime = this.data.beginTime;
        const endTime = this.data.endTime;
        const date = this.data.date;
        request({
            url: "/availableRoomByTime", method: "GET", data: {
                beginTime: date + "-" + beginTime,
                endTime: date + "-" + endTime
            }
        }).then(result => {
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

    },

    /**
     * 根据时间搜索
     * @returns {Promise<void>}
     */
    async searchByTime() {
        this.availableRoomByTime()
    },

    handleChange(e) {
        console.log(e)
        this.setData({
            value: e.detail.date
        })
    },


    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },

    bindTimeStartChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            beginTime: e.detail.value
        })
    },

    bindTimeEndChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            endTime: e.detail.value
        })
    }
})