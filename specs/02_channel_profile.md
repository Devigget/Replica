# Screen Spec: YouTube Channel Profile & Empty State (Screen #02)

## 1. Screen Metadata & Environment
- **Screen ID**: `SCR-02`
- **Screen Name**: YouTube Channel Profile (Your Channel - Empty State)
- **Route**: `/@{channelHandle}` (e.g. `/@VigneshMclaren`)
- **Target Viewports**:
  - Desktop: 1440px+ (Primary reference)
  - Compact Desktop / Tablet: 768px – 1024px
  - Mobile: < 768px (Single column stacked, avatar shrinks)
- **Parent Shell**: `AppLayout`
  - Top Navigation Header: Fixed 56px height, persistent.
  - App Sidebar: Expanded (240px width), with `"Your channel"` menu item in active/selected state.
- **Theme**: Light Mode (`background: #ffffff`, text: `#0f0f0f`).
- **Scroll Behavior**: Page-level vertical scroll (`overflow-y: auto` on main content container).

---

## 2. Component & DOM Hierarchy

```html
<main class="channel-profile-viewport">
  <div class="channel-profile-container">
    
    <!-- Channel Header Section -->
    <header class="channel-header">
      <!-- Large Avatar -->
      <div class="channel-avatar-wrapper">
        <div class="channel-avatar-letter" aria-label="Channel Avatar for Vignesh Mclaren">
          <span>V</span>
        </div>
      </div>

      <!-- Channel Metadata Details -->
      <div class="channel-details">
        <h1 class="channel-title">Vignesh Mclaren</h1>
        
        <div class="channel-meta-row">
          <span class="channel-handle">@VigneshMclaren</span>
        </div>

        <div class="channel-bio-row">
          <span class="channel-bio-text">More about this channel</span>
          <button class="btn-more-bio" id="btn-more-bio">...more</button>
        </div>

        <!-- Channel Management Action Buttons -->
        <div class="channel-actions-row">
          <button class="btn btn-secondary-pill" id="btn-customize-channel">
            Customize channel
          </button>
          <button class="btn btn-secondary-pill" id="btn-manage-videos">
            Manage videos
          </button>
        </div>
      </div>
    </header>

    <!-- Empty State Content Section -->
    <section class="channel-empty-state">
      <div class="empty-state-illustration">
        <!-- SVG / Canvas Clapperboard & Star Graphic -->
        <div class="graphic-clapperboard">
          <svg class="illustration-svg" viewBox="0 0 160 120" width="160" height="120">
            <!-- Vector Illustration Elements -->
          </svg>
        </div>
      </div>

      <div class="empty-state-text-group">
        <h2 class="empty-state-headline">Create content on any device</h2>
        <p class="empty-state-subtext">
          Upload and record at home or on the go.<br />
          Everything you make public will appear here.
        </p>
      </div>

      <div class="empty-state-cta-wrapper">
        <button class="btn btn-primary-dark-pill" id="btn-create-content">
          Create
        </button>
      </div>
    </section>

  </div>
</main>
```

---

## 3. Explicit CSS Specifications

```css
/* -------------------------------------------------------------
 * 1. Root & Viewport Layout
 * ------------------------------------------------------------- */
.channel-profile-viewport {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  color: #0f0f0f;
  min-height: calc(100vh - 56px);
  padding: 0 32px 64px 32px;
  box-sizing: border-box;
  overflow-y: auto;
}

.channel-profile-container {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
}

/* -------------------------------------------------------------
 * 2. Channel Header Section
 * ------------------------------------------------------------- */
.channel-header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  padding: 32px 0 24px 0;
  border-bottom: 1px solid transparent;
}

/* 160px Teal Avatar with Centered Initial */
.channel-avatar-wrapper {
  flex-shrink: 0;
}

.channel-avatar-letter {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #00838f; /* Cyan/Teal Brand Hue */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 72px;
  font-weight: 400;
  user-select: none;
}

/* Channel Text Details */
.channel-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.channel-title {
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #0f0f0f;
  margin: 0;
  letter-spacing: -0.5px;
}

.channel-meta-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.channel-handle {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #606060;
  line-height: 20px;
}

.channel-bio-row {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
}

.channel-bio-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #606060;
  line-height: 20px;
}

.btn-more-bio {
  background: none;
  border: none;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #0f0f0f;
  cursor: pointer;
  line-height: 20px;
}

.btn-more-bio:hover {
  text-decoration: underline;
}

/* Channel Action Buttons */
.channel-actions-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.btn-secondary-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 18px;
  background-color: #f2f2f2;
  color: #0f0f0f;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-secondary-pill:hover {
  background-color: #e5e5e5;
}

.btn-secondary-pill:active {
  transform: scale(0.98);
}

.btn-secondary-pill:focus-visible {
  outline: 2px solid #065fd4;
  outline-offset: 2px;
}

/* -------------------------------------------------------------
 * 3. Channel Empty State Section
 * ------------------------------------------------------------- */
.channel-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 16px;
  text-align: center;
}

.empty-state-illustration {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-state-text-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 440px;
  margin-bottom: 24px;
}

.empty-state-headline {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #0f0f0f;
  margin: 0;
}

.empty-state-subtext {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #606060;
  margin: 0;
}

/* Primary Dark "Create" Button */
.btn-primary-dark-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 20px;
  border-radius: 18px;
  background-color: #0f0f0f;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;
}

.btn-primary-dark-pill:hover {
  background-color: #272727;
}

.btn-primary-dark-pill:active {
  transform: scale(0.98);
}

.btn-primary-dark-pill:focus-visible {
  outline: 2px solid #065fd4;
  outline-offset: 2px;
}

/* -------------------------------------------------------------
 * 4. Active Sidebar State Rule (For Shell Integration)
 * ------------------------------------------------------------- */
.sidebar-item[data-active="true"],
.sidebar-item.active {
  background-color: rgba(0, 0, 0, 0.05);
  font-weight: 500;
  border-radius: 10px;
}
```

