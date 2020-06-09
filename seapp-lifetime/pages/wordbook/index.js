Page({
	name: 'WordBook',

	data() {
		return {
            words: [],
            pn: 1,
            ps: 10
		}
	},
	mounted() {
		console.log("page2: mounted")
		this.getWords()
	},

	beforeCreate(){
		console.log("page2: beforeCreate")
	  },
	  created(){
		console.log("page2: created")
	  },
	  beforeMount(){
		console.log("page2: beforeMount")
	  },
	  onLoad () {
		console.log("page2: onload")
	  },
	  onUnload () {
		console.log("page2: onunload")
	  },
	  onReady () {
		console.log("page2: onready")
	  },
	  beforeDestroy () {
		console.log("page2: beforeDestroy")    
	  },
	  beforeUpdate(){
		console.log("page2: beforeUpdate")
	  },
	  updated(){
		console.log("page2: updated")
	  },
	  onShow () {
		console.log("page2: onshow")
	  },
	  onHide () {
		console.log("page2: onHide")
	  },
	//   mounted() {
	// 	console.log("page: mounted")
	// 	// let a = getApp()
	// 	// console.error(a.ccc)
	// 	if (this.$route.query && this.$route.query.word){
	// 	  this.nowWord = this.$route.query.word;
	// 	  this.getWordDesc();
	// 	}
	// 	// this.videoContext = this.$createVideoContext('myVideo')
	// 	// setInterval(_=>{
	// 	//   this.height=this.height+50;
	// 	// },100)
	//   },
	methods: {
		getWords() {
			let words = localStorage.getItem('words')
			words = words === null ? [] : JSON.parse(words)

			this.words = words
        },
        pageChange(val){
            this.pn = val
        }
	},
});