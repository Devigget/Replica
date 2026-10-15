# Screen Spec: YouTube Watch View (Screen #01)

## 1. Screen Metadata & Environment
- **Screen ID**: `SCR-01`
- **Screen Name**: YouTube Watch View
- **Route**: `/watch?v={videoId}`
- **Target Viewports**: 
  - Desktop: 1440px+ (Primary)
  - Compact Desktop / Tablet: 1024px – 1439px
  - Mobile: < 1024px (Single column stacked)
- **Parent Shell**: `AppLayout`
  - Top Navigation Header: Fixed 56px height, persistent.
  - App Sidebar: Automatically transitions to `mini` (collapsed 72px width) or overlays on drawer toggle.
- **Scroll Behavior**: Page-level vertical scroll (`overflow-y: auto` on `.watch-container`).

---

## 2. Component & DOM Hierarchy

```html
<main class="watch-container">
  <!-- Primary Content Column -->
  <div class="primary-column">
    <!-- Video Player Section -->
    <section class="player-wrapper">
      <div class="video-player" id="video-player">
        <!-- 16:9 Aspect Video or Placeholder -->
        <div class="video-overlay-gradient"></div>
      </div>
    </section>

    <!-- Video Metadata Headline -->
    <header class="video-header">
      <h1 class="video-title">Building Modern Web Applications with AI Coding Agents (Full Guide)</h1>
      <div class="video-actions-bar">
        <!-- Channel Info -->
        <div class="channel-info-group">
          <img class="channel-avatar" src="/assets/channel-avatar.jpg" alt="Channel Avatar" />
          <div class="channel-text">
            <span class="channel-name">DevPro Engineering</span>
            <span class="subscriber-count">482K subscribers</span>
          </div>
          <button class="btn btn-subscribe" id="btn-subscribe">Subscribe</button>
        </div>

        <!-- Action Buttons Bar -->
        <div class="action-buttons-group">
          <div class="segmented-pill">
            <button class="btn btn-pill-left" id="btn-like">
              <svg class="icon-lucide icon-thumbs-up"><!-- icon --></svg>
              <span>12K</span>
            </button>
            <div class="segmented-divider"></div>
            <button class="btn btn-pill-right" id="btn-dislike">
              <svg class="icon-lucide icon-thumbs-down"><!-- icon --></svg>
            </button>
          </div>
          <button class="btn btn-pill" id="btn-share">
            <svg class="icon-lucide icon-share-2"><!-- icon --></svg>
            <span>Share</span>
          </button>
          <button class="btn btn-pill" id="btn-download">
            <svg class="icon-lucide icon-download"><!-- icon --></svg>
            <span>Download</span>
          </button>
          <button class="btn btn-pill-icon" id="btn-more">
            <svg class="icon-lucide icon-more-horizontal"><!-- icon --></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Expandable Description Card -->
    <section class="description-card" id="description-card">
      <div class="description-meta">
        <span class="view-count">128,492 views</span>
        <span class="upload-date">Premiered 2 days ago</span>
        <span class="hashtag">#webdev</span>
        <span class="hashtag">#coding</span>
      </div>
      <p class="description-text">
        In this deep dive, we explore how to turn visual UI designs and screenshots into deterministic specifications for AI coding agents.
      </p>
      <button class="btn-more-toggle">Show more</button>
    </section>

    <!-- Comments Section -->
    <section class="comments-section" id="comments-section">
      <div class="comments-header">
        <h2 class="comments-count">1,492 Comments</h2>
        <button class="btn-sort">
          <svg class="icon-lucide icon-menu"><!-- icon --></svg>
          <span>Sort by</span>
        </button>
      </div>
      <!-- Add Comment Form -->
      <div class="add-comment-box">
        <div class="user-avatar-placeholder"></div>
        <input type="text" class="comment-input" placeholder="Add a comment..." />
      </div>
      <!-- Comments List -->
      <div class="comments-list">
        <!-- Rendered comment items -->
      </div>
    </section>
  </div>

  <!-- Secondary Recommendations Column -->
  <aside class="secondary-column">
    <!-- Filter Chips Carousel -->
    <div class="related-filter-chips">
      <button class="filter-chip active">All</button>
      <button class="filter-chip">From this channel</button>
      <button class="filter-chip">Related</button>
    </div>

    <!-- Related Videos List -->
    <div class="related-videos-list">
      <!-- Repeated Video Card Item -->
      <article class="related-video-card">
        <div class="related-thumbnail-wrapper">
          <img class="related-thumbnail" src="/assets/thumb1.jpg" alt="Thumbnail" />
          <span class="duration-badge">14:22</span>
        </div>
        <div class="related-metadata">
          <h3 class="related-title">10 Frontend System Architecture Secrets</h3>
          <span class="related-channel">Senior Tech Talks</span>
          <span class="related-stats">85K views • 3 weeks ago</span>
        </div>
      </article>
    </div>
  </aside>
</main>
```

