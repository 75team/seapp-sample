const URL_TMPL =
  "https://fanyi.youdao.com/openapi.do?keyfrom=youdao111&key=60638690&type=data&doctype=json&version=1.1&q=%s";
let handle;

Page({
  name: "Index",

  data() {
    return {
      nowWord: "",
      wordDesc: {},
      showTranslate: false,
      height: 50,
      isSearching: false,
      isBanned: false,
      modalVisible: false,
      modalMessage: false
    };
  },
  beforeCreate(){
    console.log("page: beforeCreate")
  },
  created(){
    console.log("page: created")
  },
  beforeMount(){
    console.log("page: beforeMount")
  },
  onLoad () {
    console.log("page: onload")
  },
  onUnload () {
    console.log("page: onunload")
  },
  onReady () {
    console.log("page: onready")
  },
  beforeDestroy () {
    console.log("page: beforeDestroy")   
    debugger; 
  },
  beforeUpdate(){
    console.log("page: beforeUpdate")
  },
  updated(){
    console.log("page: updated")
  },
  onShow () {
    console.log("page: onshow")
  },
  onHide () {
    console.log("page: onHide")
  },
  mounted() {
    console.log("page: mounted")
    // let a = getApp()
    // console.error(a.ccc)
    if (this.$route.query && this.$route.query.word){
      this.nowWord = this.$route.query.word;
      this.getWordDesc();
    }
    // this.videoContext = this.$createVideoContext('myVideo')
    // setInterval(_=>{
    //   this.height=this.height+50;
    // },100)
  },
  methods: {
    async input(e) {
      this.showTranslate = false;
      if (e.code == "Enter") {
        await this.getWordDesc();
        this.showTranslate = true;
      }
    },

    async change(val){
      this.nowWord = val
    },

    emitPause() {
      this.videoContext.pause()
    },

    async getWordDesc() {
      qh.request({
        url: URL_TMPL.replace(/%s/, this.nowWord),
        success: data => {
          this.wordDesc = data.data.translation[0];
          this.showTranslate = true;
        }
      })
      // this.nowWord = "what"
    },

    afterClean(){
      this.wordDesc = "";
      this.showTranslate = false;
    },

    addWordBook() {
      let words = localStorage.getItem("words");
      words = words === null ? [] : JSON.parse(words);

      words.push(this.nowWord);

      localStorage.setItem("words", JSON.stringify(words));

      qh.showModal({
        title: "恭喜",
        content: "成功加入【" + this.nowWord + "】到单词本"
      });
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
    }
  }
});
