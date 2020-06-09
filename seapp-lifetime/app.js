App({
  data: () => ({}),
  beforeCreate(){
    console.log("APP: beforeCreate")
  },
  created(){
    console.log("APP: created")
  },
  onLoad () {
    console.log("APP: onload")
  },
  onUnload () {
    console.log("APP: onload")
    
  },
  onReady () {
    console.log("APP: onready")
  },
  mounted(){
    console.log("APP: mounted")
  },
  beforeMount(){
    console.log("APP: beforeMount")
  },
  beforeUpdate(){
    console.log("App: beforeUpdate")
  },
  updated(){
    console.log("App: updated")
  },
  beforeDestroy () {
    console.log("APP: beforeDestroy")    
  },
  onShow () {
    console.log("APP: onshow")
  }

})