---

## 3. Explicit CSS Specifications

```css
/* -------------------------------------------------------------
 * 1. Watch View Layout Containers
 * ------------------------------------------------------------- */
.watch-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  padding: 24px 32px;
  background-color: var(--color-bg-base, #0f0f0f);
  color: var(--color-text-primary, #f1f1f1);
  min-height: calc(100vh - 56px);
  box-sizing: border-box;
}

.primary-column {
  flex: 1 1 0%;
  max-width: 1280px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.secondary-column {
  width: 400px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* -------------------------------------------------------------
 * 2. Video Player Section
 * ------------------------------------------------------------- */
.player-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000000;
  border-radius: var(--radius-md, 12px);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.video-player {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
}

/* -------------------------------------------------------------
 * 3. Video Header & Actions Bar
 * ------------------------------------------------------------- */
.video-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.video-title {
  font-family: var(--font-family-base, 'Roboto', sans-serif);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: var(--color-text-primary, #f1f1f1);
  margin: 0;
}

.video-actions-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.channel-info-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.channel-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--color-bg-surface-elevated, #272727);
}

.channel-text {
  display: flex;
  flex-direction: column;
}

.channel-name {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary, #f1f1f1);
  line-height: 22px;
}

.subscriber-count {
  font-size: 12px;
  color: var(--color-text-secondary, #aaaaaa);
  line-height: 18px;
}

.btn-subscribe {
  height: 36px;
  padding: 0 16px;
  border-radius: 18px;
  background-color: var(--color-text-primary, #f1f1f1);
  color: var(--color-text-inverse, #0f0f0f);
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
}

.btn-subscribe:hover {
  opacity: 0.9;
}

.btn-subscribe:active {
  transform: scale(0.98);
}

.action-buttons-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Segmented Like/Dislike Button */
.segmented-pill {
  display: inline-flex;
  align-items: center;
  height: 36px;
  background-color: var(--color-overlay-hover, rgba(255, 255, 255, 0.1));
  border-radius: 18px;
  overflow: hidden;
}

.btn-pill-left,
.btn-pill-right {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 100%;
  padding: 0 16px;
  background: transparent;
  border: none;
  color: var(--color-text-primary, #f1f1f1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-pill-right {
  padding: 0 12px;
}

.btn-pill-left:hover,
.btn-pill-right:hover {
  background-color: var(--color-overlay-active, rgba(255, 255, 255, 0.2));
}

.segmented-divider {
  width: 1px;
  height: 20px;
  background-color: var(--color-border-subtle, rgba(255, 255, 255, 0.2));
}

.btn-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 16px;
  border-radius: 18px;
  background-color: var(--color-overlay-hover, rgba(255, 255, 255, 0.1));
  color: var(--color-text-primary, #f1f1f1);
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-pill:hover {
  background-color: var(--color-overlay-active, rgba(255, 255, 255, 0.2));
}

.btn-pill-icon {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-overlay-hover, rgba(255, 255, 255, 0.1));
  color: var(--color-text-primary, #f1f1f1);
  border: none;
  cursor: pointer;
}

.btn-pill-icon:hover {
  background-color: var(--color-overlay-active, rgba(255, 255, 255, 0.2));
}

/* -------------------------------------------------------------
 * 4. Expandable Description Card
 * ------------------------------------------------------------- */
.description-card {
  background-color: var(--color-bg-surface-elevated, #272727);
  border-radius: var(--radius-md, 12px);
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.description-card:hover {
  background-color: var(--color-bg-surface-highest, #383838);
}

.description-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary, #f1f1f1);
  margin-bottom: 8px;
}

.hashtag {
  color: var(--color-accent-blue, #3ea6ff);
}

.description-text {
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text-primary, #f1f1f1);
  margin: 0;
}

.btn-more-toggle {
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary, #f1f1f1);
  padding: 0;
  margin-top: 8px;
  cursor: pointer;
}

/* -------------------------------------------------------------
 * 5. Related Video Cards (Secondary Column)
 * ------------------------------------------------------------- */
.related-video-card {
  display: flex;
  gap: 12px;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: background-color 0.15s ease;
}

.related-video-card:hover {
  background-color: var(--color-overlay-hover, rgba(255, 255, 255, 0.05));
}

.related-thumbnail-wrapper {
  position: relative;
  width: 168px;
  height: 94px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #202020;
  flex-shrink: 0;
}

.related-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.duration-badge {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  padding: 1px 4px;
  border-radius: 4px;
}

.related-metadata {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.related-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-text-primary, #f1f1f1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

.related-channel,
.related-stats {
  font-size: 12px;
  color: var(--color-text-secondary, #aaaaaa);
  line-height: 16px;
}
```

