<template>
  <main class="login-page">
    <section class="login-panel">
      <div class="brand-side">
        <a class="brand-mark" href="#" aria-label="返回首页">
          <span class="brand-icon">🏠</span>
          <span class="brand-name">我们的生活</span>
        </a>

        <div class="brand-content">
          <span class="eyebrow">家庭网络</span>
          <h1>欢迎回来</h1>
          <p>继续记录你的生活点滴，希望你每天都有好心情</p>
        </div>
      </div>

      <form class="login-card" @submit.prevent="handleLogin">
        <div class="login-header">
          <h2>登录</h2>
          <p>请输入账号信息进入你的个人空间。</p>
        </div>

        <label class="field-group">
          <span>账号</span>
          <input
            v-model="form.account"
            autocomplete="username"
            name="account"
            placeholder="请输入账号"
            type="text"
          />
        </label>

        <label class="field-group">
          <span>密码</span>
          <div class="password-field">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password"
              name="password"
              placeholder="请输入密码"
            />
            <button
              type="button"
              class="password-toggle"
              :aria-label="showPassword ? '隐藏密码' : '显示密码'"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '隐藏' : '显示' }}
            </button>
          </div>
        </label>

        <button class="submit-button" type="submit">
          登录
        </button>

        <p v-if="message" class="form-message">{{ message }}</p>
      </form>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const showPassword = ref(false)
const message = ref('')

const form = reactive({
  account: '',
  password: ''
})

const handleLogin = () => {
  if (!form.account || !form.password) {
    message.value = '请先填写账号和密码。'
    return
  }

  message.value = '登录信息已提交，可在这里接入真实鉴权流程。'
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  padding: var(--space-8);
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 18% 20%, rgba(249, 115, 22, 0.12), transparent 30%),
    radial-gradient(circle at 80% 18%, rgba(20, 184, 166, 0.1), transparent 26%),
    radial-gradient(circle at 84% 82%, rgba(168, 85, 247, 0.08), transparent 28%),
    var(--bg-base);
}

.login-panel {
  width: min(960px, 100%);
  min-height: 560px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-2xl);
  background: rgba(255, 255, 255, 0.84);
  box-shadow: var(--shadow-xl);
  backdrop-filter: blur(22px) saturate(1.35);
}

.brand-side {
  position: relative;
  overflow: hidden;
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--space-8);
  background:
    linear-gradient(135deg, rgba(249, 115, 22, 0.12), transparent 46%),
    linear-gradient(315deg, rgba(20, 184, 166, 0.1), transparent 42%);
}

.brand-side::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 16% 14%, rgba(255, 255, 255, 0.72), transparent 28%),
    radial-gradient(circle at 82% 84%, rgba(168, 85, 247, 0.1), transparent 32%);
  pointer-events: none;
}

.brand-mark,
.brand-content {
  position: relative;
  z-index: 1;
}

.brand-mark {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-primary);
  font-weight: 800;
  text-decoration: none;
}

.brand-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(135deg, var(--accent-500), var(--rose-500));
  box-shadow: var(--shadow-glow-orange);
}

.brand-name {
  font-size: 18px;
}

.brand-content {
  max-width: 440px;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(249, 115, 22, 0.16);
  border-radius: var(--radius-full);
  background: rgba(249, 115, 22, 0.08);
  color: var(--accent-600);
  font-size: 12px;
  font-weight: 700;
}

.brand-content h1 {
  margin-top: var(--space-5);
  color: var(--text-primary);
  font-size: 44px;
  line-height: 1.12;
  font-weight: 800;
}

.brand-content p {
  margin-top: var(--space-4);
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

.login-card {
  align-self: center;
  padding: var(--space-8);
  border-left: 1px solid var(--border-subtle);
}

.login-header {
  margin-bottom: var(--space-8);
}

.login-header h2 {
  color: var(--text-primary);
  font-size: 30px;
  line-height: 1.2;
}

.login-header p {
  margin-top: var(--space-2);
  color: var(--text-tertiary);
  font-size: 14px;
  font-weight: 600;
}

.field-group {
  display: grid;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 700;
}

.field-group input {
  width: 100%;
  height: 48px;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  background: var(--bg-input);
  color: var(--text-primary);
  padding: 0 var(--space-4);
  font: inherit;
  font-weight: 600;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.field-group input:focus {
  border-color: rgba(249, 115, 22, 0.45);
  box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.08);
}

.field-group input::placeholder {
  color: var(--text-disabled);
}

.password-field {
  position: relative;
}

.password-field input {
  padding-right: 76px;
}

.password-toggle,
.submit-button {
  border: 0;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s var(--ease-out);
}

.password-toggle {
  position: absolute;
  top: 7px;
  right: 7px;
  height: 34px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-sm);
  background: var(--bg-hover);
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 700;
}

.password-toggle:hover {
  color: var(--accent-600);
}

.submit-button {
  width: 100%;
  height: 50px;
  margin-top: var(--space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: #fff;
  background: linear-gradient(135deg, var(--accent-500), var(--accent-400));
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(249, 115, 22, 0.2);
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(249, 115, 22, 0.28);
}

.form-message {
  margin-top: var(--space-4);
  padding: var(--space-3);
  border: 1px solid rgba(20, 184, 166, 0.18);
  border-radius: var(--radius-md);
  background: rgba(20, 184, 166, 0.08);
  color: var(--teal-600);
  font-size: 13px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 860px) {
  .login-page {
    align-items: flex-start;
    padding: var(--space-5);
  }

  .login-panel {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .brand-side {
    min-height: 360px;
  }

  .login-card {
    align-self: auto;
    border-top: 1px solid var(--border-subtle);
    border-left: 0;
  }
}

@media (max-width: 560px) {
  .login-page {
    padding: var(--space-3);
  }

  .login-panel {
    border-radius: var(--radius-xl);
  }

  .brand-side,
  .login-card {
    padding: var(--space-5);
  }

  .brand-content h1 {
    font-size: 34px;
  }
}
</style>
