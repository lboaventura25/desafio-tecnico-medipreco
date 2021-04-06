<template>
  <div>
    <header>
      <a class="lines">
        <img src="../../assets/3lines.png" alt="Lines" />
      </a>
      <section id="logo">
        <router-link to="/">
          <img src="../../assets/MediDrinks128px.png" alt="MediDrinks" />
        </router-link>
      </section>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/" class="nav-element">
            <span>Home</span>
            <img src="../../assets/ArrowRight.png" alt="Arrow Right" />
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-element">
            <span>Catálogo</span>
            <img src="../../assets/ArrowRight.png" alt="Arrow Right" />
          </router-link>
        </li>
        <li>
          <span>Afterglow</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'DrinkHeader'
}

</script>

<style scoped>

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}

.lines:hover {
  opacity: 0.6;
}

.lines {
  position: absolute;
  left: 0;
}

#logo a:hover {
  opacity: 0.6
}

nav {
  width: 70%;
  display: flex;
  flex-direction: row;
  margin-top: 66px;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.nav-element {
  display: flex;
  align-items: center;
  flex-direction: row;
}

ul li {
  cursor: pointer;
  margin-right: 7.5px;
}

span {
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 16px;
  margin-right: 8px;
  color: #6E7C87;
  transition: 0.2s all;
}

span:hover {
  border-bottom: 1px solid #6E7C87;
}

/* @media(max-width: 800px) {
  nav {
    width: 70%;
  }
} */

</style>
