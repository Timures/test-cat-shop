<template>
    <div class="basket-item">
        <div class="basket-item__main">
            <div class="basket-item__img">
                <img src="/images/cat.png" alt="cat photo">
            </div>
        <div class="basket-item__content">
            
            <h3>{{ food.name }}</h3>
            <p>{{ food.description }}</p>
            <div class="basket-item__weight">
                ({{ food.weight }} г)
            </div>
            <div class="basket-item__favorite">
                <FoodFavorite class="cart" :IsInFavorite="food.IsFavorite" :foodId="food.id" />
            </div>
        </div>
        </div>
        <div class="basket-item__actions">
            <div class="basket-item__value">
            <div class="basket-item__price">
                <span>Цена</span>
                <span class="value">{{ food.price }} ₽</span>
            </div>
            <FoodCounter class="small" :value="food.value" @increment="handleIncrementQuantity(food.id)"
                @decrement="handleDecrementQuantity(food.id)" />
            <div class="basket-item__total">
                <span>Сумма</span>
                <span class="value">{{ food.price * food.value }} ₽</span>
            </div>

        </div>
        <button class="basket-item__remove" @click="handleRemoveFromCart(food.id)">
            <span class="icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_103_598)">
                        <path
                            d="M13.9287 2.14286H10.1788V1.60714C10.1788 0.71954 9.45923 0 8.57163 0H6.42876C5.54116 0 4.82162 0.71954 4.82162 1.60714V2.14286H1.07161C0.775736 2.14286 0.535889 2.38271 0.535889 2.67859C0.535889 2.97446 0.775767 3.21428 1.07161 3.21428H1.65392L2.67875 14.513C2.70402 14.7897 2.93665 15.0011 3.21448 15H11.7859C12.0637 15.0011 12.2963 14.7897 12.3216 14.513L13.3464 3.21428H13.9288C14.2247 3.21428 14.4645 2.97443 14.4645 2.67856C14.4645 2.38268 14.2246 2.14286 13.9287 2.14286ZM5.89304 1.60714C5.89304 1.31126 6.13289 1.07142 6.42876 1.07142H8.57163C8.86751 1.07142 9.10735 1.31126 9.10735 1.60714V2.14286H5.89307V1.60714H5.89304ZM11.2968 13.9285H3.70359L2.73234 3.21428H5.35735H12.2707L11.2968 13.9285Z"
                            fill="white" />
                        <path
                            d="M5.89285 12.2855C5.89279 12.2848 5.89276 12.2841 5.8927 12.2833L5.35697 4.78335C5.33597 4.48748 5.07908 4.26467 4.78323 4.28567C4.48735 4.30667 4.26455 4.56356 4.28555 4.85941L4.82128 12.3594C4.84127 12.6403 5.07537 12.8578 5.357 12.8571H5.39558C5.69074 12.8366 5.91338 12.5807 5.89285 12.2855Z"
                            fill="white" />
                        <path
                            d="M7.50008 4.28564C7.2042 4.28564 6.96436 4.52549 6.96436 4.82137V12.3214C6.96436 12.6172 7.2042 12.8571 7.50008 12.8571C7.79596 12.8571 8.0358 12.6172 8.0358 12.3214V4.82137C8.0358 4.52549 7.79596 4.28564 7.50008 4.28564Z"
                            fill="white" />
                        <path
                            d="M10.2166 4.28567C9.92076 4.26467 9.6639 4.48748 9.6429 4.78335L9.10718 12.2833C9.08549 12.5784 9.3071 12.8352 9.60216 12.8569C9.60307 12.8569 9.60395 12.857 9.60486 12.8571H9.6429C9.92452 12.8578 10.1586 12.6403 10.1786 12.3594L10.7143 4.85941C10.7353 4.56356 10.5125 4.3067 10.2166 4.28567Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_103_598">
                            <rect width="15" height="15" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </span>
        </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import FoodFavorite from '@/components/Menu/FoodFavorite.vue';
import FoodCounter from '@/components/Menu/FoodCounter.vue'
export default {
    name: 'CartItem',
    props: {
        food: {
            name: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: null
            },
            weight: {
                type: Number,
                default: null
            },
            IsInBasket: {
                type: Boolean,
                default: false
            },
            IsFavorite: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number,
                default: null
            },
            value: {
                type: Number,
                default: 0
            },
            categoryId: {
                type: Number,
                default: null
            }
        }
    },
    components: { FoodFavorite, FoodCounter },
    methods:{
        ...mapActions(['incrementQuantity', 'decrementQuantity', 'removeFromCart']),
        handleIncrementQuantity(dishId) {
            this.incrementQuantity(dishId);
        },
        handleDecrementQuantity(dishId) {
            this.decrementQuantity(dishId);
        },
        handleRemoveFromCart(dishId){
            this.removeFromCart(dishId);
        }
    }
}
</script>

<style lang="scss">
.basket-item {
    border-radius: 8px;
    background-color: #fff;
    padding: 15px 0 15px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 528px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    &__main {
        display: flex;
        gap: 24px;
        @media screen and (max-width: 767px) {
            flex-direction: column;
            width: 100%;
        }
    }

    &__actions {
        display: flex;
        gap: 23px;
        align-items: center;
        @media screen and (max-width: 767px) {
            justify-content: space-between;
            width: 100%;
        }
    }

    &__img {
        img {
            width: 80px;
            height: 60px;
        }
    }

    &__content {
        max-width: 211px;
        position: relative;
        flex-grow: 1;
        @media screen and (max-width: 767px) {
            max-width: 90%;
        }

        h3 {
            font-family: 'Neucha', cursive;
            font-weight: 400;
            font-size: 16px;
            line-height: 156%;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #141414;
            max-width: 90%;
        }

        p {
            font-family: "PT Sans Narrow", sans-serif;
            font-weight: 400;
            font-size: 13px;
            color: #717171;
        }
    }

    &__weight {
        font-family: "PT Sans Narrow", sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #717171;
    }

    &__favorite {
        position: absolute;
        top: 0;
        right: 0;
    }

    &__value {
        display: flex;
        flex-direction: column;
        gap: 10px;
        @media screen and (max-width: 767px) {
            flex-direction: row;
            gap: 16px;
        }
    }

    &__price, &__total {
        font-family: 'Neucha', cursive;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: 0.05em;
        color: #141414;

        span.value {
            font-size: 16px;
            color: #141414;
        }
    }

    &__remove {
        cursor: pointer;
        border: none;
        box-shadow: none;

        border-radius: 200px 0 0 200px;
        background: #312525;

width: 41px;
height: 64px;
display: flex;
justify-content: center;
align-items: center;
    }
}
</style>