<template>
  <Nav />
  <section class="main-container">
    <!-- 核心区域 -->
    <div class="hero reveal">
      <!-- 浮动装饰 -->
      <div class="hero-decoration hero-deco-1" />
      <div class="hero-decoration hero-deco-2" />
      <div class="hero-decoration hero-deco-3" />
      <div class="hero-decoration hero-deco-4" />

      <div class="hero-inner">
        <!-- 顶部：头像 + 信息 -->
        <div class="hero-header">
          <div class="hero-avatar">🚀</div>
          <div class="hero-intro">
            <h1 class="hero-name">炒鸡程序员</h1>
            <p class="hero-role">
              <span>前端开发工程师</span> · 摄影爱好者 · 游戏玩家
            </p>
          </div>
        </div>

        <!-- 描述 -->
        <p class="hero-desc">
          热爱用 <strong class="highlight-orange">技术</strong> 创造价值，
          用 <strong class="highlight-teal">镜头</strong> 留住生活里的美好瞬间
          <br />在这里，我分享各种笔记、提升自我、收藏摄影作品
          <br />也会悄悄记录下 <strong class="highlight-purple">美食</strong> 的香气与 <strong class="highlight-rose">游戏</strong> 的快乐
        </p>

        <!-- 技能标签 -->
        <div class="hero-skills">
          <span class="skill-pill">
            <span class="skill-dot teal" />前端开发
          </span>
          <span class="skill-pill">
            <span class="skill-dot orange" />旅行
          </span>
          <span class="skill-pill">
            <span class="skill-dot blue" />睡觉
          </span>
          <span class="skill-pill">
            <span class="skill-dot purple" />美食
          </span>
          <span class="skill-pill">
            <span class="skill-dot rose" />摄影
          </span>
          <span class="skill-pill">
            <span class="skill-dot yellow" />游戏
          </span>
        </div>

        <!-- 操作按钮 -->
        <div class="hero-actions">
          <a href="#" class="btn btn-primary">📝 阅读博客</a>
          <a href="#" class="btn btn-outline">🎯 开始测验</a>
          <a href="#" class="btn btn-outline">📷 浏览图库</a>
        </div>

        <!-- 底部统计 -->
        <div class="hero-footer">
          <div class="footer-stat">
            <span class="footer-stat-value">32</span>
            <span class="footer-stat-label">篇文章</span>
          </div>
          <div class="footer-divider" />
          <div class="footer-stat">
            <span class="footer-stat-value">156</span>
            <span class="footer-stat-label">场考试</span>
          </div>
          <div class="footer-divider" />
          <div class="footer-stat">
            <span class="footer-stat-value">482</span>
            <span class="footer-stat-label">张照片</span>
          </div>
          <div class="footer-divider" />
          <div class="footer-stat">
            <span class="footer-stat-value">3</span>
            <span class="footer-stat-label">个项目</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 快捷入口 -->
    <div class="section-header reveal">
      <h2 class="section-title">探索空间</h2>
    </div>

    <div class="app-cards reveal">
      <a
        href="#"  
        class="app-card" 
        
        style="--card-gradient: linear-gradient(135deg, #f97316, #fb923c); --card-shadow: 0 12px 32px rgba(249, 115, 22, 0.12);"
      >
        <div class="app-card-icon">📝</div>
        <h3 class="app-card-title">技术博客</h3>
        <p class="app-card-desc">记录学习，分享成长路上的每一个突破</p>
        <div class="app-card-stat" style="color: #ea580c;">32 篇文章 · 本周新增 3 篇</div>
      </a>
      <a 
        class="app-card"
        href="#" 
        style="--card-gradient: linear-gradient(135deg, #14b8a6, #2dd4bf); --card-shadow: 0 12px 32px rgba(20, 184, 166, 0.12);"
      >
        <div class="app-card-icon">🎯</div>
        <h3 class="app-card-title">模拟考试</h3>
        <p class="app-card-desc">自测知识体系，追踪学习进度，用数据驱动持续进步</p>
        <div class="app-card-stat" style="color: #0d9488;">已考 156 场 · 平均分 88</div>
      </a>
      <a 
        class="app-card"
        href="#"  
        style="--card-gradient: linear-gradient(135deg, #a855f7, #c084fc); --card-shadow: 0 12px 32px rgba(168, 85, 247, 0.12);"
      >
        <div class="app-card-icon">📷</div>
        <h3 class="app-card-title">照片库</h3>
        <p class="app-card-desc">收藏生活中的美好瞬间，用镜头记录世界的色彩</p>
        <div class="app-card-stat" style="color: #7c3aed;">482 张照片 · 本月 24 张</div>
      </a>
    </div>

    <!-- 内容聚合区 -->
    <div class="content-grid reveal">
      <!-- 最新博客 -->
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">
            <span class="icon">📝</span>
            最新文章
          </h3>
          <a href="#" class="section-more">查看全部 →</a>
        </div>
        <div class="article-item">
          <div class="article-meta">
            <span class="article-date">2026-05-10</span>
            <span class="tag">Vue</span>
            <span class="tag tag-blue">前端</span>
          </div>
          <h4 class="article-title">Vue 3 组合式函数的最佳实践</h4>
          <p class="article-excerpt">在实际项目中如何组织和复用组合式函数，提升代码可维护性和开发效率...</p>
        </div>
        <div class="article-item">
          <div class="article-meta">
            <span class="article-date">2026-05-06</span>
            <span class="tag tag-purple">架构</span>
          </div>
          <h4 class="article-title">微前端架构的个人实践总结</h4>
          <p class="article-excerpt">从单体应用到微前端的迁移过程，遇到的问题和解决方案全记录...</p>
        </div>
        <div class="article-item">
          <div class="article-meta">
            <span class="article-date">2026-05-02</span>
            <span class="tag tag-rose">摄影</span>
            <span class="tag tag-teal">后期</span>
          </div>
          <h4 class="article-title">摄影后期：如何调出电影感色调</h4>
          <p class="article-excerpt">分享我常用的 Lightroom 调色思路和参数设置，让照片更有故事感...</p>
        </div>
      </div>

      <!-- 最近考试 -->
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">
            <span class="icon">🏆</span>
            最近考试
          </h3>
          <a href="#" class="section-more">去挑战 →</a>
        </div>
        <div class="exam-header">
          <div class="exam-score-ring">
            <div class="exam-score-value">88</div>
            <div class="exam-score-label">平均分</div>
          </div>
          <div class="exam-trend">
            <div class="exam-trend-label">近 7 天趋势</div>
            <div class="trend-bars">
              <div class="trend-bar" style="height: 55%; background: linear-gradient(to top, #f97316, transparent); opacity: 0.6;" />
              <div class="trend-bar" style="height: 72%; background: linear-gradient(to top, #f97316, transparent); opacity: 0.7;" />
              <div class="trend-bar" style="height: 45%; background: linear-gradient(to top, #14b8a6, transparent); opacity: 0.7;" />
              <div class="trend-bar" style="height: 88%; background: linear-gradient(to top, #14b8a6, transparent); opacity: 0.8;" />
              <div class="trend-bar" style="height: 68%; background: linear-gradient(to top, #a855f7, transparent); opacity: 0.7;" />
              <div class="trend-bar" style="height: 95%; background: linear-gradient(to top, #a855f7, transparent); opacity: 0.85;" />
              <div class="trend-bar" style="height: 82%; background: linear-gradient(to top, #f43f5e, transparent); opacity: 0.75;" />
            </div>
          </div>
        </div>
        <div class="exam-item">
          <div class="exam-info">
            <span class="exam-name">JavaScript 高级程序设计</span>
            <span class="exam-date">05-10</span>
          </div>
          <div class="exam-score score-excellent">92分</div>
        </div>
        <div class="exam-item">
          <div class="exam-info">
            <span class="exam-name">Vue 源码解析</span>
            <span class="exam-date">05-08</span>
          </div>
          <div class="exam-score score-good">85分</div>
        </div>
        <div class="exam-item">
          <div class="exam-info">
            <span class="exam-name">CSS 布局技巧</span>
            <span class="exam-date">05-06</span>
          </div>
          <div class="exam-score score-pass">78分</div>
        </div>
      </div>
    </div>

    <!-- 照片流 -->
    <div class="photo-section reveal">
      <div class="section-header">
        <h2 class="section-title">最近上传</h2>
        <a href="#" class="section-more">浏览图库 →</a>
      </div>
      <div class="photo-scroll">
        <div class="photo-item">
          <img src="https://picsum.photos/400/300?random=30" alt="照片" />
          <div class="photo-overlay">
            <div class="photo-title">春日街拍</div>
            <div class="photo-date">2026-05-09</div>
          </div>
        </div>
        <div class="photo-item">
          <img src="https://picsum.photos/400/300?random=31" alt="照片" />
          <div class="photo-overlay">
            <div class="photo-title">夜景长曝光</div>
            <div class="photo-date">2026-05-07</div>
          </div>
        </div>
        <div class="photo-item">
          <img src="https://picsum.photos/400/300?random=32" alt="照片" />
          <div class="photo-overlay">
            <div class="photo-title">咖啡馆一角</div>
            <div class="photo-date">2026-05-05</div>
          </div>
        </div>
        <div class="photo-item">
          <img src="https://picsum.photos/400/300?random=33" alt="照片" />
          <div class="photo-overlay">
            <div class="photo-title">山间晨雾</div>
            <div class="photo-date">2026-05-03</div>
          </div>
        </div>
        <div class="photo-item">
          <img src="https://picsum.photos/400/300?random=34" alt="照片" />
          <div class="photo-overlay">
            <div class="photo-title">城市天际线</div>
            <div class="photo-date">2026-05-01</div>
          </div>
        </div>
        <div class="photo-item">
          <img src="https://picsum.photos/400/300?random=35" alt="照片" />
          <div class="photo-overlay">
            <div class="photo-title">海边日落</div>
            <div class="photo-date">2026-04-28</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Foot />
