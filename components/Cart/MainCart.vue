<template>
    <section class="main-cart">
        <CartCheck v-show="!isOrder" @order="showOrder" />

        <CartOrder v-show="isOrder" />
        
    </section>
</template>

<script>
import CartCheck from './CartCheck.vue'
import CartOrder from './CartOrder.vue'
export default {
    name: 'MainCart',
    components: { CartCheck, CartOrder },
    data(){
        return {
            isOrder: false
        }
    },
    methods: {
        showOrder(){
            this.isOrder = true
        }
    }
}
</script>

<style lang="scss" scoped>
.main-cart {
    height: 100%;
}
</style>