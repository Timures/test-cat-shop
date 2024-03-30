<template>
    <div class="food" :class="{active: food.IsInBasket}">
        <div class="food-top">
            <img src="/images/cat.png" alt="cat photo">
            <div class="food-favorite">
                <button class="food-favorite__btn">
                    <span class="icon" v-show="!food.IsFavorite">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.99998 18.8873C9.71525 18.8873 9.44075 18.7842 9.22682 18.5968C8.41887 17.8903 7.63991 17.2264 6.95265 16.6408L6.94914 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630339 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563506 3.94485 1.58661 2.83508C2.62191 1.71219 4.0425 1.09375 5.58715 1.09375C6.74163 1.09375 7.7989 1.45874 8.72954 2.1785C9.1992 2.54181 9.62492 2.98645 9.99998 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8058 13.4378 15.066 14.9205 13.0514 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 9.99998 18.8873ZM5.58715 2.26532C4.37362 2.26532 3.25881 2.74963 2.44781 3.62915C1.62475 4.52194 1.17141 5.75607 1.17141 7.10434C1.17141 8.52692 1.70013 9.79919 2.88558 11.2296C4.03136 12.6122 5.73562 14.0645 7.70888 15.7462L7.71254 15.7492C8.40239 16.3371 9.1844 17.0036 9.9983 17.7153C10.8171 17.0023 11.6003 16.3347 12.2915 15.7458C14.2647 14.0642 15.9688 12.6122 17.1145 11.2296C18.2998 9.79919 18.8285 8.52692 18.8285 7.10434C18.8285 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6263 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9871 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 9.99998 5.03036C9.73707 5.03036 9.49965 4.89548 9.36476 4.66949C9.10261 4.23004 8.65523 3.60199 8.01283 3.10516C7.29216 2.54791 6.47597 2.26532 5.58715 2.26532Z"
                                fill="black" />
                        </svg>
                    </span>
                    <span class="icon" v-show="food.IsFavorite">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_103_438)">
                                <path
                                    d="M18.4134 2.83508C17.3781 1.71219 15.9575 1.09375 14.413 1.09375C13.2585 1.09375 12.2012 1.45874 11.2704 2.1785C10.8008 2.54181 10.3752 2.9863 10 3.5051C9.62494 2.98645 9.19922 2.54181 8.7294 2.1785C7.79877 1.45874 6.74149 1.09375 5.58701 1.09375C4.04251 1.09375 2.62177 1.71219 1.58646 2.83508C0.563507 3.94485 0 5.46097 0 7.10434C0 8.79578 0.630341 10.3441 1.98364 11.9771C3.19427 13.4378 4.93423 14.9207 6.94916 16.6377C7.63718 17.2241 8.41705 17.8888 9.22684 18.5968C9.44077 18.7842 9.71527 18.8873 10 18.8873C10.2846 18.8873 10.5592 18.7842 10.7729 18.5971C11.5826 17.8889 12.363 17.224 13.0513 16.6373C15.0659 14.9205 16.8059 13.4378 18.0165 11.9769C19.3698 10.3441 20 8.79578 20 7.10419C20 5.46097 19.4365 3.94485 18.4134 2.83508Z"
                                    fill="#F34942" />
                            </g>
                            <defs>
                                <clipPath id="clip0_103_438">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </button>
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
                <button v-show="!food.IsInBasket" class="food-action__btn" @click="addToCart(food.id)">
                    В корзину
                </button>
                <FoodCounter :value="food.value" v-show="food.IsInBasket" @increment="incrementQuantity(food.id)" @decrement="decrementQuantity(food.id)" />
            </div>
        </div>
    </div>
</template>

<script>
import FoodCounter from './FoodCounter'
export default {
    name: 'FoodCard',
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
    components: { FoodCounter },
    methods: {
        // Вызываем действие для сохранения товара в Vuex
        addToCart(foodID) {
            this.$emit('addToCart', foodID); 
        },
        incrementQuantity(dishId) {
            console.log('test increment ', dishId);
            this.$store.commit('incrementQuantity', dishId); // Вызываем мутацию для увеличения количества
        },
        decrementQuantity(dishId) {
            this.$store.commit('decrementQuantity', dishId); // Вызываем мутацию для увеличения количества
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
            h2, p {
                color: #fff;
            }
        }
        .food-price, .food-weight {
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

        &__btn {
            box-shadow: none;
            background-color: transparent;
            border: none;

            span.icon {
                svg {
                    width: 20px;
                    height: 20px;

                    path: {
                        fill: none;
                    }
                }

                &.active {
                    svg {
                        fill: #F34942;
                    }
                }
            }
        }
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
            font-family: 'PT Sans Narrow', sans-serif;;
            font-weight: 400;
            font-size: 15px;
            letter-spacing: 0.03em;
            color: #fff;
        }
    }
}
</style>