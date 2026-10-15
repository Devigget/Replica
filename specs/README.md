# Screen Specifications Directory

This directory contains the generated **Screen Specifications** (`specs/screen_XX.md`). Each file is a self-contained contract defining the exact DOM tree, explicit CSS rules, typography, interactive states, and assets for a single screen.

### 1-to-1 Mapping with Screenshots
Specs should strictly correspond to the matching screenshot in `screenshots/`:

| Screenshot | Screen Specification | Status |
| :--- | :--- | :--- |
| `screenshots/01_home_feed.png` | `specs/01_home_feed.md` | Ready |
| `screenshots/02_video_watch.png` | `specs/02_video_watch.md` | Ready |
| `screenshots/03_channel_profile.png` | `specs/03_channel_profile.md` | In Progress |

### How Coding Agents Consume These Specs
When generating code for any screen, pass the following files into your coding agent (Claude, Antigravity, GitHub Copilot):
1. **Global Tokens**: `GLOBAL_DESIGN_SYSTEM.md` (or master `README.md`)
2. **Screen Spec**: `specs/[screen_name].md`
3. **Visual Reference**: `screenshots/[screen_name].png`
