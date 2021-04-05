<template>
  <div>
    <HomeHeader />
    <main>
      <article>
        <head>
          <h1>Os melhores drinks não-alcoólicos do 
            <span class="blue-text">Brasil</span>
          </h1>
          <section class="buttons">
            <a class="button" v-bind:class="{'active-left': grid}" v-on:click="switchGrid">
              <img src="../../assets/Grid.png" alt="Grid" />
            </a>
            <a class="button" v-bind:class="{'active-right': !grid}" v-on:click="switchGrid" >
              <img src="../../assets/Column.png" alt="Colunas" />
            </a>
          </section>
        </head>
        <small>{{ drinksLenght }} resultados encontrados</small>
      </article>
      <section class="drinks" v-bind:class="{'no-grid': !grid}">
        <DrinkCard 
          v-for="(drink, index) in drinks" 
          :key="index"
          :drink="drink"
          :grid="grid"
        />
      </section>
    </main>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/index';
import DrinkCard from '@/components/DrinkCard/index';

import api from '@/services/api';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    DrinkCard
  },
  data() {
    return {
      drinksLenght: 0,
      drinks: [],
      grid: true
    };
  },
  mounted() {
    api.get('/filter.php?a=Non_Alcoholic').then(response => {
      this.drinks = response.data.drinks;
      this.drinksLenght = this.drinks.length;
    })
  },
  methods: {
    switchGrid: function() {
      this.grid = !this.grid;
    },
  }
}

</script>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

article {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 17px;
}

head {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 32px;
  color: #252C32;
}

h1 .blue-text {
  color: #4094F7;
}

.buttons {
  height: 32px;
  background-color: #F6F8F9;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
}

.button {
  padding: 9px;
}

.active-left {
  background-color: #E5E9EB;
  border-radius: 6px 0 0 6px;
}

.active-right {
  background-color: #E5E9EB;
  border-radius: 0 6px 6px 0;
}

small {
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 32px;
  color: #9AA6AC;
}

.drinks {
  width: 60%;
  margin-top: 29px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
}

.no-grid {
  display: flex;
  flex-direction: column;
}

@media(max-width: 800px) {
  h1 {
    max-width: 70%;
  }
}

@media (max-width: 1000px) {
  .drinks {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

@media (max-width: 670px) {
  .drinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

</style>
