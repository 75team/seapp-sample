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
      qh.navigateTo({ url: '/pages/more/index' })
    }
  }
})
