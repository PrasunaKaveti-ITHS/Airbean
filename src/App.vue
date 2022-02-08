<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>

      <router-link to="/NavDropDown">Nav</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #f3e4e1;
  color: #2f2926;
  width: 375px;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  display: flex;
  justify-content: center;
}
</style>
