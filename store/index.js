import dishesData from "@/data/dishes.json";

export const state = () => ({
  dishes: dishesData, // Данные о блюдах из JSON
  cart: [], // Изначально корзина пустая
  isBasketShow: false
});

export const mutations = {
  setShowBasket(state, payload){
    state.isBasketShow = payload
  },
  // cart
  setAddToCart(state, dishId) {
    const dish = state.dishes.find((item) => item.id === dishId);
    if (dish) {
      dish.value++;
      dish.IsInBasket = true; // Устанавливаем IsInBasket в true для добавленного блюда
      state.cart.push(dish); // Добавляем блюдо в корзину
    }
  },

  setAddToFavorites(state, payload) {
    const dish = state.dishes.find((item) => item.id === payload);
    if (dish) {
      dish.IsFavorite = !dish.IsFavorite; // меняем значение 
    }
  },

  setIncrementQuantity(state, dishId) {
    const dish = state.cart.find((item) => item.id === dishId);
    if (dish) {
      dish.value++; // Увеличиваем количество выбранного блюда в корзине
    }
  },

  setDecrementQuantity(state, dishId) {
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

  setRemoveFromCart(state, dishId) {
    const index = state.cart.findIndex(item => item.id === dishId);
    const dish = state.cart.find((item) => item.id === dishId);
    if (index !== -1) {
      dish.IsInBasket = false;
      dish.value = 0;
      state.cart.splice(index, 1); // Удаляем блюдо из корзины по индексу
    }
  }
};

export const actions = {
  showBasket({ commit }, status){
    commit('setShowBasket', status)
  },
  addToCart({ commit }, dishId) {
    commit('setAddToCart', dishId);
  },
  toggleFavorite({commit}, dishId) {
    commit('setAddToFavorites', dishId)
  },
  incrementQuantity({ commit }, dishId) {
    commit('setIncrementQuantity', dishId);
  },
  decrementQuantity({ commit }, dishId) {
    commit('setDecrementQuantity', dishId);
  },
  removeFromCart({ commit }, dishId) {
    commit('setRemoveFromCart', dishId);
  }
};

export const getters = {
  getShowBasket: (state) => {
    return state.isBasketShow
  },
  getDishes: (state) => {
    return state.dishes
  },
  getDishById: (state) => (dishId) => {
    return state.dishes.find((item) => item.id === dishId);
  },
  getDishesByCategory: (state) => (selectedCategory) => {
    // Фильтрация блюд по выбранной категории
    return state.dishes.filter(dish => dish.categoryId === selectedCategory)
  },
  getBasketItems: (state) => {
    return state.cart;
  },
  getCartTotalPrice: (state) => {
    return state.cart.reduce((total, dish) => total + (dish.price * dish.value), 0);
  }
};
