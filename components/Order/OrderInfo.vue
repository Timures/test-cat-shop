<template>
    <div>
        <div class="order-info">
        <div class="order-price">
            <span class="title">Cтоимость товаров</span>
            <span class="value">{{ getCartTotalPrice }}</span>
        </div>
        <div class="divider"></div>
        <div class="order-total">
            <span class="title">Итого к оплате</span>
            <span class="value">{{ getCartTotalPrice}}</span>
        </div>
        
    </div>
    
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'OrderInfo',
    computed: {
        ...mapGetters(['getCartTotalPrice'])
    }

}
</script>

<style lang="scss" scoped>
.order {
    &-info {
        display: flex;
        flex-direction: column;
        padding-right: 32px;

       
    }

    

    .divider {
        border-bottom: 1px solid #d9d9d9;
        border-radius: 8px;
    }

    &-price {
        span.title {
            font-weight: 300;
        }
    }
    &-total {
        span.title {
            font-weight: 400;
        }
    }
    &-price,
    &-total {
        display: inline-flex;        
        font-family: "Ubuntu", sans-serif;
        padding: 20px 0;
        font-size: 18px;
        color: #222;
        span.title {
            width: 50%;
        }
        span.value {
            font-weight: 400;
        }
    }

}
</style>