<template>
    <BaseAlert :variant="variant">
      <slot>{{ text }}</slot>
    </BaseAlert>
</template>

<script>
  import BaseAlert from '@/components/BaseAlert.vue';
  export default {
    name: 'App',
    components:{
      BaseAlert,
    },
    data() {
      return { 
        variant: 'danger',
        text: 'Seu form foi aceito'
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
