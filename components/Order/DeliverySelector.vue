<template>
  <div class="delivery-selector">
    <label class="radio-label" v-for="option in deliveryOptions" :key="option.id">
        <input type="radio" :value="option.value" v-model="selectedOption" class="radio-input"
          @change="handleOptionChange" :disabled="option.isDisabled" />
        <div class="radio-text">
          <div class="delivery-icon">
            <img :src="option.icon" :alt="option.label" />
          </div>
          <div class="delivery-text">
            {{ option.label }}
          </div>
          <div class="delivery-info" v-html="option.info"></div>
        </div>
      </label>
  </div>
</template>

<script>
export default {
  name: 'DeliverySelector',
  data() {
    return {
      deliveryOptions: [
        { id: 1, label: 'Доставка курьером', value: 'courier', icon: '/images/icons/delivery.svg', info: '<span class="danger">Временно недоступно</span>', isDisabled: true },
        { id: 2, label: 'Самовывоз', value: 'pickup', icon: '/images/icons/pickup.svg', info: '<div class="discount">Скидка - 10%</div><div class="discount-desc">на стоимость покупки</div>', isDisabled: false }
      ],
      selectedOption: 'pickup' // начальное значение выбранного метода
    };
  },
  methods: {
    handleOptionChange() {
      this.$emit('input', this.selectedOption);
    }
  }
};
</script>

<style lang="scss">
.delivery-selector {

  .radio-label {
    display: block;
    min-height: 32px;
    &:not(:last-child){
      margin-bottom: 14px;
    }
  }

  .radio-input {
    display: none;

    /* Скрываем настоящий input */
    &:checked+.radio-text:before {
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.8238 0.769252C11.5895 0.534924 11.2096 0.534924 10.9753 0.769252L3.78688 7.9577L1.02379 5.1946C0.789485 4.96027 0.40961 4.9603 0.175258 5.1946C-0.0590703 5.42891 -0.0590703 5.80878 0.175258 6.04311L3.36262 9.23042C3.59685 9.46473 3.97701 9.46456 4.21115 9.23042L11.8238 1.61778C12.0581 1.38348 12.0581 1.00358 11.8238 0.769252Z' fill='white' /%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center center;
      border-color: #0acf83;
      background-color: #0acf83;
      /* Меняем цвет фона круглой рамки при выборе */
    }

    &:disabled+.radio-text {
      .delivery-text {
        cursor: not-allowed;
        color: #a5a5a5;
      }
    }
  }

  .radio-text {
    position: relative;
    padding-left: 30px;
    /* Отступ слева для имитации кастомного радио-кнопки */
    cursor: pointer;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
      /* Выравниваем кастомный радио-кнопки по вертикали */
      width: 32px;
      height: 32px;
      border: 1px solid #a5a5a5;
      /* Цвет рамки */
      border-radius: 50%;
      /* Делаем круглую рамку */
      background-color: #fff;
      /* Фон круглой рамки */
    }
  }

  .delivery-icon {
    padding-left: 20px;
    width: 15%;
    img {
      width: 30px;
    }

    @media screen and (max-width: 767px) {
    display: none;
  }
  }

  .delivery-text {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: #222;
    text-align: left;
    width: 40%;
    @media screen and (max-width: 767px) {
      width: 50%;
    padding-left: 16px;
  }
  }

  .delivery-info {
    font-family: "Ubuntu", sans-serif;
  }

  .danger {
    font-weight: 300;
    font-size: 12px;
    color: #f00;
  }

  .discount {
    font-weight: 700;
    font-size: 14px;
    color: #3f4871;

    &-desc {
      margin-top: 2px;
      font-weight: 700;
      font-size: 8px;
      color: #3f4871;
    }
  }

}
</style>