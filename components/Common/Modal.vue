<template>
  <div v-if="isOpen" class="modal-wrapper">
    <div class="modal-overlay" @click="closeModal"></div> <!-- Новый элемент для заблюренного фона -->
    <div class="modal-content">
      <!-- Здесь может быть содержимое модального окна -->
      <slot></slot>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.removeBodyScroll();
      this.$emit('close');
     
    },
    removeBodyScroll() {
      const body = document.querySelector('body');
      body.classList.remove('no-scroll');
    }
  }
};
</script>

<style lang="scss" scoped>
/* Стили для модального окна */
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr minmax(613px, 1fr);
  z-index: 5;
  @media screen and (max-width: 767px) {
    top: 67px;
    grid-template-columns: auto;
    z-index: 5;
    overflow: auto;
    height: 100%;
    max-height: calc(100% - 67px);
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Черный цвет с прозрачностью 50% для заблюренного фона */
  backdrop-filter: blur(5px);
  /* Заблюривание фона */
  grid-column: 1/2;
  @media screen and (max-width: 767px) {
    display: none;     
  }
}

.modal-content {
  background-color: #EBE1D7;
  /* Темносиний цвет для содержимого модального окна */
  color: white;
  /* Белый цвет текста в модальном окне */
  padding: 20px;
  position: relative;
  z-index: 20;
  grid-column: 2/3;
  @media screen and (max-width: 767px) {
    grid-column: 1/2;  
    z-index: 3; 
  }
}

.no-scroll {
  overflow: hidden;
}
</style>