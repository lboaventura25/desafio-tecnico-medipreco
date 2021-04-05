<template>
  <header>
    <nav>
      <section id="logo">
        <router-link to="/">
          <img src="../../assets/MediDrinks.png" alt="MediDrinks" />
        </router-link>
        <div class="under-logo">
          <img src="../../assets/Pin.png" alt="Pin" />
          <p>Brasília, DF</p>
        </div>
      </section>
      <a href="https://github.com/lboaventura25" target="_blank">
        <button class="github-button" type="button">
          <img src="../../assets/Github.png" alt="Github" />
          <p>@lboaventura25</p>
        </button>
      </a>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'HomeHeader',
}

</script>

<style scoped>

header {
  height: 78px;
  border-bottom: 1px solid #E5E9EB;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo a:hover {
  opacity: 0.6
}

.under-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
}

.under-logo p {
  margin-left: 13px;
  color: #252C32;
}

.github-button {
  width: 168px;
  height: 41px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  outline: none;
  background-color: #FFFFFF;
  border: 1px solid #DDE2E4;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s all;
  color: #252C32;
}

.github-button:hover {
  opacity: 0.8;
  box-shadow: 0 0 5px #252C32;
}

.github-button img {
  margin-right: 10px;
}

</style>
