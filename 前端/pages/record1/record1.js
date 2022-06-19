// pages/homepage/homepage.js
wx.cloud.init()
//云函数端初始化
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    starIndex : 0,
    name:'',
    progress:'',
  },
  onChange(e){
    const index = e.detail.index;
    this.setData({
        'starIndex' : index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
 // 获取输入书目 
 nameInput :function (e) { 
  this.setData({ 
  name:e.detail.value 
  }) 
  }, 
   
 // 获取输入进度
  progressInput :function (e) { 
  this.setData({ 
  progress:e.detail.value 
  }) 
  }, 
  //获取评星
  onChange(e){
    const index = e.detail.index;
    this.setData({
        'starIndex' : index
    })
  },
    
  onLoad: function () {

    var TIME = formatTime(new Date());
    this.setData({
      time: TIME,
    });
},

  submit: function (e) {
    if (this.data.name) {  //name不为空的时候
      const db = wx.cloud.database()
      db.collection('record').add({
        data: {
          name: this.data.name,//获得书目
          progress: this.data.progress,//获得进度
          starIndex:this.data.starIndex,//获取评星
          time: this.data.time//获得评论时间
        },
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          // this.setData({
          //   'inputValue': ''
          // })
          wx.showToast({
            title: '记录成功',
          })	//成功将数据写入小程序云开发数据库
          // var that = this;
          // db.collection('comments').where({'course_id':this.data.courseid}).get({
            // success:res=>{
              // console.log(res)
              // this.setData({
              //   comments:res.data
              // })
            // }
          // })
        },
        fail: err => { //未成功写入数据库
          wx.showToast({
            icon: 'none',
            title: '请检查网络'
          })
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    }
    else {//输入框未输入数据
      wx.showModal({
        title: '提示',
        content: '不能为空',
        showCancel: false,
        confirmText: '我知道了',
      })
    }
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
const formatTime = (date) => 
{ var year = date.getFullYear(); 
  var month = date.getMonth() + 1; 
  var day = date.getDate();
   var hour = date.getHours();   
   var minute = date.getMinutes(); 
   var second = date.getSeconds(); 
   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':') } 
   
const formatNumber = n => {
n = n.toString()
return n[1] ? n : '0' + n
}

module.exports = {
formatTime: formatTime
}