</template>

<script setup>
import Nav from './components/Nav.vue'
import Foot from './components/Foot.vue'
</script>

<style lang="scss" scoped>
.main-container {
  width: 1200px;
  margin: 0 auto;
}

.hero {
  position: relative;
  border-radius: var(--radius-2xl);
  background: var(--bg-hero);
  border: 1px solid var(--border-subtle);
  padding: 64px 56px;
  margin-top: var(--space-6);
  margin-bottom: var(--space-10);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

/* 浮动装饰 - 更柔和 */
.hero-decoration {
  position: absolute;
  border-radius: var(--radius-full);
  pointer-events: none;
}

.hero-deco-1 {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%);
  top: 20px;
  right: 100px;
  animation: float 8s ease-in-out infinite;
}

.hero-deco-2 {
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%);
  top: 100px;
  right: 280px;
  animation: float 7s ease-in-out infinite 1s;
}

.hero-deco-3 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%);
  bottom: 40px;
  right: 180px;
  animation: float 9s ease-in-out infinite 2s;
}

.hero-deco-4 {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 70%);
  top: 60px;
  right: 420px;
  animation: float 6s ease-in-out infinite 1.5s;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

/* Hero 顶部：头像 + 基本信息 */
.hero-header {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}

.hero-avatar {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--accent-500), var(--rose-500));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.18);
  border: 3px solid white;
  flex-shrink: 0;
  position: relative;
}

