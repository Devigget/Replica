# Antigravity Agent Guidelines & Interactive Workflows

This document defines repository-level instructions and interactive protocols for AI agents working in the **Replica** workspace.

---

## 1. Visual Input & Screenshot Interactive Protocol

Whenever the user:
- Uploads or attaches a screenshot (single or multiple)
- Drops a new folder of screenshots into `screenshots/`
- Asks to analyze, replicate, or generate specifications from visual inputs without explicitly specifying the exact prompt template

### **MANDATORY RULE: Prompt the User First with `ask_question`**
The agent **MUST NOT** make assumptions or silently generate code. Instead, the agent **MUST** call the `ask_question` tool to present an interactive modal with the following questions before generating any artifacts:

```json
{
  "questions": [
    {
      "question": "What would you like to generate from the uploaded screenshot(s)?",
      "options": [
        "(Recommended) Both Specs (Deterministic Code Contract in specs/machine/ + Human Design Audit in specs/human/)",
        "Deterministic Code Contract only (specs/machine/SCREEN_SPEC_XX.md)",
        "Human-Readable UI & Style Inventory only (specs/human/SCREEN_SPEC_XX_READABLE.md)",
        "Direct Code Implementation (Write the actual HTML5/CSS or framework components)"
      ],
      "is_multi_select": false
    },
    {
      "question": "Which tech stack / styling system should be targeted?",
      "options": [
        "(Recommended) Vanilla HTML5 + Pure CSS (aligned with GLOBAL_DESIGN_SYSTEM.md)",
        "React / Next.js Component + CSS Modules",
        "Tailwind CSS (confirming version first)",
        "Web Component / Custom Elements"
      ],
      "is_multi_select": false
    },
    {
      "question": "How should screen names, routes, and IDs be assigned?",
      "options": [
        "(Recommended) Auto-detect from image filenames and visual layout (e.g., home.png -> / -> SCR-01)",
        "I will provide custom names and routes in a follow-up message"
      ],
      "is_multi_select": false
    }
  ]
}
```

---

## 2. Execution Workflows Post-Response

Based on the user's interactive response:

### Flow A: Dual Specification Generation (`specs/machine/` + `specs/human/`)
1. Follow [PROMPTS/GENERATE_SCREEN_SPEC_BOTH.md](file:///PROMPTS/GENERATE_SCREEN_SPEC_BOTH.md).
2. For single screenshots, generate companion files in `specs/machine/` and `specs/human/`.
3. For folders (e.g. `screenshots/[folder_name]/`), batch process all images (`.png`, `.jpg`, `.jpeg`, `.webp`).
4. Update the master matrix in [specs/README.md](file:///specs/README.md) linking each screen pair.

### Flow B: Code Contract Only
1. Follow [PROMPTS/GENERATE_SCREEN_SPEC.md](file:///PROMPTS/GENERATE_SCREEN_SPEC.md).
2. Save to `specs/machine/SCREEN_SPEC_[ID]_[name].md`.

### Flow C: Human Design Audit Only
1. Follow [PROMPTS/GENERATE_SCREEN_SPEC_READABLE.md](file:///PROMPTS/GENERATE_SCREEN_SPEC_READABLE.md).
2. Save to `specs/human/SCREEN_SPEC_[ID]_[name]_READABLE.md`.

### Flow D: Direct Code Implementation
1. Follow the **Tier 3 Triplet**:
   - Master design tokens from `GLOBAL_DESIGN_SYSTEM.md`
   - Generated or companion machine contract from `specs/machine/`
   - Visual screenshot reference
2. Implement 100% written, uncompressed CSS with all interactive `:hover` / `:active` micro-interactions.

---

## 3. Directory Structure Standards
- `specs/machine/` — Strictly for AI coding agents (DOM tree, explicit CSS rules, responsive breakpoints).
- `specs/human/` — For designers & PMs (interactive elements table, typography clamp scale, visual tokens, layout matrix, assets inventory).
- `specs/README.md` — Navigable index table linking all screens.
