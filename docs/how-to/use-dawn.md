# Use Dawn tokens

Copy `css/dawn.css` into the consuming project's styles and import it before any stylesheet that consumes its variables.

Dawn has no reset, element styling, utility classes, or UI components. The host application decides where and how to apply the tokens.

## Apply a root

Attach `data-dawn` to the element that owns the visual system. In most single-application pages, that is `html`.

```html
<html data-dawn data-dawn-theme="dark" data-dawn-accent="indigo">
```

The default is the light theme with the indigo accent. Set `data-dawn-theme="dark"` to opt into dark mode. The available accents are `indigo`, `purple`, `blue`, `cyan`, `green`, `yellow`, `orange`, and `pink`.

The values cascade only inside the chosen root, so another design system can coexist on the same page.

## Consume CSS variables

```css
[data-dawn] {
  background: var(--dawn-color-surface-canvas);
  color: var(--dawn-color-text-primary);
  font-family: var(--dawn-font-sans);
  letter-spacing: var(--dawn-tracking-normal);
}

.notice {
  background: var(--dawn-color-surface-raised);
  border: 1px solid var(--dawn-color-border-default);
  border-radius: var(--dawn-radius-md);
  box-shadow: var(--dawn-elevation-md);
}
```

## Opt into extensions

Import the core first, then only the extension needed by the product.

```css
@import "./dawn.css";
@import "./extensions/navigation.css";
@import "./extensions/data-visualization.css";
```

The extension files are:

- `navigation.css` for navigation and sidebar tokens.
- `data-visualization.css` for chart series.
- `workflow.css` for status, priority, and tint decisions.
- `panel.css` for side-panel elevation and motion.

## Use with Tailwind CSS 4

After importing Tailwind, import the copied core CSS and `tailwind-theme.css`.

```css
@import "tailwindcss";
@import "./dawn.css";
@import "./tailwind-theme.css";
```

This exposes classes such as `bg-dawn-surface-canvas`, `text-dawn-text-primary`, and `shadow-dawn-md`. The generated `dawn-dark:` variant matches a descendant of `[data-dawn][data-dawn-theme="dark"]`.

Do not use the old unprefixed Horizon names such as `bg-background`. Dawn intentionally avoids claiming those global names.
