<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Post' }">Post</router-link> |
      <router-link to="/about">About</router-link>
      <!-- Для красоты ссылка  -->
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background: #84fab0;
  background-image: linear-gradient(100deg, #84fab0 0%, #8fd3f4 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
