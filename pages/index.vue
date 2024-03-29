<template>
  <section>
    <MainTitle :text="'Меню'" />
    <MainMenu />
  </section>
</template>

<script>
import MainTitle from '@/components/Common/MainTitle.vue'
import MainMenu from '@/components/Menu/MainMenu.vue'
export default {
  name: 'IndexPage',
  layout: 'MainLayout',
  components: {
    MainTitle,
    MainMenu
  }
}
</script>
