<template>
    <div>
        app hooks
    </div>
</template>

<script>
import { onBeforeMount,  onMounted, onBeforeUnmount, onUnmounted } from 'vue';

export default {
    // metodo de options 
    // beforeMount(){},
    // mounted(){},
    // beforeUnmount(){},
    // unmounted(){},



    // o setup é justamente a fase de criação, 
    // então os setups são transformados em hooks e 
    // prontos para serem importados.
    setup(){
        onBeforeMount(() => {
            console.log('before mount');
        })
        onMounted(() => {
            console.log('onMounted')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeMount');  
        })
        onUnmounted(() => {
            console.log('onUnmount');
            
        })
    }
    // agora precisamos importar os outros hooks
}
</script>