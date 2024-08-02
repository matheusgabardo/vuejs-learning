import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      user_name: 'antigo',
      user_lastName: 'Messias'
    }
  },
  mutations: {
    storeUser(state, data){
      state.user = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