.hero-avatar::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--accent-500), var(--rose-500));
  opacity: 0.2;
  z-index: -1;
  animation: pulse 3s infinite;
}

.hero-intro {
  flex: 1;
}

.hero-name {
  font-size: 36px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: var(--space-1);
}

.hero-role {
  font-size: 15px;
  color: var(--text-tertiary);
  font-weight: 500;
}

.hero-role span {
  color: var(--accent-600);
  font-weight: 600;
}

/* Hero 描述 */
.hero-desc {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: var(--space-6);
  max-width: 600px;
}

.hero-desc strong {
  color: var(--text-primary);
  font-weight: 600;
}

.hero-desc .highlight-orange { color: var(--accent-600); }
.hero-desc .highlight-teal { color: var(--teal-600); }
.hero-desc .highlight-purple { color: var(--purple-600); }
.hero-desc .highlight-rose { color: var(--rose-600); }

/* 技能标签 */
.hero-skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: var(--space-1) var(--space-3);
  background: white;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.25s;
  box-shadow: var(--shadow-xs);
  cursor: default;
}

.skill-pill:hover {
  border-color: var(--accent-400);
  color: var(--accent-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.skill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.skill-dot.orange { background: var(--accent-500); }
.skill-dot.teal { background: var(--teal-500); }
.skill-dot.purple { background: var(--purple-500); }
.skill-dot.blue { background: var(--blue-500); }
.skill-dot.rose { background: var(--rose-500); }
.skill-dot.yellow { background: var(--warning); }

/* 操作按钮 */
.hero-actions {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s var(--ease-out);
  border: 2px solid transparent;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-500), var(--accent-400));
  color: white;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.18);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(249, 115, 22, 0.28);
}

