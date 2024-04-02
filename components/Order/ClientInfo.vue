<template>
  <form @submit.prevent="submitForm">
    <div class="custom-input">
      <label for="name" class="custom-input__name">
        <input type="text"  id="name" v-model.trim="formData.name" placeholder="Имя">
        
      </label>
      <div class="errors">
          <span v-if="!$v.formData.name.required && $v.formData.name.$dirty">Имя обязательно</span>
          <span v-if="!$v.formData.name.minLength && $v.formData.name.$dirty">Минимум 3 символа</span>
        </div>

    </div>
    <div class="custom-input">
      <label for="phone" class="custom-input__phone">
        <input type="text" id="phone" v-model.trim="formData.phone" placeholder="Телефон" :class="{error: !$v.formData.phone.required && $v.formData.phone.$dirty || !$v.formData.phone.validPhone && $v.formData.phone.$dirty }">
        <div class="errors">
          <span v-if="!$v.formData.phone.required && $v.formData.phone.$dirty">Телефон обязателен</span>
          <span v-if="!$v.formData.phone.validPhone && $v.formData.phone.$dirty">Неправильный формат телефона</span>
        </div>
      </label>

    </div>

    <div class="custom-input">
      <label for="additional" class="custom-input__additional">
        <input type="text" id="additional" v-model.trim="formData.additional" placeholder="Дополнительная информация">
      </label>
    </div>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'ClientInfo',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        additional: ''
      },
    };
  },
  validations: {
    formData: {
      name: {
        required,
        minLength: minLength(3),
      },
      phone: {
        required,
        validPhone: value => /^((\+7|7|8)+([0-9]){10})$/.test(value),
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.formData.$touch();
      if (!this.$v.formData.$invalid) {
        // Действия при успешной валидации
        console.log('Форма валидна, отправка данных:', this.formData);
      } else {
        // Обработка ошибок валидации
        console.log('Форма содержит ошибки валидации');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.client-info {
  padding-right: 32px;
}
.custom-input {
  display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 22px;
    }

    &:last-child {
      margin-bottom: 12px;
    }

  label {
    position: relative;
    &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 3px;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

  }
  }
  .errors {
      margin-top: 4px;
      font-family: "Ubuntu", sans-serif;
      font-weight: 300;
      font-size: 12px;
      color: #f00;
      min-height: 12px;
      display: flex;
    flex-direction: column;
    gap: 4px;
    }

    &__name {
    &::before {
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_103_801)'%3E%3Cpath d='M12.4182 10.481H5.58181C2.504 10.481 0 11.5243 0 12.8067V17.5158C0 17.7727 0.499803 17.981 1.11636 17.981H16.8836C17.5002 17.981 18 17.7727 18 17.5158V12.8067C18 11.5243 15.496 10.481 12.4182 10.481Z' fill='%23474747'/%3E%3Cpath d='M9.0042 0C6.75104 0 4.91797 1.83307 4.91797 4.08628C4.91797 5.61461 5.7615 6.9494 7.00724 7.65019C7.59811 7.98257 8.27932 8.17252 9.0042 8.17252C9.72908 8.17252 10.4103 7.98257 11.0012 7.65019C12.2469 6.9494 13.0904 5.61457 13.0904 4.08628C13.0904 1.83312 11.2574 0 9.0042 0Z' fill='%23474747'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_103_801'%3E%3Crect width='18' height='18' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }
  }

  &__phone {
    &::before {
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_103_793)'%3E%3Cpath d='M16.5557 11.8149C15.4537 11.8149 14.3716 11.6426 13.3462 11.3037C12.8438 11.1323 12.2261 11.2896 11.9194 11.6045L9.8955 13.1324C7.54833 11.8794 6.10252 10.4341 4.8667 8.10455L6.34959 6.13336C6.73486 5.74861 6.87305 5.18658 6.70748 4.65923C6.36717 3.62845 6.1943 2.54691 6.1943 1.44441C6.19434 0.647953 5.54639 0 4.74998 0H1.44436C0.647953 0 0 0.647953 0 1.44436C0 10.5733 7.42678 18 16.5557 18C17.3521 18 18 17.352 18 16.5556V13.2593C18 12.4629 17.352 11.8149 16.5557 11.8149Z' fill='%23474747'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_103_793'%3E%3Crect width='18' height='18' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }

  }

  &__additional {
    &::before {
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_103_783)'%3E%3Cpath d='M18 9C18 13.9706 13.9706 18 9 18C4.02937 18 0 13.9706 0 9C0 4.02937 4.02937 0 9 0C13.9706 0 18 4.02937 18 9Z' fill='%23474747'/%3E%3Cpath d='M9 16.0312C5.12292 16.0312 1.96875 12.8771 1.96875 9C1.96875 5.12292 5.12292 1.96875 9 1.96875C12.8771 1.96875 16.0312 5.12292 16.0312 9C16.0312 12.8771 12.8771 16.0312 9 16.0312ZM9 3.02344C5.70451 3.02344 3.02344 5.70451 3.02344 9C3.02344 12.2955 5.70451 14.9766 9 14.9766C12.2955 14.9766 14.9766 12.2955 14.9766 9C14.9766 5.70451 12.2955 3.02344 9 3.02344Z' fill='white'/%3E%3Cellipse cx='8.99993' cy='9.00017' rx='7.71429' ry='7.71429' fill='%23474747'/%3E%3Cpath d='M9 12.4799C8.70872 12.4799 8.47266 12.2439 8.47266 11.9526V8.4032C8.47266 8.11206 8.70872 7.87585 9 7.87585C9.29128 7.87585 9.52734 8.11206 9.52734 8.4032V11.9526C9.52734 12.2439 9.29128 12.4799 9 12.4799Z' fill='white'/%3E%3Cpath d='M9.74396 6.43301C9.74396 6.8439 9.4108 7.17706 8.99991 7.17706C8.58902 7.17706 8.25586 6.8439 8.25586 6.43301C8.25586 6.02199 8.58902 5.68896 8.99991 5.68896C9.4108 5.68896 9.74396 6.02199 9.74396 6.43301Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_103_783'%3E%3Crect width='18' height='18' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E ");
    }
  }
}

input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Ubuntu", sans-serif;
  padding: 1px 16px 5px 40px;
  width: 100%;

  &.error {
    border-color: #f00;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    color: #4c4c4c;
  }

 

  
}
</style>