---

## 4. Typography & Design Token Mapping Table

| UI Element | CSS Selector | Font Family | Size (px) | Weight | Line Height | Color (Hex) | Token Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Channel Title | `.channel-title` | Roboto | 36px | 700 (Bold) | 44px | `#0f0f0f` | `var(--color-text-primary)` |
| Channel Handle | `.channel-handle` | Roboto | 14px | 400 (Regular) | 20px | `#606060` | `var(--color-text-secondary)` |
| Bio Text | `.channel-bio-text` | Roboto | 14px | 400 (Regular) | 20px | `#606060` | `var(--color-text-secondary)` |
| More Link | `.btn-more-bio` | Roboto | 14px | 500 (Medium) | 20px | `#0f0f0f` | `var(--color-text-primary)` |
| Pill Button Text | `.btn-secondary-pill` | Roboto | 14px | 500 (Medium) | 20px | `#0f0f0f` | `var(--color-text-primary)` |
| Empty Headline | `.empty-state-headline` | Roboto | 18px | 600 (SemiBold) | 24px | `#0f0f0f` | `var(--color-text-primary)` |
| Empty Subtext | `.empty-state-subtext` | Roboto | 14px | 400 (Regular) | 20px | `#606060` | `var(--color-text-secondary)` |
| Create CTA Label | `.btn-primary-dark-pill` | Roboto | 14px | 500 (Medium) | 20px | `#ffffff` | `var(--color-text-inverse)` |
| Avatar Initial | `.channel-avatar-letter` | Roboto | 72px | 400 (Regular) | 72px | `#ffffff` | `#ffffff` |

---

## 5. Micro-Interactions & State Matrix

| Element | Idle State | Hover State | Active / Pressed | Focus-Visible |
| :--- | :--- | :--- | :--- | :--- |
| `Customize channel` Button | `bg: #f2f2f2; text: #0f0f0f` | `bg: #e5e5e5` | `transform: scale(0.98)` | `outline: 2px solid #065fd4` |
| `Manage videos` Button | `bg: #f2f2f2; text: #0f0f0f` | `bg: #e5e5e5` | `transform: scale(0.98)` | `outline: 2px solid #065fd4` |
| `...more` Bio Toggle | `color: #0f0f0f; underline: none` | `text-decoration: underline` | `opacity: 0.7` | `outline: 1px dotted #0f0f0f` |
| `Create` CTA Button | `bg: #0f0f0f; text: #ffffff` | `bg: #272727` | `transform: scale(0.98)` | `outline: 2px solid #065fd4; outline-offset: 2px` |
| Sidebar Item (`Your channel`) | `bg: rgba(0, 0, 0, 0.05)` | `bg: rgba(0, 0, 0, 0.08)` | `bg: rgba(0, 0, 0, 0.12)` | `outline: none` |

---

## 6. Assets, Iconography & Exact Copy

### 6.1 Icons
- **Sidebar Active Item**: User Avatar Icon (`User` / `UserCircle` in Lucide) with solid/bold representation.
- **Top Navigation Icons**:
  - Hamburger menu: `Menu` (24px)
  - Search: `Search` (20px)
  - Microphone: `Mic` (20px)
  - Create: `Plus` (20px) inside `+ Create` pill
  - Notifications: `Bell` (24px)
- **Empty State Illustration**:
  - Centerpiece: Clapperboard graphic tilted slightly left, decorated with blue slate, pastel green body, and surrounding decorative confetti ribbons and stars.

### 6.2 Exact Visible Copy Strings
- **Channel Title**: `"Vignesh Mclaren"`
- **Handle**: `"@VigneshMclaren"`
- **Bio Snippet**: `"More about this channel ...more"`
- **Header Actions**:
  - `"Customize channel"`
  - `"Manage videos"`
- **Empty State Headline**: `"Create content on any device"`
- **Empty State Description**: `"Upload and record at home or on the go. Everything you make public will appear here."`
- **Primary CTA**: `"Create"`

---

## 7. Responsive Reflow & Breakpoints

- **Desktop (1024px+)**:
  - Avatar is 160px x 160px, horizontally adjacent to channel details (`gap: 24px`).
  - Action buttons (`Customize channel`, `Manage videos`) are displayed side-by-side in a flex row.
- **Tablet (768px – 1023px)**:
  - Avatar scales to 128px x 128px.
  - Channel title scales to 28px.
- **Mobile (< 768px)**:
  - Header switches to `flex-direction: column; align-items: center; text-align: center`.
  - Avatar scales to 80px x 80px.
  - Action buttons span 100% width or equal distribution (`flex: 1`).
  - Empty state text padding reduces to `32px 16px`.
