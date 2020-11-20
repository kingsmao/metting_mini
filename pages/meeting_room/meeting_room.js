import {request} from "../../request/index.js";
import {getSetting, chooseAddress, openSetting, showModal, showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        meetingTypeList: [
            "分享会", "技术评审", "需求评审", "周会", "项目沟通", "APP同步会", "项目培训", "新业务培训", "业务考核"
        ],
        radioItems: [
            {name: 'cell standard', value: '0'},
            {name: 'cell standard', value: '1', checked: true}
        ],
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
            departmentList: []    
        },
        departmentId:'',
        meetingName:'',
        delaySwitch:false
    },

    select: function(e) {
        this.setData({
            departmentId: e.detail,
        })
    },

    selectMeetingType: function(e) {
        this.setData({
            meetingName: e.detail
        })
    },

    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems,
            delaySwitch: e.detail.value
        });
    },

    bindSwitch: function (e) {
        this.setData({
            date: e.detail.value
        })
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
            this.setData({
                meetingRoom: result
            })
        })

    },

    async formSubmit(e) {
        const roomId = this.data.meetingRoom.roomId;
        const departmentId = this.data.departmentId;
        const openId = wx.getStorageSync('openid');
        const meetingName = this.data.meetingName;
        const beginTime = this.data.meetingRoom.date + " " + this.data.meetingRoom.beginTime + ":00";
        const endTime = this.data.meetingRoom.date + " " + this.data.meetingRoom.endTime + ":00";
        const userName =  e.detail.value.userName;
        const delaySwitch =  this.data.delaySwitch;
        console.log("departmentId" , departmentId)
        console.log("meetingName" , meetingName)
        console.log("userName" , userName)
        console.log("delaySwitch" , delaySwitch)
        if(departmentId === '') {
            await showToast({
              title: '请选择部门'
            })
            return;
        }
        if(meetingName === '') {
            await showToast({
              title: '请选择会议主题'
            })
            return;
        }
        if(userName === '') {
            console.log("userName is null")
            await showToast({
              title: '用户名不能为空'
            })
            return;
        }
        request({
            url: "/reserveMeetingRoom", method: "POST", data: {
                roomId,
                departmentId,
                openId,
                meetingName,
                beginTime,
                endTime,
                userName,
                delaySwitch,
            }
        }).then(result => {

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