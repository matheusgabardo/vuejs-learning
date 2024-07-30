<template>
  <div>
    
    <div>
      <h2>todos em aberto</h2>
      <div v-for="todo in uncompletedTodos" :key="todo.id">
        {{ todo.title }}
        <input type="checkbox" name="" id="" v-model="todo.completed" />
      </div>
    </div>
    <div>
      <h2>todos completas</h2>
      <div v-for="todo in completedTodos" :key="todo.id">
          {{ todo.title }}
          <input type="checkbox" name="" id="" v-model="todo.completed" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        todos: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
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
    },
    methods: {
      onClick($evt){
        console.log('click', $evt);
      }
    },
    computed: {
      uncompletedTodos(){
        return this.todos.filter(todo => !todo.completed)
      },
      completedTodos(){
        return this.todos.filter(todo => todo.completed)
      }
    }
  }
</script>

<style>

</style>
