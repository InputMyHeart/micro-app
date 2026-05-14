<template>
  <div class="mock-exam-app">
    <h2>子应用</h2>
    <p>这是一个基于 Vite + Vue3 的子应用</p>
    
    <div class="info">
      <h3>子应用信息：</h3>
      <ul>
        <li>框架：Vue 3 + Vite</li>
        <li>端口：3001</li>
        <li>状态：运行中</li>
      </ul>
    </div>

    <div class="interaction">
      <h3>与主应用通信：</h3>
      <button @click="sendDataToMain">向主应用发送数据</button>
      <p v-if="receivedData" class="message">
        收到主应用消息：{{ receivedData }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const receivedData = ref('')

// 发送数据到主应用
const sendDataToMain = () => {
  const data = { time: new Date().toLocaleTimeString(), message: '来自子应用的消息' }
  
  if (window.microApp) {
    window.microApp.dispatch(data)
    console.log('子应用发送数据:', data)
  } else {
    console.log('不在微前端环境中')
  }
}

// 监听主应用发送的数据
onMounted(() => {
  if (window.microApp) {
    window.microApp.addDataListener((data) => {
      console.log('子应用接收到主应用数据:', data)
      receivedData.value = JSON.stringify(data)
    })
  }
})
</script>

<style lang='scss' scoped>
h2 {
  color: var(--vibrant-teal);
}
</style>