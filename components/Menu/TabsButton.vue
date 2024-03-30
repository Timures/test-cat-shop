<template>
    <button class="tab-btn" :class="{'active': categoryId == selectedCategoryId}" :categoryId="categoryId" @click="handleClick">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'TabsButton',
    props: {
        label: {
            type: String,
            default: 'Label'
        },
        categoryId: {
            type: Number,
            default: null
        },
        selectedCategoryId: {
            type: Number,
            default: null
        }
    },
    methods: {
    handleClick() {
      this.$emit('filter', this.categoryId);
    //   console.log('click ', this.id); // Эмитировать событие при клике на кнопку
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-btn {
    font-family: 'Neucha', cursive;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    text-transform: uppercase;
    color: #B3A296;
    background-color: #fff;
    padding: 16px 32px;
    box-shadow: none;
    border: none;
    border-radius: 100px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &.active,
    &:hover {
        background: #312525;
        color: #fff;
    }

    @media screen and (max-width: 1170px) {
        font-size: 21px;
    }
    
    @media screen and (max-width: 979px) {
        font-size: 16px;
        line-height: 125%;
        padding: 12px 18px;
    }
    
}
</style>