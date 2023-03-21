const app = Vue.createApp({
  data(){
    return{
      username: "",
      confirmUsername: ""
    }
  },
  methods:{
    getAlert(){
      alert("Clicked!");
    },
    setUsername(event){
      this.username = event.target.value;
    },
    confirmUsername(){
      this.confirmUsername = this.username;
    }
  }
})

app.mount("#assignment")