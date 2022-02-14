<template>
  <section class="my-profile-history">
    <img src="../assets/ourcoffeetop.svg" />
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="navIcon" />
    </router-link>
    <img src="../assets/myprofilepicture.svg" class="profilImg" />
    <section v-for="(k, index) in user" :key="index" class="kaffestyle">
      <h2 class="name">{{ k.name }}</h2>
      <h2 class="email">{{ k.email }}</h2>
    </section>

    <section v-for="(k, index) in hist" :key="index" class="kaffestyle">
      <h3>Orderhistorik</h3>
      <section class="display">
        <section>
          <h2 class="randnum">#ABC{{ random() }}</h2>
          <p>Total ordersumma</p>
          <hr class="leftLine" />
        </section>
        <section>
          <p>{{ new Date().toLocaleString() }}</p>
          <p>{{ hist[index] }} kr</p>
          <hr class="rightLine" />
        </section>
      </section>
    </section>
    <div class="total">
      <hr />
      <span class="spend">Totalt spenderat: </span>
      <span> {{ hist.reduce(sum) }} kr </span>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    hist() {
      return this.$store.getters.history;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    random() {
      return Math.floor(Math.random() * 1000000 + 1);
    },
    sum(total, num) {
      return total + num;
    },
  },
};
</script>

<style scoped>
.my-profile-history {
  background-color: #2f2926;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.profilImg {
  width: 6rem;
  height: 6rem;
  align-self: center;
  padding: 1rem;
}
.navIcon {
  margin-right: 18rem;
  margin-top: -5rem;
  width: 3rem;
  height: 3rem;
}
hr {
  width: 20rem;
  border: 1px solid white;
}
.leftLine {
  width: 10rem;
  border: 1px dotted #595451;
}
.rightLine {
  width: 10rem;
  border: 1px dotted #595451;
}
h2 {
  margin: 0;
  padding: 2px;
  letter-spacing: 0.07rem;
}
.name {
  font-size: 2rem;
  font-family: serif;
}
.email {
  color: #c0bebe;
  font-size: 1.2rem;
  font-family: sans-serif;
  font-weight: normal;
}
h3 {
  font-family: "serif";
  font-size: 1.5rem;
  line-height: 120%;
  padding: 0;
  text-align: left;
}
.randnum {
  font-family: "Work Sans";
  font-size: 14px;
}
p {
  font-family: "Work Sans";
  font-size: 12px;
}
.spend {
  font-family: "Work Sans";
  font-size: 1.2rem;
  text-align: left;
  align-items: flex-start;
}
.display {
  display: flex;
  justify-content: space-between;
  /* margin: 20px; */
  height: 100%;
}

.kaffestyle {
  padding: 1rem;
}
.total {
  padding: 2rem;
}
</style>
