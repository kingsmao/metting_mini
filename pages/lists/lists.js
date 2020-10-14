//lists.js
const util = require('../../utils/util.js')

Page({
  data: {
      currentTab: 0,
      addressName:'龙江店',
      listsArray:[
          {
              id:'0',
              imgSrc:'../../images/head.png',
              userName:'电宣',
              petNum:'2',
              timeS:'10：40',
              timeE:'11：40',
              petDetails:[
                  {
                      petDetails1:'种类1',
                      petDetails2:'种类a',

                  },{

                      petDetails1:'种类2',
                      petDetails2:'种类b'
                  }
              ],
              show1:true,
              show2:false,
              show3:false,

          },{
              id:'1',
              imgSrc:'../../images/banner.png',
              userName:'二货',
              petNum:'3',
              timeS:'10：40',
              timeE:'11：40',
              petDetails:[
                  {
                      petDetails1:'种类1',
                      petDetails2:'种类a',

                  },{

                      petDetails1:'种类2',
                      petDetails2:'种类b'
                  },{

                      petDetails1:'种类3',
                      petDetails2:'种类c'
                  }
              ],
              show1:false,
              show2:true,
              show3:false,

          },{
              id:'2',
              imgSrc:'../../images/banner.png',
              userName:'测试',
              petNum:'3',
              timeS:'10：40',
              timeE:'11：40',
              petDetails:[
                  {
                      petDetails1:'种类1',
                      petDetails2:'种类a',

                  },{

                      petDetails1:'种类2',
                      petDetails2:'种类b'
                  }
              ],
              show1:false,
              show2:true,
              show3:true,
          }
      ],

  },
  onLoad: function () {

      var timeT = util.formatDate(new Date());
      var dateT = util.getDates(3, timeT);
      // console.log(dateT);

      this.setData({

          dateNum1: dateT[0].time,
          weekNum1: dateT[0].week,
          dateNum2: dateT[1].time,
          weekNum2: dateT[1].week,
          dateNum3: dateT[2].time,
          weekNum3: dateT[2].week

      })
  },
    //点击切换选择日期
    clickTab: function (e) {
        var that = this;
        if (this.data.currentTab === e.currentTarget.dataset.current) {
            return false;
        } else {
          // console.log(e.currentTarget.dataset.current);
            that.setData({
                currentTab: e.currentTarget.dataset.current,
            })
        }
    },



})

