<template class="main-wrapper">
  <div>
    <br/>
    <button @click="user.first_name = 'Matheus'">Mudar nome</button>
    <br/>
    <br/>
    {{  user.first_name }}
    <br/>
    <br>
    {{ fullName }}
    <!-- Em resumo o composition api controla o que é ou não reativo.
    ativada ao inicio substituindo created, beforeCreated. -->
  </div>
</template>

<script>

  import { ref, computed, watch } from 'vue';

  export default {
    name: 'App',
    components: {
    },
    setup(){
      const user = ref({
        first_name: 'Jhon',
        last_name: 'Snow'
      })

      const fullName = computed(() => {
        return `${user.value.first_name} ${user.value.last_name}`
      })

      watch(user,() => {
        console.log('name changed!')
      }, { deep: true })
      return{
        fullName,
        user
      }
    }
  }
</script>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
  .main-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
