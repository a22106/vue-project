const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
    };
  },
  methods:{
    addGoal() {
      console.log(this.enteredGoalValue)
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(idx){
      this.goals.splice(idx, 1); // remove 1 item at index idx
    }
  }
});

app.mount('#user-goals');