.btn-outline {
  background: white;
  color: var(--text-secondary);
  border-color: var(--border-default);
  box-shadow: var(--shadow-xs);
}

.btn-outline:hover {
  border-color: var(--accent-400);
  color: var(--accent-600);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.hero-footer {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-subtle);
}

.footer-stat {
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
}

.footer-stat-value {
  font-size: 22px;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

.footer-stat-label {
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 500;
}

.footer-divider {
  width: 1px;
  height: 20px;
  background: var(--border-default);
}

.footer-status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse 2s infinite;
}

.status-text {
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 500;
}

/* ========================================
    快捷入口 - 三卡片
======================================== */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
}

.section-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.section-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, var(--accent-500), var(--accent-400));
  border-radius: var(--radius-full);
}

.section-more {
  font-size: 14px;
  color: var(--text-tertiary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
}

.section-more:hover {
  color: var(--accent-600);
}

.app-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-12);
}

.app-card {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-decoration: none;
  color: inherit;
  transition: all 0.4s var(--ease-out);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.app-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-gradient);
  transform: scaleX(0);
  transition: transform 0.4s var(--ease-out);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.app-card::after {
  content: '';
  position: absolute;
  bottom: -60%;
  right: -60%;
  width: 200%;
  height: 200%;
  background: var(--card-gradient);
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: 50%;
  filter: blur(80px);
}

.app-card:hover {
  transform: translateY(-4px);
  border-color: transparent;
  box-shadow: var(--card-shadow);
}

.app-card:hover::before {
  transform: scaleX(1);
}

.app-card:hover::after {
  opacity: 0.04;
}

.app-card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--card-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  margin-bottom: var(--space-4);
  box-shadow: var(--card-shadow);
  position: relative;
  z-index: 1;
}

.app-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
  position: relative;
  z-index: 1;
}

.app-card-desc {
  color: var(--text-tertiary);
  font-size: 14px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.app-card-stat {
  margin-top: var(--space-4);
  font-size: 13px;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

/* ========================================
    内容聚合区
======================================== */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-12);
}

.content-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
}

.content-card:hover {
  box-shadow: var(--shadow-md);
}

.content-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-5);
}

.content-card-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.content-card-title .icon {
  font-size: 20px;
}

/* 文章列表 */
.article-item {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--bg-base);
  cursor: pointer;
  transition: all 0.25s;
  border: 1px solid transparent;
  margin-bottom: var(--space-3);
}

.article-item:last-child {
  margin-bottom: 0;
}

.article-item:hover {
  background: var(--bg-hover);
  border-color: var(--border-default);
  transform: translateX(3px);
  box-shadow: var(--shadow-xs);
}

