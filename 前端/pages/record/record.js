// pages/record/record.js
wx.cloud.init()
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var _this=this;
   //1、引用数据库
   const db=wx.cloud.database({
     //这个是环境ID不是环境名称
     env:'cloud1-0guedlw8a91f0fef'
   }) 
    db.collection('record').get({
      success: res => {
        console.log(res);
        this.setData({
          record: res.data
        })
    }})
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