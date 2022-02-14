<template>
  <nav>
    <a @click="$router.go(-1)" class="closebutton">
      <img src="../assets/close.svg" />
    </a>
    <ul>
      <li><router-link to="/KaffeMeny" exact>Menu</router-link></li>
      <li><router-link to="/OurCoffee" exact>OurCoffee</router-link></li>      
      <li><router-link to="/OrderHist" exact>OrderHistory</router-link></li>
      <li><router-link to="/OrderDelivery" exact>OrderStatus</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1.3rem;
  font-family: serif;
  padding: 3px;
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
  line-height: 120%;
  margin-left: 4rem;
}

ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #0d4dd6;
}

ul li a:hover {
  color: #eeff00;
  box-shadow: 0 0 5px #11cedb;
  text-shadow: 0 0 5px #0ab9ee;
}

</style>
