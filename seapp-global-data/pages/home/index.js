Page({
  name: 'Home',

  data () {
    return {
      isLogined: false,
      userInfo: {}
    }
  },
  methods: {
    navigateToMore () {
      // 设置全局数据，方法一
      getApp()["my_global"] = "清水出芙蓉"
      // 设置全局数据，方法二
      this.$root["my_global_other"] = "天然去雕饰"

      qh.navigateTo({ url: '/pages/more/index' })
    }
  }
})
