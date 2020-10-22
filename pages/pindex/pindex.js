Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray: [{
      "id": "10",
      "value": "会计类"
    }, {
      "id": "21",
      "text": "工程类"
    }, '技术类', {'value': '其他'}]
  },

  select: function(e) {
    console.log(e.detail)
  }

})