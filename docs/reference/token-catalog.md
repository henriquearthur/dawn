# Token catalog

> Generated from tokens/**/*.tokens.json. Run pnpm build after editing token sources.

Dawn uses :where([data-dawn]) as its root. A value using var(...) is an intentional token alias.

## Core

### `tokens/accents/blue.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `250` | Hue for the blue accent. |

### `tokens/accents/cyan.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `210` | Hue for the cyan accent. |

### `tokens/accents/green.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `150` | Hue for the green accent. |

### `tokens/accents/indigo.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `275` | Hue for the indigo accent. |

### `tokens/accents/orange.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `55` | Hue for the orange accent. |

### `tokens/accents/pink.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `335` | Hue for the pink accent. |

### `tokens/accents/purple.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `305` | Hue for the purple accent. |

### `tokens/accents/yellow.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `accent.hue` | `--dawn-accent-hue` | `number` | `90` | Hue for the yellow accent. |
| `color.action.primary-foreground` | `--dawn-color-action-primary-foreground` | `color` | `oklch(0.22 0.025 90)` | High-contrast foreground for the yellow primary action. |

### `tokens/core/geometry.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `radius.2xl` | `--dawn-radius-2xl` | `dimension` | `calc(var(--dawn-radius-base) + 8px)` | Base radius plus 8px. |
| `radius.base` | `--dawn-radius-base` | `dimension` | `0.75rem` | Primary rounding decision. |
| `radius.lg` | `--dawn-radius-lg` | `dimension` | `var(--dawn-radius-base)` | Alias for the primary rounding decision. |
| `radius.md` | `--dawn-radius-md` | `dimension` | `calc(var(--dawn-radius-base) - 2px)` | Base radius minus 2px. |
| `radius.sm` | `--dawn-radius-sm` | `dimension` | `calc(var(--dawn-radius-base) - 4px)` | Base radius minus 4px. |
| `radius.xl` | `--dawn-radius-xl` | `dimension` | `calc(var(--dawn-radius-base) + 4px)` | Base radius plus 4px. |
| `radius.xs` | `--dawn-radius-xs` | `dimension` | `calc(var(--dawn-radius-base) - 6px)` | Base radius minus 6px. |

### `tokens/core/motion.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `motion.duration.rise` | `--dawn-motion-duration-rise` | `duration` | `0.26s` | Duration for a small upward entrance. |
| `motion.duration.shimmer` | `--dawn-motion-duration-shimmer` | `duration` | `1.6s` | Duration for the shimmer cycle. |
| `motion.easing.rise` | `--dawn-motion-easing-rise` | `cubicBezier` | `cubic-bezier(0.22, 1, 0.36, 1)` | Emphasized entrance easing. |
| `motion.easing.shimmer` | `--dawn-motion-easing-shimmer` | `cubicBezier` | `cubic-bezier(0.42, 0, 0.58, 1)` | CSS ease-in-out expressed as a cubic bezier. |

### `tokens/core/theme.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `theme.accent-hue` | `--dawn-accent-hue` | `number` | `275` | The default indigo accent hue. |

### `tokens/core/typography.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `font.mono` | `--dawn-font-mono` | `fontFamily` | `'Geist Mono', ui-monospace, monospace` | Monospace font stack. Geist Mono is optional. |
| `font.sans` | `--dawn-font-sans` | `fontFamily` | `Geist, ui-sans-serif, system-ui, sans-serif` | Default interface font stack. Geist is optional. |
| `font.serif` | `--dawn-font-serif` | `fontFamily` | `Georgia, serif` | Serif fallback stack. |
| `letter-spacing.body` | `--dawn-letter-spacing-body` | `number` | `var(--dawn-tracking-normal)` | Default body letter spacing, aliased to normal tracking. |
| `tracking.normal` | `--dawn-tracking-normal` | `number` | `-0.011em` | Default interface tracking. |
| `tracking.tight` | `--dawn-tracking-tight` | `number` | `calc(var(--dawn-tracking-normal) - 0.025em)` | Normal tracking minus 0.025em. |
| `tracking.tighter` | `--dawn-tracking-tighter` | `number` | `calc(var(--dawn-tracking-normal) - 0.05em)` | Normal tracking minus 0.05em. |
| `tracking.wide` | `--dawn-tracking-wide` | `number` | `calc(var(--dawn-tracking-normal) + 0.025em)` | Normal tracking plus 0.025em. |
| `tracking.wider` | `--dawn-tracking-wider` | `number` | `calc(var(--dawn-tracking-normal) + 0.05em)` | Normal tracking plus 0.05em. |
| `tracking.widest` | `--dawn-tracking-widest` | `number` | `calc(var(--dawn-tracking-normal) + 0.1em)` | Normal tracking plus 0.1em. |

