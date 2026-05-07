import { createApp } from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'

// 初始化 micro-app
microApp.start({
  'router-mode': 'native'
})


const app = createApp(App)
app.mount('#app')

