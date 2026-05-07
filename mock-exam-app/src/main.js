import { createApp } from 'vue'
import App from './App.vue'

// iframe 模式下，子应用独立运行，直接挂载
// 主应用使用 iframe 模式，micro-app 框架不会调用 mount/unmount 导出
const app = createApp(App)
app.mount('#app')