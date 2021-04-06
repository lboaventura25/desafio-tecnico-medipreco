<template>
  <router-link :to="{ name: 'drink', params: { id: drink.idDrink } }" class="drink" v-bind:class="{'inline': !grid}">
    <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
    <figcaption>
      <p>{{ drink.strDrink }}</p>
      <span>#{{ drink.idDrink }}</span>
    </figcaption>
  </router-link>
</template>

<script>

export default {
  name: 'DrinkCard',
  props: {
    drink: {
      strDrink: String,
      strDrinkThumb: String,
      idDrink: String
    },
    grid: Boolean
  }
}
</script>

<style scoped>

.drink {
  min-width: 310px;
  border: 1px solid #E5E9EB;
  transition: 0.2s all; 
}

.drink:hover {
  opacity: 0.7;
  border: 2px solid #000000;
  transform: translateY(-10px);
}

.inline {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  border: 1px solid #E5E9EB;
}

.drink img {
  width: 100%;
}

.inline img {
  max-width: 70%;
}

figcaption {
  margin: 20px 0 44px 24px;
}

figcaption p {
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 24px;
  color: #252C32;
}

figcaption span {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 24px;
  color: #252C32;
}

@media(max-width: 800px) {
  .inline {
    min-width: 300px;
  }

  .inline img {
    max-height: 200px;
    width: 55%;
  }

  figcaption p {
    max-width: 90%;
  }
}

</style>
