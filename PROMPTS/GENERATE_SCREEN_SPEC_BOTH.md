# Prompt Template: Generate Dual Specifications (`specs/machine/` + `specs/human/`)

> **File:** `PROMPTS/GENERATE_SCREEN_SPEC_BOTH.md`  
> **Role:** Replica Dual-Spec Engine v2.0 (Architect & Auditor)  
> **Target Outputs:**  
> 1. `specs/machine/SCREEN_SPEC_[ID]_[name].md` (Deterministic Code Generation Contract)  
> 2. `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md` (Human-Readable UI & Style Inventory)  
> 3. `specs/README.md` (Master Inventory & Spec Matrix)  
> **Input Accepted:**  
> - **Single Screenshot Mode:** Single UI image + Screen ID & Name (optional brand context)  
> - **Folder Mode (Batch Processing):** A folder path containing multiple UI screenshots (e.g. `screenshots/youtube ss/` or any dropped directory)

---

## Agent Instructions

You are acting as the **Replica Dual-Spec Generation Engine**.
Analyze the provided screenshot(s) and generate **BOTH** complementary specification files, cleanly organized into dedicated directories.

### Output Directory Structure:
```text
specs/
├── README.md                                      # Master inventory table & routing matrix
├── machine/                                       # Deterministic Code-Gen Contracts (For AI Agents)
│   └── SCREEN_SPEC_[ID]_[name].md
└── human/                                         # Design System Audits & Catalogs (For Humans/PMs)
    └── SCREEN_SPEC_[ID]_[name]_READABLE.md
```

---

## Input Modes & Execution Logic

### Mode A: Single Screenshot Input
- **Trigger:** When given a single image file or attachment.
- **Action:**
  1. Inspect the visual layout, typography hierarchy, colors, components, and interactive targets.
  2. Generate `specs/machine/SCREEN_SPEC_[ID]_[name].md` using the schema below.
  3. Generate `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md` using the schema below.
  4. Append or update the screen entry in `specs/README.md`.

### Mode B: Folder / Batch Input
- **Trigger:** When given a folder path or dropped folder containing multiple screenshots (e.g. `screenshots/youtube ss/`).
- **Action:**
  1. **Scan Folder:** Enumerate all image files (`.png`, `.jpg`, `.jpeg`, `.webp`) in the folder.
  2. **Screen Identification:** Derive a clean Screen ID (`SCR-01`, `SCR-02`, etc.) and descriptive slug from each filename (e.g., `home.png` -> `SCREEN_SPEC_01_home`).
  3. **Batch Generation:** For every screenshot in the folder, generate the companion pair:
     - `specs/machine/SCREEN_SPEC_[ID]_[name].md`
     - `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md`
  4. **Master Matrix Update:** Update `specs/README.md` with the full inventory table listing all screens, routes, and clickable links to both machine and human specs.

---

## Critical Consistency Rule:
Both companion files must be in **100% mutual alignment**:
- The CSS class names in the machine spec must match the classes documented in the human readable spec.
- The Hex codes, color tokens, and font sizes must be identical across both documents.
- Every button cataloged in the readable spec must exist in the DOM structure and CSS of the machine spec.

---

## Specification 1: Deterministic Code Generation Contract (`specs/machine/`)

Follow the instructions in `PROMPTS/GENERATE_SCREEN_SPEC.md`:
- **Section 1: Metadata & Route:** Screen ID, screen name, target route, shell layout, viewport target breakpoints (Desktop 1440px+, Tablet 768px-1024px, Mobile <768px), and color theme.
- **Section 2: Component & DOM Hierarchy:** Complete semantic HTML5 tree (`<main>`, `<header>`, `<section>`, `<aside>`) with exact container classes, text strings, and inline SVG paths.
- **Section 3: Explicit CSS Specifications:** Fully written, uncompressed CSS rules with exact Hex colors, Flexbox/Grid coordinates, paddings, borders, shadows, `:hover`, `:active`, transitions, and media queries.
- **Section 4: Typography & Color Mapping Table:** Structured table with element mapping, selector, font-family, size, weight, line-height, and color hex.
- **Section 5: Assets, Icons & Micro-Copy:** SVGs, asset dimensions, aspect ratios, and micro-copy strings.

---

## Specification 2: Human-Readable UI & Component Style Inventory (`specs/human/`)

Follow the instructions in `PROMPTS/GENERATE_SCREEN_SPEC_READABLE.md`:
- **Section 1: Buttons & Interactive Elements Catalog:** Table listing all buttons, pills, links, icons, visual variants, default styles, hover/active states, and CSS class names.
- **Section 2: Headers & Typography Catalog:** Typography hierarchy table with text content, tag, font family, font size, weight, line height, and color hex.
- **Section 3: CSS System & Visual Tokens:** Token variables table for background colors, surface tiers, text tiers, borders, brand accents, and shadows.
- **Section 4: Layout & Spacing Matrix:** Container table with layout model (Flex/Grid), alignment, paddings, gaps, and dimensional constraints.
- **Section 5: Assets, Icons & Media Inventory:** Categorized inventory of SVG icons, hero graphics, avatars, and aspect ratios.

---

## Quality Bar Checklist
- [ ] Are files separated into `specs/machine/` and `specs/human/`?
- [ ] If given a folder, were all screenshots in the folder processed without omitting any?
- [ ] Are class names, tokens, and CSS properties 100% consistent between machine and human files?
- [ ] Is there zero vague text (e.g. no "approximately", "placeholder styles", or truncated blocks)?
- [ ] Does the machine spec have complete, copy-paste ready HTML & CSS?
- [ ] Does the readable spec have all Markdown tables fully populated?
- [ ] Is `specs/README.md` updated with the master matrix linking all generated screens?
