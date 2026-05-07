<template>
  <h1>主应用 - MicroApp + Vite</h1>
  <div class="nav">
    <button @click="currentPage = 'home'">
      主应用首页
    </button>
    <button @click="currentPage = 'mock-exam-app'">
      加载子应用
    </button>
  </div>
  <div class="content">
    <!-- 主应用内容 -->
    <div v-if="currentPage === 'home'" class="home-page">
      <h2>主应用首页</h2>
      <p>这是一个基于 Vite + Vue3 的主应用</p>
    </div>

    <!-- 子应用容器：使用 v-if 避免在首页时提前加载子应用 -->
    <div v-if="currentPage === 'mock-exam-app'">
      <micro-app 
        name="mock-exam-app" 
        url="http://localhost:3001/"
        iframe
        @created="handleCreated"
        @beforemount="handleBeforeMount"
        @mounted="handleMounted"
        @error="handleError"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPage = ref('home')

// 生命周期事件处理
const handleCreated = () => {
  console.log('子应用创建成功')
}

const handleBeforeMount = () => {
  console.log('子应用即将挂载')
}

const handleMounted = () => {
  console.log('子应用挂载完成')
}

const handleError = () => {
  console.error('子应用加载失败')
}
</script>