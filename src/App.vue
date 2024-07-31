<template>
  <div>
    <TheHeader>
      <template v-slot:title>
        home
      </template>
      <template v-slot:description></template>
    </TheHeader>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';

  export default {
    name: 'App',
    components:{
      TheHeader,
    },
    data() {
      return {
        name: 'Matheus',
        showHeader: false,
      }
    },
    beforeUpdate(){},
    updated(){},
    beforeCreate(){},
    created(){},
    beforeMount(){},
    mounted(){},
    beforeUnmount(){},
    unmounted(){},
    methods: {
    },
    computed: {
    }
  }
</script>

<style>

</style>
