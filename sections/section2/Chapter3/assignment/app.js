const app = Vue.createApp({
  data(){
    return {
      number: 0,
      states: 37
    }
  },
  watch:{
    number(){
      const that = this;
      if (that.number > 37){
        setTimeout(function(){
          that.number = 0;
        }
        , 2000);
      }
    },
  },
  methods:{
    add(value){
      this.number += value;
    },
    calculater(){
      if (this.number >37){
        return "Too much! " + this.number;
      }
      else{
        // return text + this.number
        return "Not there yet! " + this.number;
      }
    }
  }
});

app.mount('#assignment');