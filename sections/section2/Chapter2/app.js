const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    add(num){
      this.counter += num;
    },
    reduce(num){
      this.counter -= num;
    },
    submitForm(){
      alert('Submitted!');
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
