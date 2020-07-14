Page({
  name: 'Home',

  data () {
    return {
      isLogined: false,
      userInfo: {}
    }
  },
  onShareAppMessage(params) {
    return {
        title: '我是标题我是标题',
        desc: '我是摘要，我是摘要',
        imageUrl: 'https://p3.ssl.qhimg.com/t011e94f0b9ed8e66b0.png',
        path: '/index/index',
        success(res) {
          // 分享成功
          console.log('分享渠道为' + res.channel);
          console.log('分享结果为' + res.result);
        },
        fail(err) {
          console.log('分享结果为' + res.result);
        }
    };
  },
  methods: {
    navigateToMore () {
      qh.navigateTo({ url: '/pages/more/index' })
    }
  }
})
