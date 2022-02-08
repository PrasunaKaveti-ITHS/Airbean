<template>
  <nav>
    <ul>
      <li><router-link to="/KaffeMeny">Meny</router-link></li>
      <li><hr /></li>
      <li><router-link to="/OurCoffee">Vårt Kaffe</router-link></li>
      <li><hr /></li>
      <li><router-link to="/OrderHist">Order History</router-link></li>
      <li><hr /></li>
      <li><router-link to="/OrderDelivery">Orderstatus</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  min-height: 700px;
  background-color: #2f2926;
  max-width: 375px;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1.8rem;
  font-family: serif;
  padding: 3px;
}

a {
  color: white;
  text-decoration: none;
  line-height: 120%;
}

hr {
  width: 50px;
  border: 1px solid #595451;
}
</style>