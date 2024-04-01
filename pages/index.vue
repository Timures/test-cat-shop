<template>
  <section>
    <MainTitle :text="'Меню'" />
    <MainMenu />
    <Modal :isOpen="getShowBasket" @close="handleToggleBasket">
      <MainCart />
    </Modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainTitle from '@/components/Common/MainTitle.vue'
import MainMenu from '@/components/Menu/MainMenu.vue'
import Modal from '@/components/Common/Modal'
import MainCart from '@/components/Cart/MainCart.vue'
export default {
  name: 'IndexPage',
  layout: 'MainLayout',
  components: {
    MainTitle,
    MainMenu,
    Modal,
    MainCart
  },
  computed: {
    ...mapGetters(['getShowBasket'])
  },
  methods: {
    ...mapActions(['showBasket']),
    handleToggleBasket() {
      this.showBasket(!this.getShowBasket)
    }
  }
}
</script>
