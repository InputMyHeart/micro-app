<template>
  <div class="nav-container flex-center">
    <nav class="navbar animate-fade-in">
      <div class="navbar-inner">
        <a href="#" class="nav-brand">
          <span class="nav-brand-icon">☀️</span>
          <span>我们的生活</span>
        </a>
        <div class="nav-links">
          <a href="#" class="nav-link active">首页</a>
          <a href="#" class="nav-link">博客</a>
          <a href="#" class="nav-link">考试</a>
          <a href="#" class="nav-link">照片</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  padding: var(--space-4) var(--space-6);
  background: rgba(250, 250, 249, 0.85);
  backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid var(--border-subtle);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  height: 64px;
}

.navbar-inner {
  width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: var(--text-primary);
  transition: opacity 0.2s;
}

.nav-brand:hover { opacity: 0.8; }

.nav-brand-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--accent-500), var(--accent-400));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: var(--shadow-glow-orange);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  color: var(--text-tertiary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.nav-link.active {
  color: var(--accent-600);
  background: var(--accent-glow);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  background: var(--accent-500);
  border-radius: var(--radius-full);
}
</style>