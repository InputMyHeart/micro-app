<template>
  <footer class="footer reveal">
    <p> Ming Tang · 用代码和镜头记录世界</p>
    <p>Built with Vue 3 + Vite</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: var(--space-12) var(--space-6);
  color: var(--text-tertiary);
  font-size: 14px;
  border-top: 1px solid var(--border-subtle);
  margin-top: var(--space-8);
}

.footer p:first-child {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}
</style>