<template>
  <section>
    <MainTitle :text="'Меню'" />
  </section>
</template>

<script>
import MainTitle from '@/components/Common/MainTitle.vue'
export default {
  name: 'IndexPage',
  layout: 'MainLayout',
  components: {
    MainTitle
  }
}
</script>
