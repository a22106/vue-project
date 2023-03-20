# **How to start simple js, html vue app**

- Create 3 files: app.js, index.html, styles.css
- Add these lines in the <head> tag:

```html
<script src="<https://unpkg.com/vue@next>" defer></script>
<script src="app.js" defer></script>
```

- add a function on the 'js' file and mount it on the 'html' file

```jsx
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})

app.mount('#connecting')
```

```html
<div id="connecting">
  <p>{{ message }}</p>
</div>
```

# Interpolation syntax
- Add variable(s) inside of the `return` in the `data()`

```jsx
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  }
});
```

- Use variable enclosed in double brackets:

```html
<p>{{ courseGoal }}</p>
```

## Vue bind

```html
<p>Learn more<a v-bind:href="vueLink">about Vue</a>.</p>
```

## Add a new function and use it
add `methods:` after the `data()`. It collects functions so you can use them in the HTML.

jsx
```jsx
methods:{
  outputGoal(){
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
      return 'Learn Vue!';
    } else{
      return 'Master Vue!';
    }
  }
}
```

```html
<p>{{ outputGoal() }}</p>
```

## How to use the variable in the `data()` at the functions in the `method`.

- Use `this.`

```jsx
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB:'Master Vue and build my own app!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods:{
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber <0.5){
        return this.courseGoalA; // `this.` allows me to use the variable inside the data()
      } else{
        return this.courseGoalB;
      }
    }
  }
});
```