//appo.js
const util = require('../../utils/util.js')



Page({
  data: {
      currentTab : 0,
      addressTab : 0,
      addressName1: "龙江店",
      addressName2: "龙山店",
      addressName3: "龙店",
      noOrder: true,
      dateSelect:'',
      addressSelect:'',
      btnColor:false,
      orderDate:'',
      orderAddress:'',
      orderTel:'',
      orderLists:'',
      appointmentId:'',
      appointmentId1:'',

  },
  onLoad: function () {

      var timeT = util.formatDate(new Date());
      var dateT = util.getDates(3, timeT);
      // console.log(dateT);
      if(!this.data.havePlace1){
          this.setData({
              timeAm: '已满'
          })
      }
      if(!this.data.havePlace2){
          this.setData({
              timePm: '已满'
          })
      }

      this.setData({
          dateNum1: dateT[0].time,
          weekNum1: dateT[0].week,
          dateNum2: dateT[1].time,
          weekNum2: dateT[1].week,
          dateNum3: dateT[2].time,
          weekNum3: dateT[2].week

      })
      this.queryInfo(0,0);
  },

    //点击切换选择日期
    clickTab: function (e) {
        const that = this;
        if (that.data.currentTab === e.currentTarget.dataset.current) {
            return false;
        } else {
          // console.log(e.currentTarget.dataset.current);
            that.setData({
                currentTab: e.currentTarget.dataset.current,
            });
        }
        console.log(that.data.currentTab);
        this.queryInfo(that.data.addressTab,that.data.currentTab);
    },
    //点击切换选择地点
    addressTab: function (e) {
        const that = this;
        if (this.data.addressTab === e.currentTarget.dataset.address) {
            return false;
        } else {
            // console.log(e.currentTarget.dataset.address);
            that.setData({
                addressTab: e.currentTarget.dataset.address,
            })
        }
        console.log(this.data.addressTab);
        this.queryInfo(this.data.addressTab,this.data.currentTab);
    },
    queryInfo:function(shopId,workTime){
      const that = this;
      if (shopId==0){
          shopId = 'ls'
      }else if(shopId==1){
          shopId = 'lj'
      }else if(shopId == 2){
          shopId = 'rg'
      }
      /*if(workTime==0){
          workTime = ''
      }*/
        wx.request({
            url: 'https://kingmao.top/customer/appointmentPage.do',
            data: {
                shopId: shopId,
                workTime: '2019/04/21',
                openid: wx.getStorageSync('openid')
            },
            success(res) {
                console.log(res);
                //const list = res.data.CustomerAppointment.petLists;
                //console.log(list);

                 if(res.data.sysStatue==1){
                     that.setData({
                         btnColor: true
                     });
                 }else{
                     that.setData({
                         btnColor: false
                     });
                 }
                if(res.data.isApp==1){
                    that.setData({
                        noOrder: false,
                        orderDate: workTime,
                        orderAddress:shopId,
                        orderTel:res.data.CustomerAppointment.phone,
                        appointmentId:res.data.CustomerAppointment.appointmentId,

                        // orderLists:res.data.CustomerAppointment.petLists,

                    });
                }else{
                    that.setData({
                        noOrder: true
                    });
                }
            }
        });
    },

    goappo:function(){
        wx.navigateTo({
            url: '../appo/appo'
        })
    },
    cancelOrder:function(){
        const that = this;
        wx.request({
            url: 'https://kingmao.top/customer/cancelApponitment.do',
            data: {
                appointmentId: that.data.appointmentId,
            },
            success(res) {
                console.log(res);
            }
        });

    },
    //上午的预约时间
    bindTimeChangeAm: function (e) {
        //console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            timeAm: e.detail.value
        })
    },
    //下午的预约时间
    bindTimeChangePm: function (e) {
        //console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            timePm: e.detail.value
        })
    },


});

