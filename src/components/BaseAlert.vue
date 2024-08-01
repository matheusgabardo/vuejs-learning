<template>
    <div :class="variantClass">
        {{ test }}
        <slot />
    </div>
</template>

<script>
export default{
    props: {
        variant: {
            type: String,
            default: ''
        },
        text: {
            type: Object,
            default: () => {},
        }
    },
    computed: {
        variantClass(){
            return[
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    }
}
</script>

<style>
    .alert {
        padding: 1rem;
        border-radius: 10px;
        color: gray;
        background-origin: #ddd;
    }
    .alert-success {
        background-color: #246435;
        color: #fff;
    }
    .alert-danger {
        background-color: #642424;
        color: #fff;
    }
</style>