### `tokens/themes/dark.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `color.action.accent` | `--dawn-color-action-accent` | `color` | `oklch(0.29 0.062 var(--dawn-accent-hue))` | Accent action surface. |
| `color.action.accent-foreground` | `--dawn-color-action-accent-foreground` | `color` | `oklch(0.88 0.07 var(--dawn-accent-hue))` | Foreground on an accent surface. |
| `color.action.primary` | `--dawn-color-action-primary` | `color` | `oklch(0.7 0.16 var(--dawn-accent-hue))` | Primary action color. |
| `color.action.primary-foreground` | `--dawn-color-action-primary-foreground` | `color` | `oklch(0.175 0.035 275)` | Foreground on the primary action. |
| `color.action.secondary` | `--dawn-color-action-secondary` | `color` | `oklch(0.246 0.013 240)` | Secondary action color. |
| `color.action.secondary-foreground` | `--dawn-color-action-secondary-foreground` | `color` | `oklch(0.968 0.003 230)` | Foreground on the secondary action. |
| `color.border.default` | `--dawn-color-border-default` | `color` | `oklch(0.278 0.014 240)` | Default separator and border color. |
| `color.border.input` | `--dawn-color-border-input` | `color` | `oklch(0.298 0.015 240)` | Input border color. |
| `color.feedback.danger` | `--dawn-color-feedback-danger` | `color` | `oklch(0.63 0.19 25)` | Destructive or danger action. |
| `color.feedback.danger-foreground` | `--dawn-color-feedback-danger-foreground` | `color` | `oklch(0.99 0 0)` | Foreground on a danger action. |
| `color.focus.ring` | `--dawn-color-focus-ring` | `color` | `var(--dawn-color-action-primary)` | Focus ring aliases the primary action color. |
| `color.surface.canvas` | `--dawn-color-surface-canvas` | `color` | `oklch(0.162 0.009 240)` | Primary application surface. |
| `color.surface.floating` | `--dawn-color-surface-floating` | `color` | `oklch(0.212 0.012 240)` | Floating surface such as a popover. |
| `color.surface.hover` | `--dawn-color-surface-hover` | `color` | `oklch(0.246 0.013 240)` | Neutral hover surface. |
| `color.surface.muted` | `--dawn-color-surface-muted` | `color` | `oklch(0.238 0.012 240)` | Low-emphasis surface. |
| `color.surface.raised` | `--dawn-color-surface-raised` | `color` | `oklch(0.196 0.011 240)` | Raised surface such as a card. |
| `color.text.muted` | `--dawn-color-text-muted` | `color` | `oklch(0.695 0.015 240)` | Low-emphasis foreground color. |
| `color.text.on-floating` | `--dawn-color-text-on-floating` | `color` | `oklch(0.968 0.003 230)` | Foreground on a floating surface. |
| `color.text.on-raised` | `--dawn-color-text-on-raised` | `color` | `oklch(0.968 0.003 230)` | Foreground on a raised surface. |
| `color.text.primary` | `--dawn-color-text-primary` | `color` | `oklch(0.968 0.003 230)` | Default foreground color. |
| `elevation.2xl` | `--dawn-elevation-2xl` | `shadow` | `0px 32px 64px -16px hsl(240 40% 2% / 0.8)` | Elevation 2xl. |
| `elevation.2xs` | `--dawn-elevation-2xs` | `shadow` | `0px 1px 2px -1px hsl(240 40% 2% / 0.4)` | Elevation 2xs. |
| `elevation.base` | `--dawn-elevation-base` | `shadow` | `0px 1px 2px -1px hsl(240 40% 2% / 0.5), 0px 4px 10px -3px hsl(240 40% 2% / 0.5)` | Elevation base. |
| `elevation.lg` | `--dawn-elevation-lg` | `shadow` | `0px 4px 8px -3px hsl(240 40% 2% / 0.55), 0px 12px 28px -6px hsl(240 40% 2% / 0.6)` | Elevation lg. |
| `elevation.md` | `--dawn-elevation-md` | `shadow` | `0px 2px 4px -2px hsl(240 40% 2% / 0.5), 0px 6px 16px -4px hsl(240 40% 2% / 0.55)` | Elevation md. |
| `elevation.sm` | `--dawn-elevation-sm` | `shadow` | `0px 1px 2px -1px hsl(240 40% 2% / 0.5), 0px 2px 6px -2px hsl(240 40% 2% / 0.45)` | Elevation sm. |
| `elevation.xl` | `--dawn-elevation-xl` | `shadow` | `0px 8px 16px -6px hsl(240 40% 2% / 0.6), 0px 24px 48px -12px hsl(240 40% 2% / 0.7)` | Elevation xl. |
| `elevation.xs` | `--dawn-elevation-xs` | `shadow` | `0px 1px 3px -1px hsl(240 40% 2% / 0.45)` | Elevation xs. |

