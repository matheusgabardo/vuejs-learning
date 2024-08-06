import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App).use(store)

app.use(store)

app.mount('#app')
