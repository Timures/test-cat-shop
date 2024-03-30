<template>
    <section class="cart">
        <MainTitle :text="'Корзина'" />
        <p>{{ getBasketItems.length }}</p>
        <div class="cart-list">
            <CartItem v-for="item in getBasketItems" :key="item.id" :food="item" />
        </div>
        <footer class="cart-bottom">
            <div class="cart-total">
                <span>Общая сумма</span>
                <span class="value">{{ getCartTotalPrice }} ₽</span>
            </div>
            <div class="cart-info">
                * Сумма заказа для доставки курьером должна составлять не менее 500 ₽
            </div>
            <div class="cart-actions">
                <button class="close" @click="handleCloseCart">Вернуться к покупкам</button>
                <button class="order">Оформить заказ</button>
            </div>
        </footer>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainTitle from '@/components/Common/MainTitle.vue'
import CartItem from '@/components/Menu/CartItem.vue'
export default {
    name: 'MainCart',
    components: { MainTitle, CartItem },
    computed: {
        ...mapGetters(['getBasketItems', 'getCartTotalPrice'])
    },
    methods: {
    ...mapActions(['showBasket']),
    handleCloseCart() {
      this.showBasket(false)
    }
  }
}
</script>

<style lang="scss">
.cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px 20px 25px 25px;

    &-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex-grow: 1;
        width: 100%;
        max-height: 60vh;
        overflow-y: auto;
    }

    &-bottom {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 100%;
        align-items: flex-start;
        align-self: flex-end;
    }

    &-total {
        font-family: 'Neucha', cursive;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.05em;
        color: #000;

        span.value {
            font-size: 22px;
        }
    }

    &-info {
        max-width: 360px;
        font-family: "Ubuntu", sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 125%;
        letter-spacing: 0.03em;
        color: #121212;
    }

    &-actions {
        display: flex;
        gap: 30px;

        button {
            cursor: pointer;
            box-shadow: none;
            border: none;
            font-family: 'Neucha', cursive;
                font-weight: 400;
                font-size: 18px;
                letter-spacing: 0.05em;
                border-radius: 8px;
            &.close {
                
                color: #000;
                padding: 19px 23px;
                border: 1px solid #afafaf;
               
                box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
                background-color: #fff;
            }

            &.order {
                padding: 19px 25px;
                box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
background: #312525;
color: #fff;
            }
        }
    }

}
</style>