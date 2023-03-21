const app = Vue.createApp({
  data() {
    return {
      myName: "Pius Hwang",
      myAge: 33,
      catImage: "https://i.pinimg.com/originals/39/6f/b9/396fb90286728d6573405c60941043e1.jpg"
    };
  },
  methods: {
    getAge(){
      const randomNumber = Math.random();
      return randomNumber;
    }
  }
})

app.mount('#assignment')