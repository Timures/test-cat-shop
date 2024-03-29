<template>
    <div class="title-wrapper">
        <h1 class="title">{{ text }}</h1>
    </div>
</template>

<script>
export default {
    name: 'MainTitle',
    props: {
        text: ''
    },
}
</script>

<style lang="scss">
.title-wrapper {
    width: 100%;
    justify-content: center;
    display: flex;
}
h1.title {
    font-family: "Neucha", cursive;
    font-size: 60px;
    font-weight: 400;
    line-height: 66.09px;
    text-align: left;
    color: #312525;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;

    &::before, &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: #312525;
        top: calc(50% - 5px);
        border-radius: 50%;
    }

    &::before {
        left: -40px;
    }

    &::after {
        right: -40px;
    }


    @media screen and (max-width: 980px) {
        font-size: 48px;
        font-weight: 400;
        line-height: 52.88px;
    }

    @media screen and (max-width: 767px) {
        font-size: 22px;
        font-weight: 400;
        line-height: 24.23px;
    }
}
</style>