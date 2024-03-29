<template>
    <button :categoryId="categoryId" @click="handleClick">
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
    padding: 16px 32px;
    border-radius: 100px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #312525;
        color: #fff;
    }
}
</style>