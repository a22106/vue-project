const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      hideList: false,
      toggle: ["Hide List", "Show List"]
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    toggleList() {
      this.hideList = !this.hideList;
    }
  }
});

app.mount('#assignment');