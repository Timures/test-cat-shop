<template>
    <header class="header">
        <div class="container header-wrapper">
            <div class="nav-logo">
                <SideMenu />

            <Logo />
            </div>

            <nav class="nav-links">
                <ul>
                    <li><a href="/">Котики</a></li>
                    <li><a href="/">Доставка</a></li>
                    <li><a href="/">Акции</a></li>
                    <li><a href="/">Контакты</a></li>
                </ul>
            </nav>

            <nav class="nav-phone">
                <a href="/">
                    <span class="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.984 15.5283C17.8172 14.5982 16.6332 14.0349 15.4808 14.9635L14.7927 15.5248C14.2892 15.9322 13.3531 17.8358 9.73382 13.9555C6.11531 10.0801 8.26863 9.47668 8.77286 9.07277L9.46475 8.51081C10.6111 7.58006 10.1785 6.40838 9.3517 5.20228L8.85275 4.47173C8.02217 3.26844 7.11773 2.47818 5.96834 3.40752L5.3473 3.91328C4.8393 4.25819 3.41933 5.37929 3.07489 7.50912C2.66036 10.0646 3.96803 12.991 6.96398 16.2019C9.95617 19.4142 12.8858 21.0277 15.6609 20.9996C17.9672 20.9765 19.3601 19.823 19.7957 19.4037L20.419 18.8972C21.5654 17.9686 20.8531 17.0231 19.6857 16.0909L18.984 15.5283Z"
                                fill="white" />
                        </svg>
                    </span>
                    <span class="nav-phone__text">
                        +7 903 700 97 91
                    </span>
                </a>
            </nav>

            <nav class="nav-actions">
                <ul>
                    <li>
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
                        </button>
                    </li>
                    <li>
                        <a href="/" class="nav-actions__link">Войти</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SideMenu from './SideMenu.vue';
import Logo from './Logo.vue'
export default {
    name: 'Header',
    components: {
        SideMenu, Logo
    },
    computed:{
        ...mapGetters(['getShowBasket'])
    },
    methods: {
        ...mapActions(['showBasket']),
        handleToggleBasket(){           
            this.showBasket(!this.getShowBasket)
            if(this.getShowBasket){
                const body = document.querySelector('body');
            body.classList.add('no-scroll');
            }
        }
    }
}
</script>

<style lang="scss">
.header {

    background: #062D4E;

    &-wrapper {
        margin: 0 auto;
        padding: 12px 150px 12px 232px;
        height: 82px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        @media screen and (max-width: 980px) {
            height: 67px;
            padding: 12px 20px;
            display: grid;
            grid-template-columns: repeat(3, auto);
        }
    }
}
.nav-logo {
    @media screen and (max-width: 980px) {
        display: flex;
        grid-column: 1/2;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        grid-column: 1/3;
        justify-content: space-between;
    }
}

.nav-links {
    display: block;
    @media screen and (max-width: 980px) {
        display: none;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 35px;

        li {
            position: relative;

            &:not(:first-child) {
                &::before {
                    content: "";
                    position: absolute;
                    display: block;
                    width: 2px;
                    height: 2px;
                    border-radius: 2px;
                    top: 50%;
                    left: -16px;
                    background: #fff;
                }
            }

            a {
                font-family: Montserrat;
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0.05em;
                text-align: left;

                color: #fff;
                text-decoration: none;
            }
        }
    }
}

.nav-phone {
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;

        span.icon {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #fff;
        text-decoration: none;
    }

    
    @media screen and (max-width: 1170px) {
        a {
            span.nav-phone__text {
                display: none;
            }
        }
    }

    @media screen and (max-width: 980px) {
        grid-column: 2/3;
        a {
            span.nav-phone__text {
                display: inline-block;
            }
        }
    }

    @media screen and (max-width: 768px) {
        grid-column: 3/4;
        a {
            span.nav-phone__text {
                display: none;
            }
        }
    }

}

.nav-actions {
    display: block;
    @media screen and (max-width: 980px) {
        grid-column: 3/4;
        
    }
    @media screen and (max-width: 768px) {
        display: none;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    button.icon {
        cursor: pointer;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        box-shadow: none;
        border: none;
        border-radius: 42px;

        span.icon {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                width: 24px;
                height: 24px;
            }
        }
    }

    a.nav-actions__link {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #212121;
        text-decoration: none;
        padding: 12px 30px 10px;
        border-radius: 30px;
        background-color: #fff;
    }
}
</style>
