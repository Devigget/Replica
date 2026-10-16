# Prompt Template: Generate Human-Readable Spec & UI Audit (`specs/human/`)

> **File:** `PROMPTS/GENERATE_SCREEN_SPEC_READABLE.md`  
> **Role:** Principal UI/UX Auditor & Design Token Architect  
> **Target Output:** `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md`  
> **Input Accepted:**  
> - **Single Screenshot:** UI image + Screen ID & Name (optional brand context)  
> - **Folder Mode:** Folder containing UI screenshots (e.g. `screenshots/youtube ss/`)

---

## Agent Instructions

You are acting as the **Replica UI & Component Style Auditor**.
Analyze the provided visual screenshot (or all screenshots in the specified folder) and generate structured, human-readable **UI & Component Style Inventories**. This document is formatted for designers, product managers, and frontend developers for rapid visual auditing and design system token extraction.

Outputs must be saved directly to the dedicated human-readable directory:  
`specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md`

If given a folder of screenshots, iterate through all images in the folder and generate an explicit design audit for each screen without omitting any.

---

## Output Contract & Required Sections

The generated file must adhere strictly to the following 5-part schema:

```markdown
# UI & Component Style Inventory: [Screen Name]

**File:** `SCREEN_SPEC_[ID]_[name]_READABLE.md`  
**Screen Target:** [Product / Screen Name]  
**Screen ID:** `[SCREEN-ID]` (e.g., `SCR-01`)  
**Companion File:** `specs/machine/SCREEN_SPEC_[ID]_[name].md` (Code Generation Contract)  

---

## 1. Buttons & Interactive Elements Catalog

This catalog outlines every clickable button, navigation link, dropdown trigger, and interactive state visible on the screen.

### 1.1 Navigation & Action Buttons

| Button / Element | Visual Type | Position | Default Style | Hover & Active State | CSS / Implementation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **"[Button Label]"** | [Solid Pill / Ghost / Outline / Floating FAB] | [Header Right / Hero Center / Card Footer] | `background: #...`, text `#...`, height `...px`, padding `...`, `border-radius: ...`, font-size `...` | **Hover:** `background: #...`, cursor pointer<br/>**Active:** `transform: scale(0.98)` | `[Tailwind class string or CSS shorthand]` |

### 1.2 Navigation Links & Call-To-Actions

| Link Label | Visual Variant | Target / Role | Typography Style | Hover State | Transition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **"[Link Text]"** | [Subtle Underline / Accent Glow / Ghost Nav] | [Route or Anchor target] | Font-size `...px`, weight `...`, color `#...` | Color shifts to `#...` / Underline appears | `color 0.2s ease` |

---

## 2. Headers & Typography Catalog

### 2.1 Typography Hierarchy Table

| Text Content / Role | HTML Tag | Font Family | Size (px or clamp) | Font Weight | Line Height | Color & Visual Treatment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **"[Heading Text]"** | `h1` | Inter, sans-serif | `clamp(32px, 5vw, 48px)` | 700 (Bold) | `1.15` | `#0f0f0f` |
| **"[Subhead Text]"** | `p` | Inter, sans-serif | `16px` | 400 (Regular) | `1.5` | `#606060` |

---

## 3. CSS System & Visual Tokens

### 3.1 Color Palette Tokens

```css
--bg-primary: #ffffff;
--bg-surface: #f2f2f2;
--text-primary: #0f0f0f;
--text-secondary: #606060;
--border-subtle: rgba(0, 0, 0, 0.1);
--brand-accent: #...;
```

---

## 4. Layout & Spacing Matrix

| Container / Section | Layout Model | Alignment | Paddings (T/R/B/L) | Gap | Max-Width / Constraints |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Main Content** | Flex (Column) | `items-stretch` | `32px 48px 64px` | `24px` | Margin-left: `240px`, Min-height: `calc(100vh - 56px)` |

---

## 5. Assets, Icons & Media Inventory

- **SVG Icons & Controls:**
  - `[Icon Name]` (e.g., Chevron, Search, Download, Close) — `16x16px` / `20x20px`, monochrome stroke/fill.
- **Images & Avatars:**
  - Avatar: `40x40px`, circular (`border-radius: 50%`).
  - Hero Mockup / Thumbnail: `16:9` ratio, rounded corners (`border-radius: 12px`).
```

---

## Quality Bar Checklist
- [ ] Are all visible buttons and links cataloged with both default and hover states?
- [ ] Is the typography table completely populated with sizes, weights, and colors?
- [ ] Are all hex codes and CSS tokens explicitly mapped?
- [ ] Does the layout matrix detail Flex/Grid models, padding, and constraints?
- [ ] Is the output saved directly to `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md`?
- [ ] If given a folder of screenshots, were all images processed?
