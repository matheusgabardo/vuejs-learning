<template>
    <div>
        <AppProduct 
            v-for="product in $store.state.products"
            :key="product.id"
            :product="product"
        />
    </div>
    <div>
        <div>
            {{ this.$store.state.cart }}
        </div>
        <div>
            {{ $store.getters.total }}
        </div>
    </div>
</template>

<script>
    import AppProduct from './AppProduct.vue';

    export default {
        components: { AppProduct}
    }
</script>