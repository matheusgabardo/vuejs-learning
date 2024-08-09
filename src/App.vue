<template>
  <div class="px-3 py-10 md:px-10 bg-gray-800">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />
      <template v-else>
        <TodoForm />
        <TodoItems v-if="$store.state.todos.length"/>
        <TodoNotFound v-else/>
      </template>
    </div>
  </div>
</template>

<script>
import TodoSpinner from '@/components/TodoSpinner'
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';
import TodoNotFound from './components/TodoNotFound.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    TodoSpinner,
    TodoForm,
    TodoItems,
    TodoNotFound
  },

  setup(){
    const loading = ref(false)
    const store = useStore();

    loading.value = true;

    store.dispatch('getTodos').finally(() => {
      loading.value = false;
    })
    return {
      loading,
      store
    }
  }
}
</script>

<style scoped></style>