### `tokens/themes/light.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `color.action.accent` | `--dawn-color-action-accent` | `color` | `oklch(0.952 0.03 var(--dawn-accent-hue))` | Accent action surface. |
| `color.action.accent-foreground` | `--dawn-color-action-accent-foreground` | `color` | `oklch(0.44 0.098 var(--dawn-accent-hue))` | Foreground on an accent surface. |
| `color.action.primary` | `--dawn-color-action-primary` | `color` | `oklch(0.67 0.17 var(--dawn-accent-hue))` | Primary action color. |
| `color.action.primary-foreground` | `--dawn-color-action-primary-foreground` | `color` | `oklch(0.995 0.008 275)` | Foreground on the primary action. |
| `color.action.secondary` | `--dawn-color-action-secondary` | `color` | `oklch(0.958 0.004 230)` | Secondary action color. |
| `color.action.secondary-foreground` | `--dawn-color-action-secondary-foreground` | `color` | `oklch(0.24 0.012 240)` | Foreground on the secondary action. |
| `color.border.default` | `--dawn-color-border-default` | `color` | `oklch(0.915 0.005 230)` | Default separator and border color. |
| `color.border.input` | `--dawn-color-border-input` | `color` | `oklch(0.9 0.006 230)` | Input border color. |
| `color.feedback.danger` | `--dawn-color-feedback-danger` | `color` | `oklch(0.58 0.2 25)` | Destructive or danger action. |
| `color.feedback.danger-foreground` | `--dawn-color-feedback-danger-foreground` | `color` | `oklch(0.99 0 0)` | Foreground on a danger action. |
| `color.focus.ring` | `--dawn-color-focus-ring` | `color` | `var(--dawn-color-action-primary)` | Focus ring aliases the primary action color. |
| `color.surface.canvas` | `--dawn-color-surface-canvas` | `color` | `oklch(0.982 0.002 230)` | Primary application surface. |
| `color.surface.floating` | `--dawn-color-surface-floating` | `color` | `oklch(1 0 0)` | Floating surface such as a popover. |
| `color.surface.hover` | `--dawn-color-surface-hover` | `color` | `oklch(0.955 0.006 230)` | Neutral hover surface. |
| `color.surface.muted` | `--dawn-color-surface-muted` | `color` | `oklch(0.963 0.004 230)` | Low-emphasis surface. |
| `color.surface.raised` | `--dawn-color-surface-raised` | `color` | `oklch(1 0 0)` | Raised surface such as a card. |
| `color.text.muted` | `--dawn-color-text-muted` | `color` | `oklch(0.53 0.017 240)` | Low-emphasis foreground color. |
| `color.text.on-floating` | `--dawn-color-text-on-floating` | `color` | `oklch(0.181 0.012 240)` | Foreground on a floating surface. |
| `color.text.on-raised` | `--dawn-color-text-on-raised` | `color` | `oklch(0.181 0.012 240)` | Foreground on a raised surface. |
| `color.text.primary` | `--dawn-color-text-primary` | `color` | `oklch(0.181 0.012 240)` | Default foreground color. |
| `elevation.2xl` | `--dawn-elevation-2xl` | `shadow` | `0px 32px 64px -16px hsl(230 30% 10% / 0.24)` | Elevation 2xl. |
| `elevation.2xs` | `--dawn-elevation-2xs` | `shadow` | `0px 1px 2px -1px hsl(230 30% 10% / 0.05)` | Elevation 2xs. |
| `elevation.base` | `--dawn-elevation-base` | `shadow` | `0px 1px 2px -1px hsl(230 30% 10% / 0.07), 0px 4px 10px -3px hsl(230 30% 10% / 0.07)` | Elevation base. |
| `elevation.lg` | `--dawn-elevation-lg` | `shadow` | `0px 4px 8px -3px hsl(230 30% 10% / 0.08), 0px 12px 28px -6px hsl(230 30% 10% / 0.12)` | Elevation lg. |
| `elevation.md` | `--dawn-elevation-md` | `shadow` | `0px 2px 4px -2px hsl(230 30% 10% / 0.07), 0px 6px 16px -4px hsl(230 30% 10% / 0.09)` | Elevation md. |
| `elevation.sm` | `--dawn-elevation-sm` | `shadow` | `0px 1px 2px -1px hsl(230 30% 10% / 0.06), 0px 2px 6px -2px hsl(230 30% 10% / 0.06)` | Elevation sm. |
| `elevation.xl` | `--dawn-elevation-xl` | `shadow` | `0px 8px 16px -6px hsl(230 30% 10% / 0.1), 0px 24px 48px -12px hsl(230 30% 10% / 0.16)` | Elevation xl. |
| `elevation.xs` | `--dawn-elevation-xs` | `shadow` | `0px 1px 3px -1px hsl(230 30% 10% / 0.07)` | Elevation xs. |

