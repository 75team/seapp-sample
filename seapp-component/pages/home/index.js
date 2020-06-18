import Demo from '../../components/Demo.vue'

Page({
  name: 'Home',
  components: {
    Demo
  },
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
