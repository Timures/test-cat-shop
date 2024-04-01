<template>
    <section class="order">
        <MainTitle class="small" :text="'Оформление заказа'" />

        <div class="order-delivery">
            <h3 class="order-delivery__title">
              <span class="step">1</span>Способ доставки</h3>
            <div class="order-delivery__content">
              <DeliveryMethodSelector v-model="selectedDeliveryMethod" />
            </div>
        </div>

        <div class="order-delivery">
            <h3 class="order-delivery__title">
              <span class="step">1</span>Способ доставки</h3>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DeliveryMethodSelector from '@/components/Order/DeliverySelector.vue';
import MainTitle from '@/components/Common/MainTitle.vue'

export default {
    name: 'CartOrder',
    components: { MainTitle, DeliveryMethodSelector },
  data() {
    return {
      selectedDeliveryMethod: 'courier' // начальное значение
    };
  }
}
</script>

<style lang="scss" scoped>
.order-delivery {
    border-radius: 8px;
    background-color: #fff;
    padding: 16px;
    &__title {
      span.step {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #d34a44;
        border-radius: 100%;
        width: 33px;
        height: 33px;
        font-weight: 400;
font-size: 20px;
color: #fff;
margin-right: 14px;
      }
      font-family: "Ubuntu", sans-serif;
      font-weight: 300;
font-size: 22px;
color: #191919;
    }

    &__content {
      margin-top: 12px;
      padding-left: 46px;
    }
}
</style>