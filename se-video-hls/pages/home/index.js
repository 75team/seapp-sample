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
    },
    startLoad(){
      this.videoContext.startLoad()
    },
    stopLoad(){
      this.videoContext.stopLoad()
    },
    onPlay(e) {
      console.log('on play')
    },
    onPause() {
      console.log('on pause')
    },
    onEnded() {
      console.log('on end')
    },
    onTimeupdate({ detail }) {
      console.log('on timeupdate', detail)
    },
    onFullscreenchange({ detail }) {
      console.log('on fullscreen', detail)
    },
    onWaiting() {
      console.log('on waiting')
    },
    onProgress({ detail }) {
      console.log('on progress', detail)
    },
    onError(error) {
      console.log(`on error`, error)
    },
    emitPlay() {
      this.videoContext.play()
    },
    emitPause() {
      this.videoContext.pause()
    },
    emitStop() {
      this.videoContext.stop()
    },
    emitSeek() {
      this.videoContext.seek(3)
    },
    requestFullScreen() {
      this.videoContext.requestFullScreen()
    },
    exitFullScreen() {
      this.videoContext.exitFullScreen()
    },
    rateChange(v) {
      this.rate = v
      this.videoContext.playbackRate(v)
    },
    srcChange(v) {
      this.src = v
    },
    controlsChange(v) {
      this.controls = v
    },
    titleChange(e) {
      this.title = e.detail.value
    },
    mutedChange(v) {
      this.muted = v
    },
    loopChange(v) {
      this.loop = v
    },
    posterChange(v) {
      this.poster = v
    },
    objectFitChange(v) {
      this.objectFit = v
    },
    showMuteBtnChange(v) {
      this.showMuteBtn = v
    },
    showFullscreenBtnChange(v) {
      this.showFullscreenBtn = v
    },
    volumeSliderChanged(e) {
      this.videoContext && (this.videoContext.volume = e.detail.value / 100)
    }
  },
  mounted() {
    this.videoContext = this.$createVideoContext('myVideo', this)
  }
})
