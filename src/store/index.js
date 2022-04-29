import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kaffe: [
      {
        id: 1,
        name: "BryggKaffe",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1
      },
      {
        id: 2,
        name: "Caffe Dopio",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1
      },
      {
        id: 3,
        name: "Cappucino",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1
      },
      {
        id: 4,
        name: "Latte Machiato ",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1
      },
      {
        id: 5,
        name: "Kaffe Latte ",
        price: 49,
        desc: "Bryggd på månadens bönor",
        amount: 1
      },
      {
        id: 6,
        name: "Cortado ",
        price: 39,
        desc: "Bryggd på månadens bönor",
        amount: 1
      }
    ],
    Order: [],
    User: [],
    History: [],
    OrderNumber: [5235632, 3235633, 7235632, 5235631, 3235632, 7235631, 5235634, 3235631, 7235634 ]
  },
  getters: {
    kaffe: state => {
      return state.kaffe;
    },
    order: state => {
      return state.Order;
    },
    user: state => {
      return state.User;
    },
    history: state => {
      return state.History;
    },
    orderno: state => {
      return state.OrderNumber;
    }
  },
  mutations: {
    Add_Order(state, payload) {
      let nameObj = state.Order.find(element => element.name == payload.name)
      if (nameObj) {
        nameObj.amount += 1
      }
      else {
        state.Order.push(payload)
      }
    },
    Add_User(state, k) {
      state.User.push(k)
    },
    Add_Hist(state, k) {
      state.History.push(k)
    }
  },
  actions: {
  },
  modules: {
  }
})
