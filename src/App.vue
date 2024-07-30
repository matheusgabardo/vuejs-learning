<template>
  <div>
    <TheHeader v-if="showHeader"/>
    <h1>hello</h1>
    {{ name }}
    <button @click="showHeader = !showHeader" >Header show</button>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';

  export default {
    name: 'App',
    components:
    {
      TheHeader,
    },
    data() {
      return {
        name: 'Matheus',
        showHeader: false,
      }
    },
    // Criação
      // Preparar o componente
      // Ajax, inicializar algumas variáveis
      // não tem acesso ao DOM (template)

    // Montagem
      // Inicializar uma lib externa
      // Precisa de acesso ao template (dom)
      // Tem acesso ao template (dom)

    // Atualização
      // debug
      // update

    // Desmontagem
      // remove tudo o que for necessário para liberar memoria

    // Hooks
    // beforeUpdate(){
    //   console.log('beforeUpdate');
    // },
    // updated(){
    //   console.log('updated');
    // },
    // beforeCreate(){
    //     console.log('beforeCreate');
    // },
    // created(){
    //   console.log('created');
    // },
    // beforeMount(){
    //   console.log('beforeMount');
    // },
    // mounted(){
    //   console.log('mounted');
    // },
    // beforeUnmount(){
    //   console.log('beforeUnmount');
    // },
    // unmounted(){
    //   console.log('unmounted');
    // },
    methods: {
    },
    computed: {
    }
  }
</script>

<style>

</style>
