<template>
    <header class="header">
        <h1 v-if="$slots.title">
            <slot name="title"/>
        </h1>
    </header>
    <div class="description">
        <p v-if="$slots.description">
            <slot name="description"/>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader',
        methods: {
        }
    }
</script>

<style>
    .header {
        background-color: #00000050;
        color: #fff
    }
</style>
