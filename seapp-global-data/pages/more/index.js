// pages/more/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: () => ({
    my_global: "",
    my_global_other: ""
  }),
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 两种方法是等价的
    this.my_global = this.$root["my_global"]
    this.my_global_other = getApp()["my_global_other"]    
  },
  onReady () {},
  onUnload () {},
  onShow () {},
  onHide () {}
})