## Extensions

### `tokens/extensions/data-visualization/dark.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `color.data.series.1` | `--dawn-color-data-series-1` | `color` | `var(--dawn-color-action-primary)` | First chart series aliases the core primary action. |
| `color.data.series.2` | `--dawn-color-data-series-2` | `color` | `oklch(0.74 0.13 170)` | Second chart series. |
| `color.data.series.3` | `--dawn-color-data-series-3` | `color` | `oklch(0.7 0.12 250)` | Third chart series. |
| `color.data.series.4` | `--dawn-color-data-series-4` | `color` | `oklch(0.78 0.14 72)` | Fourth chart series. |
| `color.data.series.5` | `--dawn-color-data-series-5` | `color` | `oklch(0.72 0.16 330)` | Fifth chart series. |

### `tokens/extensions/data-visualization/light.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `color.data.series.1` | `--dawn-color-data-series-1` | `color` | `var(--dawn-color-action-primary)` | First chart series aliases the core primary action. |
| `color.data.series.2` | `--dawn-color-data-series-2` | `color` | `oklch(0.64 0.13 170)` | Second chart series. |
| `color.data.series.3` | `--dawn-color-data-series-3` | `color` | `oklch(0.62 0.12 240)` | Third chart series. |
| `color.data.series.4` | `--dawn-color-data-series-4` | `color` | `oklch(0.68 0.15 60)` | Fourth chart series. |
| `color.data.series.5` | `--dawn-color-data-series-5` | `color` | `oklch(0.6 0.16 330)` | Fifth chart series. |

### `tokens/extensions/navigation/dark.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `color.navigation.action.accent` | `--dawn-color-navigation-action-accent` | `color` | `oklch(0.29 0.062 var(--dawn-accent-hue))` | Navigation accent surface. |
| `color.navigation.action.accent-foreground` | `--dawn-color-navigation-action-accent-foreground` | `color` | `oklch(0.9 0.07 var(--dawn-accent-hue))` | Foreground on the navigation accent surface. |
| `color.navigation.action.primary` | `--dawn-color-navigation-action-primary` | `color` | `var(--dawn-color-action-primary)` | Navigation primary action aliases the core primary action. |
| `color.navigation.action.primary-foreground` | `--dawn-color-navigation-action-primary-foreground` | `color` | `oklch(0.175 0.035 275)` | Foreground on the navigation primary action. |
| `color.navigation.border` | `--dawn-color-navigation-border` | `color` | `oklch(0.248 0.013 240)` | Navigation separator and border. |
| `color.navigation.foreground` | `--dawn-color-navigation-foreground` | `color` | `oklch(0.72 0.014 240)` | Navigation foreground. |
| `color.navigation.ring` | `--dawn-color-navigation-ring` | `color` | `var(--dawn-color-action-primary)` | Navigation focus ring aliases the core primary action. |
| `color.navigation.surface` | `--dawn-color-navigation-surface` | `color` | `oklch(0.142 0.008 240)` | Navigation surface. |

