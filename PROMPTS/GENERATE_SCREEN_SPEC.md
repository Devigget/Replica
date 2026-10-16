# Prompt Template: Generate Deterministic Code Specification (`specs/machine/`)

> **File:** `PROMPTS/GENERATE_SCREEN_SPEC.md`  
> **Role:** Senior Frontend Architect & Design Systems Engineer  
> **Target Output:** `specs/machine/SCREEN_SPEC_[ID]_[name].md`  
> **Input Accepted:**  
> - **Single Screenshot:** UI image + Screen ID & Name (optional brand context)  
> - **Folder Mode:** Folder containing UI screenshots (e.g. `screenshots/youtube ss/`)

---

## Agent Instructions

You are acting as the **Replica Deterministic Screen Spec Generator**.
Analyze the provided visual screenshot (or all screenshots in the specified folder) and generate complete, deterministic, production-grade **Code Generation Specification** contracts.

Outputs must be saved directly to the dedicated machine contracts directory:  
`specs/machine/SCREEN_SPEC_[ID]_[name].md`

If given a folder of screenshots, iterate through all images in the folder and generate an explicit code spec for each screen without omitting any.

---

## Output Contract & Required Sections

The generated file must adhere strictly to the following schema:

```markdown
# Screen Spec: [Screen Name] ([SCREEN-ID])

> **Specification Type:** Deterministic Screen Specification (Replica Engine v2.0)  
> **Target Route:** `/[route-path]`  
> **Source Reference:** [Product / Brand Name]  
> **Design Aesthetic:** [e.g., High-Contrast Dark Theme, Frosted Glassmorphism, Clean Minimalist Light]  
> **Companion Spec:** `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md`

---

## 1. Metadata & Layout Architecture

- **Screen ID:** `[SCREEN-ID]` (e.g., `SCR-01`)
- **Route:** `/[route-path]`
- **Shell Layout:** `[LayoutShellName]` (e.g., Fixed top navbar + left sidebar drawer + main content canvas)
- **Viewport Target:**
  - Desktop: `1440px+` (Max content container `[width]px` centered, columns/grid rules)
  - Tablet: `768px - 1024px` (Responsive collapses, horizontal scrolling or stacked layout)
  - Mobile: `<768px` (Single column, mobile navigation drawer/hamburger, full-width buttons)

---

## 2. Component & DOM Hierarchy

```html
<!-- Fully written semantic HTML5 DOM tree with all classes and inline SVGs -->
```

---

## 3. Explicit CSS Specifications

```css
/* Fully written, uncompressed CSS rules with exact Hex colors, Flexbox/Grid, paddings, borders, shadows, hover/active states, and media queries */
```

---

## 4. Typography & Color Mapping Table

| Element | Selector | Font Family | Size | Weight | Line Height | Color (Hex) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ... | ... | ... | ... | ... | ... | ... |

---

## 5. Assets, Icons & Micro-Copy

- **Icons Required:** Exact names, dimensions (width × height in px), and stroke/fill colors.
- **Images & Media:** Aspect ratios (16:9, 1:1, 4:3), dimensions, border-radius, background fills, or overlay masks.
- **Exact Micro-Copy Strings:** Exact text content for headlines, subtext, button labels, and badges.

---

## 6. Responsive Breakpoints & Mobile Adaptations

- **Desktop (>1024px):** Multi-column flex/grid layout, full navigation bar, fixed elements.
- **Tablet (768px - 1024px):** Layout reflow, grid collapse from 3/4 columns to 2 columns, overflow horizontal scrolling.
- **Mobile (<768px):** 100% width fluid stacking, hamburger drawer navigation, touch-friendly tap targets (minimum 44x44px).
```

---

## Quality Bar Checklist
- [ ] Are all hex colors exact (no generic "blue" or "gray")?
- [ ] Is the DOM structure 100% semantic and complete?
- [ ] Are all hover and active states explicitly written out in CSS?
- [ ] Are all responsive breakpoint adjustments clearly defined?
- [ ] Is the output saved directly to `specs/machine/SCREEN_SPEC_[ID]_[name].md`?
- [ ] If given a folder of screenshots, were all images processed?
