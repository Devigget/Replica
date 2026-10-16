# Global Design System & Master Specifications (Tier 1)

> **Single Source of Truth (SSOT)** for project-wide styling, design tokens, layout shells, and shared component primitives. All screen specifications (`specs/screen_XX.md`) reference tokens and conventions defined here.

---

## 1. Tech Stack Conventions

- **Structure**: Semantic HTML5 (`<header>`, `<nav>`, `<aside>`, `<main>`, `<section>`, `<article>`).
- **Styling**: Standard CSS Custom Properties (CSS variables) + Vanilla CSS or Tailwind CSS utility classes.
- **Iconography**: [Lucide Icons](https://lucide.dev/) or inline SVG icons.
- **Font Delivery**: Google Fonts via `<link>` or `@import`.

---

## 2. Global Design Tokens

### 2.1 Color Tokens
All components should consume these CSS custom properties to ensure cross-screen coherence:

```css
:root {
  /* Surfaces & Backgrounds */
  --color-bg-base: #0f0f0f;            /* Deep black/gray app background */
  --color-bg-surface: #181818;         /* Card, container, and drawer background */
  --color-bg-surface-elevated: #272727;/* Hover states, popups, elevated chips */
  --color-bg-surface-highest: #383838; /* Dialogs, active chips, focused fields */
  
  /* Text Tiers */
  --color-text-primary: #f1f1f1;       /* 100% white/light primary headlines & body */
  --color-text-secondary: #aaaaaa;     /* Secondary subtitles, timestamps, view counts */
  --color-text-muted: #717171;         /* Placeholders, disabled text, meta labels */
  --color-text-inverse: #0f0f0f;       /* Text on primary accent buttons */

  /* Borders & Dividers */
  --color-border-subtle: rgba(255, 255, 255, 0.1);
  --color-border-strong: rgba(255, 255, 255, 0.2);

  /* Brand Accents & States */
  --color-primary: #ff0000;            /* Primary brand color (e.g. YouTube Red) */
  --color-primary-hover: #cc0000;
  --color-accent-blue: #3ea6ff;        /* Links, interactive tags, badges */
  --color-accent-blue-hover: #65b8ff;
  --color-danger: #ff4e45;
  --color-success: #2ba640;

  /* Interactive Overlays */
  --color-overlay-hover: rgba(255, 255, 255, 0.1);
  --color-overlay-active: rgba(255, 255, 255, 0.2);
}
```

### 2.2 Typography Scale
Primary font family: `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.

```css
:root {
  --font-family-base: 'Roboto', sans-serif;

  /* Type Scale */
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 28px;

  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

### 2.3 Spacing & Radius Scale
```css
:root {
  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* Radius Scale */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

---

## 3. Global App Shell & Layout Structure

Every screen in the application mounts inside the **Standard Application Shell**:

```html
<div class="app-layout">
  <!-- Top Navigation Bar (Fixed 56px height) -->
  <header class="app-header">
    <div class="header-start">...</div>
    <div class="header-center">...</div>
    <div class="header-end">...</div>
  </header>

  <!-- Content Body -->
  <div class="app-body">
    <!-- Collapsible Sidebar / Drawer -->
    <aside class="app-sidebar" data-state="expanded|mini|collapsed">
      ...
    </aside>

    <!-- Main Screen Viewport -->
    <main class="app-main-viewport" id="main-content">
      <!-- Screen-specific content renders here -->
    </main>
  </div>
</div>
```

```css
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-family-base);
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 var(--space-4);
  background-color: var(--color-bg-base);
  border-bottom: 1px solid var(--color-border-subtle);
}

.app-body {
  display: flex;
  flex: 1 1 0%;
  overflow: hidden;
}

.app-sidebar[data-state="expanded"] {
  width: 240px;
  flex-shrink: 0;
}

.app-sidebar[data-state="mini"] {
  width: 72px;
  flex-shrink: 0;
}

.app-main-viewport {
  flex: 1 1 0%;
  overflow-y: auto;
  min-height: calc(100vh - 56px);
}
```

---

## 4. Shared Atomic Components & CSS Classes

### 4.1 Button System

```css
/* Base Button reset */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  padding: 0 var(--space-4);
  height: 36px;
  transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;
  user-select: none;
  white-space: nowrap;
}

.btn:active {
  transform: scale(0.98);
}

/* Variant: Solid White / Inverse Primary */
.btn-primary {
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
}
.btn-primary:hover {
  opacity: 0.9;
}

/* Variant: Subtle Pill (Translucent surface) */
.btn-surface {
  background-color: var(--color-overlay-hover);
  color: var(--color-text-primary);
}
.btn-surface:hover {
  background-color: var(--color-overlay-active);
}

