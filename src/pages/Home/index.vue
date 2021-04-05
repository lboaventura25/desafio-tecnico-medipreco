<template>
  <div>
    <HomeHeader />
    <main>
      <article>
        <head>
          <h1>Os melhores drinks não-alcoólicos do <span class="blue-text">Brasil</span></h1>
        </head>
      </article>
    </main>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/index';

export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}

</script>

<style scoped>

main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

article {
  width: 80%;
  min-height: calc(100vh - 78px);
  display: flex;
  padding-top: 17px;
}

head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  font-weight: 600;
  font-size: 2.4rem;
  color: #252C32;
}

h1 .blue-text {
  color: #4094F7;
}

</style>
