<template>
  <div>
    <router-link to="/Order"></router-link>
    <img src="../assets/ourcoffeetop.svg" />
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="navIcon" />
    </router-link>
    <button class="clickme" @click="toOrder">
      <img src="../assets/bag.svg" />
    </button>
    <h1>Meny</h1>

    <div v-for="k in abc" :key="k.id" class="menystyle">
      <div>
        <button @click="AddItems(k)">+</button>
      </div>
      <div class="Kaffename">
        <h2>
          {{ k.name }}
        </h2>
        <p>{{ k.desc }}</p>
      </div>
      <div class="kaffeprice">
        <h3>{{ k.price }}kr</h3>
      </div>
    </div>
    <img src="../assets/ourcoffeebottom.svg" />
  </div>
</template>

<script>
export default {
  computed: {
    abc() {
      return this.$store.getters.kaffe;
    },
  },
  methods: {
    AddItems(k) {
      this.$store.commit("Add_Order", k);
    },
    toOrder() {
      this.$router.push("Order");
    },
  },
};
</script>

<style scoped>
.menystyle {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
}
button {
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: 18px;
  background: black;
  margin-right: 10px;
}
h1 {
  font-family: serif;
  font-size: 42px;
  margin-top: 50px;
}
.navIcon {
  margin-right: 15rem;
}

h2 {
  font-family: "PT Serif";
  font-size: 23px;
  text-align: left;
  margin-right: 30px;
}

p {
  font-family: "Work Sans";
  font-size: 12px;
}
.clickme {
  float: right;
  width: 50px;
  height: 40px;
  margin-top: 0px;
}

</style>
