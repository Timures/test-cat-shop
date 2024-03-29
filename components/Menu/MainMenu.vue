<template>
    <div>
      <!-- Кнопки категорий блюд -->
      <div class="categories">
        <TabsButton v-for="category in categories" :key="category.id" :label="category.title" :categoryId="category.id" @filter="filterDishes" />
      </div>
  
      <!-- Вывод блюд по выбранной категории -->
      <div class="dishes">
        <div v-for="dish in filteredDishes" :key="dish.id">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
          <p>Цена: {{ dish.price }}</p>
          <p>Вес: {{ dish.weight }}</p>
          <!-- Другие свойства блюда, если необходимо -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TabsButton from '@/components/Menu/TabsButton'
  import dishesData from '@/data/dishes.json'; // Путь к вашему JSON файлу с данными о блюдах
  
  export default {
    name: 'MainMenu',
    components: { TabsButton },
    data() {
      return {
        categories: [
            {id: 1, title: 'Роллы'},
            {id: 2, title: 'суши и гунканы'},
            {id: 3, title: 'сеты'},
            {id: 4, title: 'лапша и рис'},
            {id: 5, title: 'салаты'},
            {id: 6, title: 'ГОрячие блюда'}
        ],
        dishes: dishesData, // Данные о блюдах из JSON
        selectedCategory: 3 // Выбранная категория по умолчанию
      };
    },
    computed: {
      filteredDishes() {
        // Фильтрация блюд по выбранной категории
        return this.dishes.filter(dish => dish.categoryId === this.selectedCategory);
      }
    },
    methods: {
      filterDishes(categoryID) {
        console.log('filter ', categoryID);
        // Установка выбранной категории
        this.selectedCategory = categoryID;
      }
    }
  };
  </script>
  
  <style>
  .categories {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .dishes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>
  