### `tokens/extensions/navigation/light.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `color.navigation.action.accent` | `--dawn-color-navigation-action-accent` | `color` | `oklch(0.952 0.03 var(--dawn-accent-hue))` | Navigation accent surface. |
| `color.navigation.action.accent-foreground` | `--dawn-color-navigation-action-accent-foreground` | `color` | `oklch(0.42 0.098 var(--dawn-accent-hue))` | Foreground on the navigation accent surface. |
| `color.navigation.action.primary` | `--dawn-color-navigation-action-primary` | `color` | `var(--dawn-color-action-primary)` | Navigation primary action aliases the core primary action. |
| `color.navigation.action.primary-foreground` | `--dawn-color-navigation-action-primary-foreground` | `color` | `oklch(0.995 0.008 275)` | Foreground on the navigation primary action. |
| `color.navigation.border` | `--dawn-color-navigation-border` | `color` | `oklch(0.918 0.005 230)` | Navigation separator and border. |
| `color.navigation.foreground` | `--dawn-color-navigation-foreground` | `color` | `oklch(0.38 0.014 240)` | Navigation foreground. |
| `color.navigation.ring` | `--dawn-color-navigation-ring` | `color` | `var(--dawn-color-action-primary)` | Navigation focus ring aliases the core primary action. |
| `color.navigation.surface` | `--dawn-color-navigation-surface` | `color` | `oklch(0.994 0.002 230)` | Navigation surface. |

### `tokens/extensions/panel/dark.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `elevation.panel` | `--dawn-elevation-panel` | `shadow` | `-18px 0px 56px -18px hsl(240 40% 2% / 0.75)` | Side-panel elevation. |
| `motion.duration.panel-in` | `--dawn-motion-duration-panel-in` | `duration` | `0.22s` | Panel entrance duration. |
| `motion.easing.panel-in` | `--dawn-motion-easing-panel-in` | `cubicBezier` | `cubic-bezier(0.32, 0.72, 0, 1)` | Panel entrance easing. |

### `tokens/extensions/panel/light.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `elevation.panel` | `--dawn-elevation-panel` | `shadow` | `-18px 0px 48px -20px hsl(230 30% 10% / 0.22)` | Side-panel elevation. |
| `motion.duration.panel-in` | `--dawn-motion-duration-panel-in` | `duration` | `0.22s` | Panel entrance duration. |
| `motion.easing.panel-in` | `--dawn-motion-easing-panel-in` | `cubicBezier` | `cubic-bezier(0.32, 0.72, 0, 1)` | Panel entrance easing. |

### `tokens/extensions/workflow/dark.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `workflow.priority.1` | `--dawn-workflow-priority-1` | `color` | `oklch(0.7 0.185 25)` | Priority 1. |
| `workflow.priority.2` | `--dawn-workflow-priority-2` | `color` | `oklch(0.77 0.14 58)` | Priority 2. |
| `workflow.priority.3` | `--dawn-workflow-priority-3` | `color` | `oklch(0.73 0.11 245)` | Priority 3. |
| `workflow.priority.4` | `--dawn-workflow-priority-4` | `color` | `oklch(0.68 0.03 240)` | Priority 4. |
| `workflow.priority.none` | `--dawn-workflow-priority-none` | `color` | `oklch(0.55 0.012 240)` | No priority. |
| `workflow.status.backlog` | `--dawn-workflow-status-backlog` | `color` | `oklch(0.68 0.017 240)` | Backlog status. |
| `workflow.status.done` | `--dawn-workflow-status-done` | `color` | `oklch(0.74 0.15 155)` | Completed status. |
| `workflow.status.paused` | `--dawn-workflow-status-paused` | `color` | `oklch(0.78 0.14 82)` | Paused status. |
| `workflow.status.progress` | `--dawn-workflow-status-progress` | `color` | `oklch(0.78 0.14 75)` | In-progress status. |
| `workflow.tint.chroma-default` | `--dawn-workflow-tint-chroma-default` | `number` | `0.035` | Default chroma for caller-provided tint hues. |
| `workflow.tint.dark.surface-chroma-multiplier` | `--dawn-workflow-tint-dark-surface-chroma-multiplier` | `number` | `1.6` | Dark-mode tint surface chroma multiplier. |
| `workflow.tint.dark.surface-lightness` | `--dawn-workflow-tint-dark-surface-lightness` | `number` | `0.288` | Dark-mode tint surface lightness. |
| `workflow.tint.dark.text-chroma-multiplier` | `--dawn-workflow-tint-dark-text-chroma-multiplier` | `number` | `2.9` | Dark-mode tint text chroma multiplier. |
| `workflow.tint.dark.text-lightness` | `--dawn-workflow-tint-dark-text-lightness` | `number` | `0.84` | Dark-mode tint text lightness. |
| `workflow.tint.light.surface-chroma-multiplier` | `--dawn-workflow-tint-light-surface-chroma-multiplier` | `number` | `1` | Light-mode tint surface chroma multiplier. |
| `workflow.tint.light.surface-lightness` | `--dawn-workflow-tint-light-surface-lightness` | `number` | `0.955` | Light-mode tint surface lightness. |
| `workflow.tint.light.text-chroma-multiplier` | `--dawn-workflow-tint-light-text-chroma-multiplier` | `number` | `4` | Light-mode tint text chroma multiplier. |
| `workflow.tint.light.text-lightness` | `--dawn-workflow-tint-light-text-lightness` | `number` | `0.44` | Light-mode tint text lightness. |