.article-meta {
  display: flex;
  gap: var(--space-2);
  align-items: center;
  margin-bottom: var(--space-2);
  flex-wrap: wrap;
}

.article-date {
  font-size: 12px;
  color: var(--text-tertiary);
  font-weight: 500;
}

.article-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
  line-height: 1.4;
}

.article-excerpt {
  font-size: 13px;
  color: var(--text-tertiary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 标签 */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 2px var(--space-3);
  background: rgba(249, 115, 22, 0.06);
  color: var(--accent-600);
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(249, 115, 22, 0.12);
}

.tag-teal {
  background: rgba(20, 184, 166, 0.06);
  color: var(--teal-600);
  border-color: rgba(20, 184, 166, 0.12);
}

.tag-purple {
  background: rgba(168, 85, 247, 0.06);
  color: var(--purple-600);
  border-color: rgba(168, 85, 247, 0.12);
}

.tag-rose {
  background: rgba(244, 63, 94, 0.06);
  color: var(--rose-600);
  border-color: rgba(244, 63, 94, 0.12);
}

.tag-blue {
  background: rgba(59, 130, 246, 0.06);
  color: #2563eb;
  border-color: rgba(59, 130, 246, 0.12);
}

/* 考试记录 */
.exam-header {
  display: flex;
  gap: var(--space-5);
  margin-bottom: var(--space-5);
  align-items: center;
}

.exam-score-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--bg-base);
  border-top-color: var(--accent-500);
  border-right-color: var(--teal-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.exam-score-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

.exam-score-label {
  font-size: 11px;
  color: var(--text-tertiary);
  font-weight: 600;
  margin-top: 2px;
}

.exam-trend {
  flex: 1;
}

.exam-trend-label {
  font-size: 12px;
  color: var(--text-tertiary);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.trend-bars {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 45px;
}

.trend-bar {
  flex: 1;
  border-radius: 3px;
  transition: all 0.3s;
  min-height: 4px;
}

.trend-bar:hover {
  opacity: 0.8;
  transform: scaleY(1.05);
}

.exam-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  background: var(--bg-base);
  margin-bottom: var(--space-2);
  border: 1px solid transparent;
  transition: all 0.25s;
}

.exam-item:last-child {
  margin-bottom: 0;
}

.exam-item:hover {
  border-color: var(--border-default);
  transform: translateX(3px);
  box-shadow: var(--shadow-xs);
}

.exam-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.exam-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.exam-date {
  font-size: 12px;
  color: var(--text-tertiary);
}

.exam-score {
  font-size: 14px;
  font-weight: 700;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}

.score-excellent {
  color: #16a34a;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.15);
}

.score-good {
  color: #2563eb;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.score-pass {
  color: #a16207;
  background: rgba(234, 179, 8, 0.08);
  border: 1px solid rgba(234, 179, 8, 0.15);
}

/* ========================================
    照片流
======================================== */
.photo-section {
  margin-bottom: var(--space-12);
}

.photo-scroll {
  display: flex;
  gap: var(--space-4);
  overflow-x: auto;
  padding-bottom: var(--space-4);
  margin: 0 calc(-1 * var(--space-6));
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

.photo-scroll::-webkit-scrollbar {
  height: 4px;
}

.photo-item {
  flex-shrink: 0;
  width: 280px;
  height: 190px;
  border-radius: var(--radius-xl);
  background: var(--bg-elevated);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.4s;
  box-shadow: var(--shadow-sm);
}

.photo-item:hover {
  border-color: var(--accent-400);
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 12px 32px rgba(249, 115, 22, 0.12);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}

.photo-item:hover img {
  transform: scale(1.08);
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-6) var(--space-4) var(--space-4);
  background: linear-gradient(transparent 10%, rgba(0,0,0,0.75) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.photo-item:hover .photo-overlay {
  opacity: 1;
}

.photo-title {
  color: white;
  font-weight: 600;
  font-size: 14px;
}

.photo-date {
  color: rgba(255,255,255,0.7);
  font-size: 12px;
  margin-top: 2px;
}
</style>