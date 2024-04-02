<template>
    <div id="sidemenu">
        <button class="sidemenu__btn" v-on:click="toggleMenu" v-bind:class="{ active: navOpen }">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
        </button>
        <transition name="translateX">
            <nav v-show="navOpen">
                <div class="sidemenu__wrapper">
                    <ul class="sidemenu__list">
                        <li class="sidemenu__item"><a href="">Котики</a></li>
                        <li class="sidemenu__item"><a href="">Доставка</a></li>
                        <li class="sidemenu__item"><a href="">Акции</a></li>
                        <li class="sidemenu__item"><a href="">Контакты</a></li>
                        <li class="sidemenu__item">
                            <button class="icon" @click="handleToggleBasket">
                                <span class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.491 18.168L18.6462 7.47652C18.5938 6.78767 18.0135 6.24828 17.3257 6.24828H15.6569V8.73152C15.6569 9.03904 15.409 9.28797 15.1028 9.28797C14.797 9.28797 14.5488 9.03904 14.5488 8.73152V6.24828H9.45147V8.73152C9.45147 9.03904 9.20324 9.28797 8.89741 9.28797C8.5912 9.28797 8.34334 9.03904 8.34334 8.73152V6.24828H6.67453C5.98677 6.24828 5.40647 6.78767 5.35404 7.47504L4.50892 18.1695C4.44355 19.026 4.73941 19.8785 5.32042 20.5084C5.90146 21.1383 6.72515 21.5 7.58025 21.5H16.42C17.2751 21.5 18.0988 21.1383 18.6799 20.5084C19.2609 19.8785 19.5567 19.026 19.491 18.168ZM11.2036 15.7332L11.2212 15.7488C11.2212 15.7413 11.2212 15.7488 11.2389 15.7645C11.2212 15.7488 11.2212 15.7488 11.2036 15.7332L11.2389 15.7645C11.2389 15.7645 11.2212 15.7488 11.2036 15.7332Z"
                                            fill="#212121" />
                                        <path
                                            d="M12.0025 2.5C9.98607 2.5 8.3457 4.14779 8.3457 6.17288V6.24817H9.45384V6.17288C9.45384 4.76136 10.597 3.61287 12.0025 3.61287C13.408 3.61287 14.5512 4.76136 14.5512 6.17288V6.24817H15.6593V6.17288C15.6592 4.14779 14.0189 2.5 12.0025 2.5Z"
                                            fill="#212121" />
                                    </svg>
                                </span>
                                Корзина
                            </button>
                        </li>
                        <li class="sidemenu__item">
                            <a href="/" class="nav-actions__link">Войти</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SideMenu',
    data() {
        return {
            navOpen: false
        }
    },
    computed: {
        ...mapGetters(['getShowBasket'])
    },
    methods: {
        ...mapActions(['showBasket']),
        toggleMenu() {
            this.navOpen = !this.navOpen;
            this.toggleBodyScroll(); // Вызываем метод для блокировки прокрутки
            // if(this.getShowBasket){
            //     this.handleToggleBasket()
            // }
        },
        closeMenu() {
            this.navOpen = false;
            this.toggleBodyScroll(); // Вызываем метод для разблокировки прокрутки
        },
        toggleBodyScroll() {
            const body = document.querySelector('body');
            body.classList.toggle('no-scroll');
        },
        handleToggleBasket() {
            if(this.navOpen){
                this.toggleMenu()
            }
            
            this.showBasket(!this.getShowBasket)
            
            if (this.getShowBasket) {
                const body = document.querySelector('body');
                body.classList.add('no-scroll');
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
#sidemenu {
    display: none;

    @media screen and (max-width: 980px) {
        display: block;
    }

    @media screen and (max-width: 767px) {
        z-index: 7;;
    }
    

    nav {
        width: 100%;
        // height: calc(100% - #{$headerHeight} - #{$footerHeight});
        background: #062D4E;
        position: fixed;
        top: 67px;
        left: 0;
        z-index: 4;
        height: calc(100% - 67px);
        // box-shadow: 2px 0 3px$grey-6;
        // overflow-y: scroll;
    }

    .sidemenu {
        &__btn {
            display: block;
            width: 50px;
            height: 50px;
            background: transparent;
            border: none;
            position: relative;
            z-index: 4;
            appearance: none;
            cursor: pointer;
            outline: none;

            span {
                display: block;
                width: 24px;
                height: 2px;
                margin: auto;
                background: white;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transition: all .4s ease;

                &.top {
                    transform: translateY(-8px);
                }

                &.bottom {
                    transform: translateY(8px);
                }
            }

            &.active {
                .top {
                    transform: rotate(-45deg);
                }

                .mid {
                    transform: translateX(-20px) rotate(360deg);
                    opacity: 0;
                }

                .bottom {
                    transform: rotate(45deg);
                }
            }

            @media screen and (max-width: 767px) {
                z-index: 20;
            }

        }

        &__wrapper {
            // padding-top: 50px;
        }

        &__list {
            // padding-top: 50px;
            list-style: none;
            padding: 0;
            margin: 0;
            background-color: #062D4E;
        }

        &__item {
            button {
                text-decoration: none;
                line-height: 1.6em;
                font-size: 1.6em;
                padding: .5em;
                display: block;
                color: white;
                transition: .4s ease;
                background: transparent;
                border: none;
                span.icon {
                    svg { path { fill: #fff }}
                }
            }
            a {
                text-decoration: none;
                line-height: 1.6em;
                font-size: 1.6em;
                padding: .5em;
                display: block;
                color: white;
                transition: .4s ease;

                &:hover {
                    background: lightgrey;
                    color: dimgrey;
                }
            }
        }
    }
}

.translateX-enter {
    transform: translateX(-200px);
    opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
    transform-origin: top left 0;
    transition: .2s ease;
}

.translateX-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>