<template>
  <div>
    <!-- Кнопки категорий блюд -->
    <div class="categories">
      <TabsButton v-for="category in categories" :key="category.id" :label="category.title"
        :selectedCategoryId="selectedCategory" :categoryId="category.id" @filter="filterDishes" />
    </div>

    <!-- Вывод блюд по выбранной категории -->
    <div class="dishes">
      <FoodCard v-for="dish in getFilteredDishes" :key="dish.id" :food="dish" @addToCart="addToCart" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TabsButton from '@/components/Menu/TabsButton'
import FoodCard from '@/components/Menu/FoodCard.vue'
export default {
  name: 'MainMenu',
  components: { TabsButton, FoodCard },
  data() {
    return {
      categories: [
        { id: 1, title: 'Роллы' },
        { id: 2, title: 'суши и гунканы' },
        { id: 3, title: 'сеты' },
        { id: 4, title: 'лапша и рис' },
        { id: 5, title: 'салаты' },
        { id: 6, title: 'ГОрячие блюда' }
      ],
      selectedCategory: 3 // Выбранная категория по умолчанию
    };
  },
  computed: {
    ...mapGetters(['getDishesByCategory']),
    getFilteredDishes() {
      return this.getDishesByCategory(this.selectedCategory);
    }
  },
  methods: {
    ...mapActions(['addToCart']), // Используем mapMutations для добавления блюда в корзину

    addToCart(dish) {
      this.addToCart(dish); // Вызываем мутацию для добавления блюда в корзину
    },
    filterDishes(categoryID) {
      this.selectedCategory = categoryID;
    },
  }
};
</script>

<style lang="scss">
.categories {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 50px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
}

.dishes {
  margin-top: 60px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }

}
</style>