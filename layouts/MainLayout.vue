<template>
    <div>
    <Header />
    <main>
        <slot />
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

<style lang="scss">
@import '@/assets/scss/base.scss';
</style>