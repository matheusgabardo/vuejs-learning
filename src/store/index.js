import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      user_name: 'antigo',
      user_lastName: 'Messias'
    },
    products: [
      {
        id: 1,
        name: 'bola',
        price: 100,
        inCart: false
      },
      {
        id: 2,
        name: 'chuteira',
        price: 100,
        inCart: false
      },
      {
        id: 3,
        name: 'Meiao',
        price: 100,
        inCart: false
      },
      {
        id: 4,
        name: 'garrafa',
        price: 100,
        inCart: false
      },
    ],
    cart: [],
  },
  mutations: {
    storeUser(state, data){
      state.user = data;
    },
    addProduct(state, item){
      item.inCart = true;
      state.cart.push(item)
    },
    removeProduct(state, item ) {
      item.inCart = false;
      state.cart.splice(item, 1)
    }
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, item) => total += item.price, 0)
    },
  },
  actions: {
    storeUser(context, data){
      return new Promise((resolve) => {
        setTimeout(()=> {
          resolve()
          console.log('here')
        },3000)
      })
    }
  }
})
