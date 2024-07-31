<template>
    <BaseCard />
</template>

<script>
  import BaseCard from '@/components/BaseCard.vue';
  export default {
    name: 'App',
    components:{
      BaseCard,
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
