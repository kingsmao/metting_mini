//appo.js
const util = require('../../utils/util.js')



Page({
  data: {
      multiArray: [['犬', '猫'], ['中型', '大型', '小型'], ['洗澡', '造型','SPA']],
      objectMultiArray: [
          [
              {
                  id: 0,
                  name: '犬'
              },
              {
                  id: 1,
                  name: '猫'
              }
          ], [
              {
                  id: 0,
                  name: '中型'
              },
              {
                  id: 1,
                  name: '大型'
              },
              {
                  id: 2,
                  name: '小型'
              }
          ], [
              {
                  id: 0,
                  name: '洗澡'
              },
              {
                  id: 1,
                  name: '造型'
              },
              {
                  id: 2,
                  name: 'SPA'
              }
          ]
      ],
      multiIndex: [0, 0, 0],

      multiArray1: [['犬', '猫'], ['中型', '大型', '小型'], ['洗澡', '造型','SPA']],
      objectMultiArray1: [
          [
              {
                  id: 0,
                  name: '犬'
              },
              {
                  id: 1,
                  name: '猫'
              }
          ], [
              {
                  id: 0,
                  name: '中型'
              },
              {
                  id: 1,
                  name: '大型'
              },
              {
                  id: 2,
                  name: '小型'
              }
          ], [
              {
                  id: 0,
                  name: '洗澡'
              },
              {
                  id: 1,
                  name: '造型'
              },
              {
                  id: 2,
                  name: 'SPA'
              }
          ]
      ],
      multiIndex1: [0, 0, 0],

      multiArray2: [['犬', '猫'], ['中型', '大型', '小型'], ['洗澡', '造型','SPA']],
      objectMultiArray2: [
          [
              {
                  id: 0,
                  name: '犬'
              },
              {
                  id: 1,
                  name: '猫'
              }
          ], [
              {
                  id: 0,
                  name: '中型'
              },
              {
                  id: 1,
                  name: '大型'
              },
              {
                  id: 2,
                  name: '小型'
              }
          ], [
              {
                  id: 0,
                  name: '洗澡'
              },
              {
                  id: 1,
                  name: '造型'
              },
              {
                  id: 2,
                  name: 'SPA'
              }
          ]
      ],
      multiIndex2: [0, 0, 0],


  },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindMultiPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex: e.detail.value
        })
    },
    bindMultiPickerColumnChange(e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
        const data = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        }
        data.multiIndex[e.detail.column] = e.detail.value
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex[0]) {
                    case 0:
                        data.multiArray[1] = ['中型', '大型', '小型']
                        data.multiArray[2] = ['洗澡', '造型','SPA']
                        break
                    case 1:
                        data.multiArray[1] = ['成年','幼年']
                        data.multiArray[2] = ['洗澡']
                        break
                }
                data.multiIndex[1] = 0
                data.multiIndex[2] = 0
                break
            case 1:
                switch (data.multiIndex[0]) {
                    case 0:
                        switch (data.multiIndex[1]) {
                            case 0:
                                data.multiArray[2] = ['洗澡', '造型','SPA']
                                break
                            case 1:
                                data.multiArray[2] = ['洗澡', '造型','SPA']
                                break
                            case 2:
                                data.multiArray[2] = ['洗澡', '造型','SPA']
                                break
                            case 3:
                                data.multiArray[2] = ['洗澡', '造型','SPA']
                                break
                            case 4:
                                data.multiArray[2] = ['洗澡', '造型','SPA']
                                break
                        }
                        break
                    case 1:
                        switch (data.multiIndex[1]) {
                            case 0:
                                data.multiArray[2] = ['洗澡']
                                break
                            case 1:
                                data.multiArray[2] = ['洗澡']
                                break
                            case 2:
                                data.multiArray[2] = ['洗澡']
                                break
                        }
                        break
                }
                data.multiIndex[2] = 0
                break
        }
        console.log(data.multiIndex)
        this.setData(data)
    },
    delete(){
        console.log('删除')
        this.setData('[]')
    },

    bindPickerChange1(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindMultiPickerChange1(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex1: e.detail.value
        })
    },
    bindMultiPickerColumnChange1(e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
        const data = {
            multiArray1: this.data.multiArray1,
            multiIndex1: this.data.multiIndex1
        }
        data.multiIndex1[e.detail.column] = e.detail.value
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex1[0]) {
                    case 0:
                        data.multiArray1[1] = ['中型', '大型', '小型']
                        data.multiArray1[2] = ['洗澡', '造型','SPA']
                        break
                    case 1:
                        data.multiArray1[1] = ['成年','幼年']
                        data.multiArray1[2] = ['洗澡']
                        break
                }
                data.multiIndex1[1] = 0
                data.multiIndex1[2] = 0
                break
            case 1:
                switch (data.multiIndex1[0]) {
                    case 0:
                        switch (data.multiIndex1[1]) {
                            case 0:
                                data.multiArray1[2] = ['洗澡', '造型','SPA']
                                break
                            case 1:
                                data.multiArray1[2] = ['洗澡', '造型','SPA']
                                break
                            case 2:
                                data.multiArray1[2] = ['洗澡', '造型','SPA']
                                break
                            case 3:
                                data.multiArray1[2] = ['洗澡', '造型','SPA']
                                break
                            case 4:
                                data.multiArray1[2] = ['洗澡', '造型','SPA']
                                break
                        }
                        break
                    case 1:
                        switch (data.multiIndex1[1]) {
                            case 0:
                                data.multiArray1[2] = ['洗澡']
                                break
                            case 1:
                                data.multiArray1[2] = ['洗澡']
                                break
                            case 2:
                                data.multiArray1[2] = ['洗澡']
                                break
                        }
                        break
                }
                data.multiIndex1[2] = 0
                break
        }
        console.log(data.multiIndex1)
        this.setData(data)
    },

    bindPickerChange2(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindMultiPickerChange2(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex2: e.detail.value
        })
    },
    bindMultiPickerColumnChange2(e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
        const data = {
            multiArray2: this.data.multiArray2,
            multiIndex2: this.data.multiIndex2
        }
        data.multiIndex2[e.detail.column] = e.detail.value
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex2[0]) {
                    case 0:
                        data.multiArray2[1] = ['中型', '大型', '小型']
                        data.multiArray2[2] = ['洗澡', '造型','SPA']
                        break
                    case 1:
                        data.multiArray2[1] = ['成年','幼年']
                        data.multiArray2[2] = ['洗澡']
                        break
                }
                data.multiIndex2[1] = 0
                data.multiIndex2[2] = 0
                break
            case 1:
                switch (data.multiIndex2[0]) {
                    case 0:
                        switch (data.multiIndex2[1]) {
                            case 0:
                                data.multiArray2[2] = ['洗澡', '造型','SPA']
                                break
                            case 1:
                                data.multiArray2[2] = ['洗澡', '造型','SPA']
                                break
                            case 2:
                                data.multiArray2[2] = ['洗澡', '造型','SPA']
                                break
                            case 3:
                                data.multiArray2[2] = ['洗澡', '造型','SPA']
                                break
                            case 4:
                                data.multiArray2[2] = ['洗澡', '造型','SPA']
                                break
                        }
                        break
                    case 1:
                        switch (data.multiIndex2[1]) {
                            case 0:
                                data.multiArray2[2] = ['洗澡']
                                break
                            case 1:
                                data.multiArray2[2] = ['洗澡']
                                break
                            case 2:
                                data.multiArray2[2] = ['洗澡']
                                break
                        }
                        break
                }
                data.multiIndex2[2] = 0
                break
        }
        console.log(data.multiIndex2)
        this.setData(data)
    },
    formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.formId);
        console.log('form发生了submit事件，携带数据为：', e.detail.value);

    },
    formReset() {
        console.log('form发生了reset事件')
    },

  onLoad: function () {


  },


});

