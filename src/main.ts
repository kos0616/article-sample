import './assets/style.css'
const APP_VERSION = import.meta.env.VITE_APP_VERSION

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

const app = createApp(App)

// app.use(router)

app.mount('#app')

const container = document.documentElement
container.dataset.version = APP_VERSION
container.dataset.updated = BUILD_TIME
