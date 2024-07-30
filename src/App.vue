<template>
  <div>
    <div>
      <h1 :class="{ 'title': true, 'title-home': isHome }">aa</h1>
      <p :class="pClass">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore nesciunt fugit suscipit voluptatum illo, hic laborum ea quaerat corrupti ipsam quia ad officiis autem veniam? Necessitatibus laborum autem reprehenderit.</p>
      <p :style="styleClass">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quaerat aut voluptatem dicta nulla a error doloribus, velit eaque provident quos, sapiente voluptate tempore expedita odio soluta! Harum, quasi molestias?</p>
    </div>
      <div 
        v-for="(obj, index) in todos"
        :key="obj.id"
        class="todos-item"
      >
        <div>
          <img
            :if="obj.imgSrc"
            :src="obj.imgSrc"
            :alt="obj.imgAlt"
          />
        </div>
        {{ index }}
        {{ obj.title }}
      </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        classVar: 'title',
        pClass: ['title','textHome'],
        styleClass: {backgroundColor: 'black', color: 'aqua'},
        isHome: true,
        text: true,
        todos: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            "imgSrc": 'https://placehold.co/100',
            "imgAlt": 'img alt'
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .todos-item {
    background-color: #000;
    padding: .5rem;
    margin: .5rem;
    color: #fff;
  }
  .title {
    font-size: 20px;
    color: blue;
  }
  .title-home {
    color: green;
  }
  .text {
    color: gray;
  }
  .textHome {
    color: #42b983;
  }
  .styleClass {
    color: aqua
  }
</style>
