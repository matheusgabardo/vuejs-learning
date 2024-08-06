<template>
    <button @click="sendData">
        {{ variant }}
        <slot/>
        <slot name="icon"/>
    </button>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: 'sucess'
            }
        },
        setup(props, {emit}) {
            const sendData = () => {
                console.log('function in child component');
                
                emit('update', props.variant)
            }
            return{
                sendData
            }
        }
    }
</script>