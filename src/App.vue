<template>
  <div class="px-3 py-10 md:px-10 bg-gray-800">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoForm />
      <TodoSpinner />
      <TodoItems />
      <TodoNotFound />
    </div>
  </div>
</template>

<script>
import TodoSpinner from '@/components/TodoSpinner'
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';
import TodoNotFound from './components/TodoNotFound.vue';
export default {
  name: 'App',
  components: {
    TodoSpinner,
    TodoForm,
    TodoItems,
    TodoNotFound
  }
}
</script>

<style scoped></style>
