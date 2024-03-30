<template>
    <div class="food-counter">
        <button @click="decrement">
            <span class="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3337 8.00024H2.66699" stroke="#2A344A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </span>
        </button>
        <span class="food-counter__value">{{ value }}</span>
        <button @click="increment">
            <span class="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5554 7.99998H4.44434M7.99989 11.5554V4.44434" stroke="#2A344A" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'FoodCounter',
    props: {
        value: {
            type: Number,
            default: 0
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 1000
        }
    },
    methods: {
        increment() {
            if (this.value < this.max) {
                this.$emit('increment', this.value + 1);
            }
        },
        decrement() {
            if (this.value > this.min) {
                this.$emit('decrement', this.value - 1);
            }
        }
    }
};
</script>

<style lang="scss">
.food-counter {
    display: flex;
    justify-content: center;
    align-items: end;

    &.small {
        button {
            background: #312525;
            width: 25px;
            height: 25px;
            span.icon {
                svg {
                    path {
                        stroke: #fff;
                    }
                }
            }
        }
        .food-counter__value {
            margin: 0 7px;
font-size: 16px;
color: #353535;
        }
    }

    button {
        cursor: pointer;
        border-radius: 60px;
        padding: 7px;
        width: 30px;
        height: 30px;
        background: #fff;
        box-shadow: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__value {
        margin: 0 13px;
        font-family: 'Neucha', cursive;
        font-weight: 400;
        font-size: 19px;
        letter-spacing: 0.05em;
        color: #fff;
    }
}
</style>