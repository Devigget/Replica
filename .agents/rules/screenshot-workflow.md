# Visual Input & Screenshot Workflow Rule

When the user uploads or mentions a screenshot (single image or folder of images in `screenshots/`) without explicitly specifying the exact prompt template to use:

1. **Trigger `ask_question`**:
   The agent MUST call the `ask_question` tool before generating files to let the user choose:
   - Output deliverables: Both specs (`specs/machine/` + `specs/human/`), Machine only, Human only, or Direct Code Implementation.
   - Styling / Tech stack preferences (Vanilla HTML/CSS, React, Tailwind).
   - Route and screen naming preferences (Auto-detect vs Custom).

2. **Execute Choice**:
   - Both specs: Run [PROMPTS/GENERATE_SCREEN_SPEC_BOTH.md](file:///PROMPTS/GENERATE_SCREEN_SPEC_BOTH.md)
   - Machine only: Run [PROMPTS/GENERATE_SCREEN_SPEC.md](file:///PROMPTS/GENERATE_SCREEN_SPEC.md)
   - Human only: Run [PROMPTS/GENERATE_SCREEN_SPEC_READABLE.md](file:///PROMPTS/GENERATE_SCREEN_SPEC_READABLE.md)
   - If folder: Process all images in batch and update [specs/README.md](file:///specs/README.md).
