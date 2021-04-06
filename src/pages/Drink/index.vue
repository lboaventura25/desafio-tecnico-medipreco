<template>
  <div>
    <DrinkHeader />
    <main>
      <article>
        <img class="drink-thumb" :src="drink.strDrinkThumb" alt="" />
        <section id="details">
          <h1>{{ drink.strDrink }}</h1>
          <span class="id-drink">#{{ drink.idDrink }}</span>
          <section class="details-drink">
            <p>Categoria: {{ drink.strCategory }}</p>
            <p>Alcóolico: Não-alcoolico</p>
            <p>Copo de servir: {{ drink.strGlass }}</p>
          </section>
          <section class="measures">
            <p 
              v-for="(measure, index) in strMeasures" 
              :key="index"
            >
              {{ measure }}
            </p>
          </section>
          <router-link to="/">
            <button class="back-button" type="button">
              <span>Voltar para a tela inicial</span>
            </button>
          </router-link>
          <section class="ingredients">
            <p>Ingredientes</p>
            <div 
              class="ingredient" 
              v-for="ingredient in ingredients" 
              :key="ingredient.index"
            >
              <img src="../../assets/ArrowRightDrink.png" alt="Arrow Right">
              <p>{{ ingredient.name }}</p>
            </div>
          </section>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import DrinkHeader from '@/components/DrinkHeader/index';

import api from '@/services/api';

export default {
  name: 'Drink',
  components: {
    DrinkHeader
  },
  data() {
    return {
      drink: {},
      ingredients: [],
      strMeasures: ['XS', 'S', 'M', 'L'],
    }
  },
  mounted() {
    api.get(`/lookup.php?i=${this.$route.params.id}`).then(response => {
      this.ingredients = 
        this.mapAndFilterNullElements(response, 'strIngredient');
    });
  },
  methods: {
    mapAndFilterNullElements(response, str) {
      this.drink = response.data.drinks[0];

      let arrayWithoutNullItems = 
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(number => {
          if(this.drink[str + number] == null) return;

          return { index: number, name: this.drink[str + number] };
        }).filter(item => item !== undefined);

      return arrayWithoutNullItems;
    }
  }
}

</script>

<style scoped>

main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

article {
  width: 60%;
  display: flex;
  flex-direction: row;
}

.drink-thumb {
  width: 550px;
  height: 656px;
  margin-right: 46px;
}

#details {
  width: 100%;
  height: 656px;
}

h1 {
  margin-top: 32px;
  font-weight: 700;
  font-size: 3.6rem;
  color: #252C32;
  line-height: 48px;
}

.id-drink {
  margin-top: 2px;
  font-weight: 400;
  font-size: 3.6rem;
  color: #9AA6AC;
  line-height: 48px;
}

.details-drink {
  margin-top: 140px;
}

.measures {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
}

.measures p:first-child {
  border-radius: 6px 0 0 6px;
  font-weight: 600;
  background-color: #E5E9EB;
}

.measures p:last-child {
  border-radius: 0 6px 6px 0;
}

.measures p {
  background-color: #F6F8F9;
  padding: 8px 16px;
}

.back-button {
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  background-color: #4094F7;
  color: #F6F8F9;
  outline: 0;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s all;
}

.back-button:hover {
  background-color: #F6F8F9;
  color: #4094F7;
  border: 1px solid #4094F7;
}

.back-button span {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 24px;
}

.ingredients {
  margin-top: 48px;
}

.ingredient {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 8px 0;
  border-bottom: 1px solid #E5E9EB;
}

.ingredient img {
  height: 7px;
  margin-right: 14px;
}

.ingredient:last-child {
  border-bottom: 0;
}

@media(max-width: 1200px) {
  article {
    display: flex;
    flex-direction: column;
  }

  .drink-thumb {
    width: 100%;
    height: 50vh;
  }

  #details {
    width: 100%;
    height: 0;
  }

  h1 {
    margin-top: 10px;
  }

  .details-drink {
    margin-top: 20px;
  }

  .back-button {
    width: 100%;
  }

  .ingredients {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .ingredient {
    width: 100%;
  }
}

@media(max-width: 800px) {
  article {
    display: flex;
    flex-direction: column;
  }

  .drink-thumb {
    width: 100%;
    height: 30vh;
  }

  #details {
    width: 100%;
    height: 0;
  }

  h1 {
    margin-top: 10px;
  }

  .details-drink {
    margin-top: 20px;
  }

  .back-button {
    width: 100%;
  }

  .ingredients {
    margin-top: 20px;
  }

  .ingredient {
    width: 100%;
  }
}

@media(max-height: 700px) {
  .drink-thumb {
    height: 400px;
  }
}

</style>
