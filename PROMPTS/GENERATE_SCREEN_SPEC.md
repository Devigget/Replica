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

## CRITICAL VISUAL FIDELITY & ASSET RULES (Zero Placeholder Policy)

1. **Brand Logos & Wordmarks**:
   - **STRICTLY FORBIDDEN:** Never output `d="..."`, empty `<svg></svg>`, or HTML comments like `<!-- Logo -->`.
   - Every logo must be constructed with complete, valid, self-contained SVG paths or the verified lockup pattern (SVG icon + typed wordmark + badge) from Section 5 of `GLOBAL_DESIGN_SYSTEM.md`.
2. **Iconography**:
   - Every icon (Search, Mic, Create, Bell, Navigation, Menu, Badges) must contain **complete, valid inline SVG vector paths** (`viewBox="0 0 24 24"`, `fill="currentColor"` or explicit fill/stroke).
3. **Imagery & Avatars**:
   - Never use blank gray boxes for thumbnails or card media. Use high-resolution Unsplash images (e.g. `https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=640&q=80`) or styled CSS gradient backdrops.
   - User avatars must render crisp circular elements with subtle gradients and centered typography (`background: linear-gradient(135deg, #00838f, #00acc1); color: #fff;`) or photographic portraits.
4. **Typography & Antialiasing**:
   - Always specify font family loading and include `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` in global resets.
5. **Micro-Interactions**:
   - Include tactile transitions (`0.15s cubic-bezier(0.2, 0, 0, 1)`), `:hover` states, and `:active` press transforms (`transform: scale(0.97)`).

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
<!-- Fully written semantic HTML5 DOM tree with ALL container classes, complete inline SVGs (NO d="..." or comments), and exact text content -->
```

---

## 3. Explicit CSS Specifications

```css
/* Fully written, uncompressed CSS rules with:
   - Font loading & -webkit-font-smoothing: antialiased
   - Exact Hex colors & CSS variable token mapping
   - Multi-layer shadows (box-shadow) & border radii
   - Explicit :hover, :active, and transition properties
   - Responsive media queries (@media) */
```

---

## 4. Typography & Color Mapping Table

| Element | Selector | Font Family | Size | Weight | Line Height | Color (Hex) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ... | ... | ... | ... | ... | ... | ... |

---

## 5. Assets, Icons & Micro-Copy

- **Brand Logo & Vectors:** Complete SVG code snippets or explicit vector lockup markup.
- **Icons Required:** Exact names, dimensions (width × height in px), and stroke/fill colors.
- **Images & Media:** High-resolution asset URLs, aspect ratios (16:9, 1:1, 4:3), dimensions, and border-radii.
- **Exact Micro-Copy Strings:** Exact text content for headlines, subtext, button labels, and badges.

---

## 6. Responsive Breakpoints & Mobile Adaptations

- **Desktop (>1024px):** Multi-column flex/grid layout, full navigation bar, fixed elements.
- **Tablet (768px - 1024px):** Layout reflow, grid collapse from 3/4 columns to 2 columns, overflow horizontal scrolling.
- **Mobile (<768px):** 100% width fluid stacking, hamburger drawer navigation, touch-friendly tap targets (minimum 44x44px).
```

---

## Quality Bar Checklist
- [ ] Are all brand logos and vector icons 100% complete with ZERO placeholder `d="..."` or comments?
- [ ] Are all hex colors exact (no generic "blue" or "gray")?
- [ ] Is the DOM structure 100% semantic and complete?
- [ ] Are all hover and active states explicitly written out in CSS?
- [ ] Are thumbnails and media assigned high-resolution image URLs or rich gradients (no blank gray boxes)?
- [ ] Are all responsive breakpoint adjustments clearly defined?
- [ ] Is the output saved directly to `specs/machine/SCREEN_SPEC_[ID]_[name].md`?
