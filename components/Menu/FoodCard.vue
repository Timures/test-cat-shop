<template>
    <div class="food" :class="{ active: food.IsInBasket }">
        <div class="food-top">
            <img src="/images/cat.png" alt="cat photo">

            <div class="food-favorite">
                <FoodFavorite :IsInFavorite="food.IsFavorite" :foodId="food.id" />
            </div>
        </div>
        <div class="food-content">
            <div class="food-title">
                <h2>{{ food.name }}</h2>
                <p>{{ food.description }}</p>
                <div class="food-weight">{{ food.weight }} <span> г</span></div>
            </div>
        </div>
        <div class="food-bottom">
            <div class="food-price">{{ food.price }}<span class="currency"> ₽</span></div>
            <div class="food-action">
                <button v-show="!food.IsInBasket" class="food-action__btn" @click="handleAddToCart(food.id)">
                    В корзину
                </button>
                <FoodCounter :value="food.value" v-show="food.IsInBasket" @increment="handleIncrementQuantity(food.id)"
                    @decrement="handleDecrementQuantity(food.id)" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import FoodFavorite from './FoodFavorite.vue';
import FoodCounter from './FoodCounter'
export default {
    name: 'FoodCard',
    props: [
        'food'
    ],
    components: { FoodFavorite, FoodCounter },
    methods: {
        ...mapActions(['addToCart', 'incrementQuantity', 'decrementQuantity']),

        // Вызываем действие для сохранения товара в Vuex
        handleAddToCart(foodID) {
            this.addToCart(foodID);
        },
        handleIncrementQuantity(dishId) {
            this.incrementQuantity(dishId); // Вызываем мутацию для увеличения количества
        },
        handleDecrementQuantity(dishId) {
            this.decrementQuantity(dishId); // Вызываем мутацию для увеличения количества
        }
    }
}
</script>

<style lang="scss">
.food {
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
    background: #fafafa;
    border-radius: 8px;
    width: 270px;
    height: 390px;

    padding: 30px;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out all;

    &.active {
        background: #312525;
        color: #fff;

        .food-title {

            h2,
            p {
                color: #fff;
            }
        }

        .food-price,
        .food-weight {
            color: #fff;
        }
    }

    &-top {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 130px;
            width: 175px;
        }
    }

    &-favorite {
        position: absolute;
        top: 0;
        right: 0;
    }

    &-content {
        margin-top: 20px;
        flex-grow: 1;
    }

    &-title {
        position: relative;

        h2 {
            font-family: "Neucha", cursive;
            font-weight: 400;
            font-size: 19px;
            line-height: 132%;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #141414;
            margin: 0 auto 20px 0;
            max-width: 80%;
            text-align: left;
        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-size: 15px;
            letter-spacing: 0.04em;
            color: #808080;
        }
    }

    &-weight {
        position: absolute;
        top: 0;
        right: 0;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #808080;
    }

    &-bottom {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        align-self: flex-end;
    }

    &-price {
        font-family: 'Neucha', cursive;
        font-weight: 400;
        font-size: 19px;
        letter-spacing: 0.05em;
        color: #141414;
    }

    &-action {
        &__btn {
            cursor: pointer;
            border: none;
            border-radius: 8px;
            padding: 8px 32px;
            box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.35);
            background: #312525;
            font-family: 'PT Sans Narrow', sans-serif;
            ;
            font-weight: 400;
            font-size: 15px;
            letter-spacing: 0.03em;
            color: #fff;
        }
    }
}
</style>