---

## 4. Typography & Design Token Mapping Table

| UI Element | Selector | Font Family | Size | Weight | Line Height | Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Video Title | `.video-title` | Roboto | 20px | 700 (Bold) | 28px | `#f1f1f1` |
| Channel Name | `.channel-name` | Roboto | 16px | 500 (Medium) | 22px | `#f1f1f1` |
| Subscriber Count | `.subscriber-count` | Roboto | 12px | 400 (Regular) | 18px | `#aaaaaa` |
| Action Button Labels | `.btn-pill span` | Roboto | 14px | 500 (Medium) | 20px | `#f1f1f1` |
| Description Text | `.description-text` | Roboto | 14px | 400 (Regular) | 20px | `#f1f1f1` |
| Related Video Title | `.related-title` | Roboto | 14px | 500 (Medium) | 20px | `#f1f1f1` |
| Timestamp / Duration | `.duration-badge` | Roboto | 12px | 500 (Medium) | 16px | `#ffffff` |

---

## 5. Micro-Interactions & State Matrix

| Element | Idle State | Hover State | Active / Pressed | Focus State |
| :--- | :--- | :--- | :--- | :--- |
| Subscribe Button | `bg: #f1f1f1; text: #0f0f0f` | `opacity: 0.9` | `transform: scale(0.98)` | `outline: 2px solid #3ea6ff` |
| Like Pill (`.btn-pill-left`) | `bg: rgba(255,255,255,0.1)` | `bg: rgba(255,255,255,0.2)` | `transform: scale(0.98)` | `outline: 2px solid #3ea6ff` |
| Description Card | `bg: #272727` | `bg: #383838` | `bg: #303030` | — |
| Related Video Card | `bg: transparent` | `bg: rgba(255,255,255,0.05)` | — | — |

---

## 6. Assets & Iconography Mapping

### Icons (Lucide React / SVG)
- Subscribe Bell: `<Bell size={18} />`
- Thumbs Up: `<ThumbsUp size={18} />`
- Thumbs Down: `<ThumbsDown size={18} />`
- Share: `<Share2 size={18} />`
- Download: `<Download size={18} />`
- More Options: `<MoreHorizontal size={18} />`

### Media Aspect Ratios
- Primary Video Player: `16 : 9` ratio (`width: 100%`)
- Related Thumbnails: `168px x 94px` fixed ratio (`border-radius: 8px`)
- Channel Avatar: `40px x 40px` circular (`border-radius: 50%`)

---

## 7. Responsive Reflow & Breakpoints

- **Desktop (> 1024px)**: 2-column layout (`primary-column` flex-grows, `secondary-column` fixed 400px width).
- **Tablet / Mobile (<= 1024px)**:
  - `.watch-container` switches to `flex-direction: column`.
  - `.secondary-column` expands to `width: 100%` and stacks underneath the comments section.
  - Video player remains top-anchored with `width: 100%` aspect ratio `16/9`.