### `tokens/extensions/workflow/light.tokens.json`

| Token | CSS custom property | Type | Value | Description |
| --- | --- | --- | --- | --- |
| `workflow.priority.1` | `--dawn-workflow-priority-1` | `color` | `oklch(0.56 0.2 25)` | Priority 1. |
| `workflow.priority.2` | `--dawn-workflow-priority-2` | `color` | `oklch(0.63 0.16 55)` | Priority 2. |
| `workflow.priority.3` | `--dawn-workflow-priority-3` | `color` | `oklch(0.56 0.11 240)` | Priority 3. |
| `workflow.priority.4` | `--dawn-workflow-priority-4` | `color` | `oklch(0.56 0.03 240)` | Priority 4. |
| `workflow.priority.none` | `--dawn-workflow-priority-none` | `color` | `oklch(0.68 0.01 240)` | No priority. |
| `workflow.status.backlog` | `--dawn-workflow-status-backlog` | `color` | `oklch(0.6 0.017 240)` | Backlog status. |
| `workflow.status.done` | `--dawn-workflow-status-done` | `color` | `oklch(0.58 0.14 155)` | Completed status. |
| `workflow.status.paused` | `--dawn-workflow-status-paused` | `color` | `oklch(0.62 0.14 82)` | Paused status. |
| `workflow.status.progress` | `--dawn-workflow-status-progress` | `color` | `oklch(0.66 0.14 72)` | In-progress status. |
| `workflow.tint.chroma-default` | `--dawn-workflow-tint-chroma-default` | `number` | `0.035` | Default chroma for caller-provided tint hues. |
| `workflow.tint.dark.surface-chroma-multiplier` | `--dawn-workflow-tint-dark-surface-chroma-multiplier` | `number` | `1.6` | Dark-mode tint surface chroma multiplier. |
| `workflow.tint.dark.surface-lightness` | `--dawn-workflow-tint-dark-surface-lightness` | `number` | `0.288` | Dark-mode tint surface lightness. |
| `workflow.tint.dark.text-chroma-multiplier` | `--dawn-workflow-tint-dark-text-chroma-multiplier` | `number` | `2.9` | Dark-mode tint text chroma multiplier. |
| `workflow.tint.dark.text-lightness` | `--dawn-workflow-tint-dark-text-lightness` | `number` | `0.84` | Dark-mode tint text lightness. |
| `workflow.tint.light.surface-chroma-multiplier` | `--dawn-workflow-tint-light-surface-chroma-multiplier` | `number` | `1` | Light-mode tint surface chroma multiplier. |
| `workflow.tint.light.surface-lightness` | `--dawn-workflow-tint-light-surface-lightness` | `number` | `0.955` | Light-mode tint surface lightness. |
| `workflow.tint.light.text-chroma-multiplier` | `--dawn-workflow-tint-light-text-chroma-multiplier` | `number` | `4` | Light-mode tint text chroma multiplier. |
| `workflow.tint.light.text-lightness` | `--dawn-workflow-tint-light-text-lightness` | `number` | `0.44` | Light-mode tint text lightness. |
