# Screen Specifications Directory (`specs/`)

This directory houses the **Dual-Spec Architecture** outputs, cleanly organized into dedicated folders for machine execution and human review.

```text
specs/
├── README.md
├── machine/                   # For AI Coding Agents (Deterministic Code-Gen Contracts)
│   ├── SCREEN_SPEC_01_home.md
│   ├── SCREEN_SPEC_02_subscriptions.md
│   ├── SCREEN_SPEC_03_watch_history.md
│   ├── SCREEN_SPEC_04_playlists.md
│   ├── SCREEN_SPEC_05_channel_profile.md
│   ├── SCREEN_SPEC_06_downloads.md
│   ├── SCREEN_SPEC_07_memberships.md
│   └── SCREEN_SPEC_08_settings.md
└── human/                     # For UI/UX Designers, PMs & Reviewers (Design Audit)
    ├── SCREEN_SPEC_01_home_READABLE.md
    ├── SCREEN_SPEC_02_subscriptions_READABLE.md
    ├── SCREEN_SPEC_03_watch_history_READABLE.md
    ├── SCREEN_SPEC_04_playlists_READABLE.md
    ├── SCREEN_SPEC_05_channel_profile_READABLE.md
    ├── SCREEN_SPEC_06_downloads_READABLE.md
    ├── SCREEN_SPEC_07_memberships_READABLE.md
    └── SCREEN_SPEC_08_settings_READABLE.md
```

---

## Screen Inventory & Specification Matrix

| Screen # | Screen Name | Route | Source Screenshot | Machine Spec (Code Contract) | Human Spec (Design Audit) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#01** | YouTube Home Feed | `/` | `screenshots/youtube ss/home.png` | [SCREEN_SPEC_01_home.md](file:///specs/machine/SCREEN_SPEC_01_home.md) | [SCREEN_SPEC_01_home_READABLE.md](file:///specs/human/SCREEN_SPEC_01_home_READABLE.md) |
| **#02** | YouTube Subscriptions | `/feed/subscriptions` | `screenshots/youtube ss/subscriptions.png` | [SCREEN_SPEC_02_subscriptions.md](file:///specs/machine/SCREEN_SPEC_02_subscriptions.md) | [SCREEN_SPEC_02_subscriptions_READABLE.md](file:///specs/human/SCREEN_SPEC_02_subscriptions_READABLE.md) |
| **#03** | YouTube Watch History | `/feed/history` | `screenshots/youtube ss/watch_history.png` | [SCREEN_SPEC_03_watch_history.md](file:///specs/machine/SCREEN_SPEC_03_watch_history.md) | [SCREEN_SPEC_03_watch_history_READABLE.md](file:///specs/human/SCREEN_SPEC_03_watch_history_READABLE.md) |
| **#04** | YouTube Playlists | `/feed/playlists` | `screenshots/youtube ss/playlists.png` | [SCREEN_SPEC_04_playlists.md](file:///specs/machine/SCREEN_SPEC_04_playlists.md) | [SCREEN_SPEC_04_playlists_READABLE.md](file:///specs/human/SCREEN_SPEC_04_playlists_READABLE.md) |
| **#05** | YouTube Channel Profile | `/@VigneshMclaren` | `screenshots/youtube ss/channel_profile.png` | [SCREEN_SPEC_05_channel_profile.md](file:///specs/machine/SCREEN_SPEC_05_channel_profile.md) | [SCREEN_SPEC_05_channel_profile_READABLE.md](file:///specs/human/SCREEN_SPEC_05_channel_profile_READABLE.md) |
| **#06** | YouTube Downloads | `/feed/downloads` | `screenshots/youtube ss/downloads.png` | [SCREEN_SPEC_06_downloads.md](file:///specs/machine/SCREEN_SPEC_06_downloads.md) | [SCREEN_SPEC_06_downloads_READABLE.md](file:///specs/human/SCREEN_SPEC_06_downloads_READABLE.md) |
| **#07** | YouTube Memberships | `/feed/memberships` | `screenshots/youtube ss/memberships.png` | [SCREEN_SPEC_07_memberships.md](file:///specs/machine/SCREEN_SPEC_07_memberships.md) | [SCREEN_SPEC_07_memberships_READABLE.md](file:///specs/human/SCREEN_SPEC_07_memberships_READABLE.md) |
| **#08** | YouTube Settings / Account | `/account` | `screenshots/youtube ss/settings.png` | [SCREEN_SPEC_08_settings.md](file:///specs/machine/SCREEN_SPEC_08_settings.md) | [SCREEN_SPEC_08_settings_READABLE.md](file:///specs/human/SCREEN_SPEC_08_settings_READABLE.md) |

---

## Folder Breakdown

### 1. `specs/machine/` (Deterministic Code-Gen Contracts)
- **Primary Consumer:** Autonomous AI coding agents (Claude, Antigravity, GitHub Copilot).
- **Format:** Strict, machine-parseable Markdown specifications adhering to `REFERENCE/spec-output-template-screen.md`.
- **Contents:**
  - Semantic HTML5 DOM tree (`<main>`, `<header>`, `<section>`, `<aside>`).
  - 100% explicit CSS rule blocks (exact px dimensions, hex/rgba values, flex/grid coordinates).
  - Explicit interactive states (`:hover`, `:active`, `:focus-visible`).
  - Responsive reflow rules for Desktop, Tablet, and Mobile viewports.

### 2. `specs/human/` (Design Audit & UI Inventory)
- **Primary Consumer:** UI/UX Designers, Product Managers, QA Engineers, and Technical Leads.
- **Format:** High-level structured audit tables and catalogs.
- **Contents:**
  - **Buttons & Interactive Elements Catalog:** Table listing all buttons, links, icons, visual variants, and hover states.
  - **Headers & Typography Catalog:** Font families, weights, line heights, and typography scale.
  - **CSS System & Visual Tokens:** Color palette tokens, border radii, shadows, and effect tokens.
  - **Layout & Spacing Matrix:** Flexbox/grid alignment rules, container paddings, and section gaps.
  - **Assets & Media Inventory:** Icon names (SVG/Lucide), image ratios, and badge assets.

---

## How AI Coding Agents Consume Machine Specs (Tier 3 Triplet)

When implementing any screen, pass this exact 3-part context to the agent:
1. **Global Tokens:** `GLOBAL_DESIGN_SYSTEM.md` (or master `README.md`)
2. **Machine Screen Spec:** `specs/machine/SCREEN_SPEC_XX_[name].md`
3. **Visual Reference:** `screenshots/[folder_name]/[name].png`

---

## How to Batch Generate Specs from a Folder

To generate both machine and human specifications for an entire folder of screenshots, use this command with Antigravity, Cursor, or Claude Code:

```text
Follow PROMPTS/GENERATE_SCREEN_SPEC_BOTH.md for all screenshots in folder /screenshots/[folder_name]
```

The engine will automatically:
1. Scan every image (`.png`, `.jpg`, `.jpeg`, `.webp`) in the target folder.
2. Generate companion pairs in `specs/machine/` and `specs/human/` with 100% token and selector alignment.
3. Update this index table with clickable links to all generated contracts.
