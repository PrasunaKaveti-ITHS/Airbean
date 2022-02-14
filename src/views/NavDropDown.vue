<template>
  <nav>
    <a @click="$router.go(-1)" class="closebutton">
      <img src="../assets/close.svg" />
    </a>
    <ul>
      <li><router-link to="/KaffeMeny">Meny</router-link></li>
      <hr />
      <li><router-link to="/OurCoffee">Vårt Kaffe</router-link></li>
      <hr />
      <li><router-link to="/OrderHist">Order History</router-link></li>
      <hr />
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
  margin-right: 5rem;
}

a {
  color: white;
  text-decoration: none;
  line-height: 120%;
  margin-left: 4rem;
}

hr {
  width: 100px;
  border: 1px solid #595451;
}
.closebutton {
  position: absolute;
  top: 113px;
  left: 550px;
}
</style>
