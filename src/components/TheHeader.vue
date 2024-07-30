<template>
    <header class="header">
        <div>
            Header
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',
        mounted(){
            window.addEventListener('resize', this.resize)
        },
        beforeUnmount(){
            console.log('beforeUnmount');
            window.removeEventListener('resize', this.resize)
        },
        // unmounted(){
        //     console.log('unmounted');
        // },
        methods: {
            resize($evt){
                console.log('alterou a janela', $evt)
            }
        }
    }
</script>

<style>
    .header {
        background-color: #00000050;
        color: #fff
    }
</style>