/* Variant: Icon-only Button */
.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--color-text-primary);
}
.btn-icon:hover {
  background-color: var(--color-overlay-hover);
}
```

### 4.2 Pill Chips / Filter Tags

```css
.filter-chip {
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-surface-elevated);
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  border: none;
  transition: background-color 0.15s ease;
}

.filter-chip:hover {
  background-color: var(--color-bg-surface-highest);
}

.filter-chip.active {
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
}
```

---

---

## 5. Canonical Brand Assets & Pixel-Perfect Vector Library

To ensure pristine visual quality and prevent broken logos or placeholder dots (`d="..."`), use these verified canonical SVG assets and lockups:

### 5.1 YouTube Brand Logo Lockup
```html
<a href="/" class="yt-brand-logo" aria-label="YouTube Home">
  <svg class="yt-logo-icon" viewBox="0 0 28 20" fill="none" aria-hidden="true">
    <path fill="#FF0000" d="M27.4 3.1C27.1 1.9 26.1 0.9 24.9 0.6 22.7 0 14 0 14 0S5.3 0 3.1.6C1.9.9.9 1.9.6 3.1 0 5.3 0 10 0 10s0 4.7.6 6.9c.3 1.2 1.3 2.2 2.5 2.5 2.2.6 10.9.6 10.9.6s8.7 0 10.9-.6c1.2-.3 2.2-1.3 2.5-2.5.6-2.2.6-6.9.6-6.9s0-4.7-.6-6.9z"/>
    <polygon fill="#FFFFFF" points="11.2,14.3 18.5,10 11.2,5.7"/>
  </svg>
  <span class="yt-brand-wordmark">YouTube</span>
  <sup class="yt-region-code">IN</sup>
</a>
```

```css
.yt-brand-logo {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

.yt-logo-icon {
  width: 28px;
  height: 20px;
  flex-shrink: 0;
}

.yt-brand-wordmark {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.6px;
  color: var(--color-text-primary, #0f0f0f);
  line-height: 1;
}

.yt-region-code {
  font-size: 10px;
  font-weight: 500;
  color: var(--color-text-secondary, #606060);
  margin-top: -8px;
  margin-left: 2px;
}
```

### 5.2 Google Multi-Color Vector Logo
```html
<svg class="google-logo-svg" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
</svg>
```

### 5.3 Verified Channel Badge & Members Only Star Badge
```html
<!-- Verified Badge -->
<svg class="verified-check-icon" viewBox="0 0 24 24" width="14" height="14" fill="#606060" aria-label="Verified">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>

<!-- Green Members Only Star Badge -->
<div class="members-only-badge" style="display: inline-flex; align-items: center; gap: 4px; color: #0e8345; font-size: 12px; font-weight: 600;">
  <svg viewBox="0 0 24 24" width="14" height="14" fill="#0e8345" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 13.6l-3.2-1.9-3.2 1.9.8-3.6-2.8-2.5 3.7-.3 1.5-3.4 1.5 3.4 3.7.3-2.8 2.5.9 3.6z"/>
  </svg>
  <span>Members only</span>
</div>
```

---

## 6. Strict Quality & High-Fidelity UI Rules for AI Coding Agents

1. **NO PLACEHOLDERS OR TRUNCATIONS**:
   - **NEVER** output `d="..."`, empty `<svg>`, or HTML comments like `<!-- Logo -->`.
   - All brand logos and vector icons must contain 100% complete, pixel-accurate, self-contained SVG paths or explicit vector markup.
2. **AUTHENTIC ASSETS & IMAGERY**:
   - For video thumbnails, avatars, and card imagery: **NEVER** use blank gray boxes.
   - Use high-resolution Unsplash imagery (e.g. `https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=640&q=80`) or styled, gradient-backed illustrations.
   - For user avatars: render crisp circular badges with subtle gradients and centered typography (`background: linear-gradient(135deg, #00838f, #00acc1); color: #fff;`) or photographic portraits.
3. **TYPOGRAPHY & FONT SMOOTHING**:
   - Load official fonts via Google Fonts: `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">`.
   - Apply `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` to ensure crisp text rendering.
4. **MICRO-INTERACTIONS & DEPTH**:
   - Include smooth transitions: `transition: background-color 0.15s cubic-bezier(0.2, 0, 0, 1), transform 0.1s ease;`.
   - Include tactile click states: `:active { transform: scale(0.97); }`.
   - Use multi-layer subtle shadows (`box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);`).
5. **ALWAYS INHERIT FROM TOKENS**:
   - Consume CSS custom properties from this master document (`var(--color-bg-base)`, etc.) to prevent style drift across screens.
