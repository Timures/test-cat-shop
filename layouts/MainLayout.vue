<template>
    <div>
    <Header />
    <main class="main-content">
        <div class="container">
            <Nuxt />
        </div>
    </main>
    </div>
</template>

<script>
import Header from '../components/Common/Header.vue';
export default {
    name: 'MainLayout',
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>

main.main-content {
    background-image: url('/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
    padding-top: 100px;
    padding-bottom: 120px;

    @media screen and (max-width: 980px) {
        padding-top: 38px;
        padding-bottom: 87px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 22px;
        padding-bottom: 47px;
    }
    
}
</style>