import dishesData from "@/data/dishes.json";

export const state = () => ({
  dishes: dishesData, // Данные о блюдах из JSON
  cart: [], // Изначально корзина пустая
});

export const mutations = {
  addToCart(state, dishId) {
    const dish = state.dishes.find((item) => item.id === dishId);
    if (dish) {
      dish.value++;
      dish.IsInBasket = true; // Устанавливаем IsInBasket в true для добавленного блюда
      state.cart.push(dish); // Добавляем блюдо в корзину
    }
  },

  incrementQuantity(state, dishId) {
    const dish = state.cart.find((item) => item.id === dishId);
    if (dish) {
      dish.value++; // Увеличиваем количество выбранного блюда в корзине
    }
  },

  decrementQuantity(state, dishId) {
    const dish = state.cart.find((item) => item.id === dishId);
    if (dish && dish.value > 0) {
      dish.value--; // Увеличиваем количество выбранного блюда в корзине
      if (dish.value === 0) {
        dish.IsInBasket = false
        // Если количество стало равным нулю, вызываем мутацию для удаления из корзины
        state.cart = state.cart.filter(item => item.id !== dishId);
      }
    }
  },

  removeFromCart(state, dishId) {
    const index = state.cart.findIndex(item => item.id === dishId);
    if (index !== -1) {
      state.cart.splice(index, 1); // Удаляем блюдо из корзины по индексу
    }
  }
};
