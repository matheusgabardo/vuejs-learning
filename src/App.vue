<template>
    <BaseAlert 
      v-if="showAlert"
      :variant="variant" class="base-alert"
      @close="onClose()"
    >
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
        showAlert: true,
        variant: 'success',
        text: 'Seu form foi aceito'
      }
    },
    computed: {
    },
    methods: {
        onClose() {
          this.showAlert = false
        }
    }
  }
</script>

<style>
  .base-alert {
    display: flex;
    justify-content: space-between;
  }
</style>
