<template>
  <section class="order">
    <MainTitle class="small" :text="'Оформление заказа'" />

    <div class="order-content">
      <div class="order-delivery">
        <h3 class="order-delivery__title">
          <span class="step">1</span>Способ доставки
        </h3>
        <div class="order-delivery__content">
          <DeliveryMethodSelector v-model="selectedDeliveryMethod" />
        </div>
      </div>

      <div class="order-delivery">
        <h3 class="order-delivery__title">
          <span class="step">2</span>Способ доставки
        </h3>
        <div class="order-delivery__content">
          <ClientInfo ref="clientFormRef" />
        </div>
      </div>

      <div class="order-delivery">
        <div class="order-delivery__content">
          <OrderInfo />
          <div class="order-action">
            <button @click="sendOrder">Купить и оплатить</button>
            <p>
              Создавая заказ, вы соглашаетесь с <a href="/" target="_blank" nofollow>политикой обработки персональных
                данных</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryMethodSelector from '@/components/Order/DeliverySelector.vue';
import MainTitle from '@/components/Common/MainTitle.vue'
import ClientInfo from '@/components/Order/ClientInfo.vue'
import OrderInfo from '@/components/Order/OrderInfo.vue'
export default {
  name: 'CartOrder',
  components: { MainTitle, DeliveryMethodSelector, ClientInfo, OrderInfo },
  data() {
    return {
      selectedDeliveryMethod: 'courier' // начальное значение
    };
  },
  methods: {
    sendOrder() {
      this.$refs.clientFormRef.submitForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.order-content {
  margin-top: 27px;
}

.order-action {
  button {
    cursor: pointer;
    box-shadow: none;
    width: 100%;
    padding: 14px;
    border: 1px solid #0c334a;
    border-radius: 4px;
    background: #0c334a;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #fff;
    font-family: 'Neucha', cursive;
    transition: 0.3s ease-in all;

    &:hover {
      background-color: darken(#0c334a, 5);
    }
  }

  p {
    margin-top: 20px;
    font-family: "Ubuntu", sans-serif;
    ;
    font-weight: 300;
    font-size: 12px;
    line-height: 133%;
    color: #212121;

    a {
      color: #185598;
    }
  }
}

.order-delivery {
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

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

    font-family: "Ubuntu",
    sans-serif;
    font-weight: 300;
    font-size: 22px;
    color: #191919;
  }

  &__content {
    margin-top: 12px;
    padding-left: 46px;
    @media screen and (max-width: 767px) {
    padding-left: 0;
  }
  }
}
</style>