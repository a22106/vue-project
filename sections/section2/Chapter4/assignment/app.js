const app = Vue.createApp({
  data() {
    return {
      clsInput1: "",
      clsInput2: "",
      inlineCls: ""
    };
  },
  watch: {
  },
  computed: {
  },
  methods: {
    toggleParagraph(){
      console.log("toggleParagraph called.");
      if(this.clsInput2 === "user1" || this.clsInput2 === "user2"){
        this.inlineCls = this.clsInput2;
      } else {
        this.inlineCls = "";
      }
    },
    setClsInput1(event){
      console.log(event.target.value);
      this.clsInput1 = event.target.value;
    },
    setClsInput2(event){
      console.log(event.target.value);
      this.clsInput2 = event.target.value;
    }
  },
});

app.mount('#assignment');