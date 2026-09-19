# Lucide Open Source Icon Pack for Malamai Circle

This directory provides the official open-source icon pack for **Malamai Circle**, based on **Lucide Icons** (ISC License).

All icons share the same aesthetic DNA:
- **Grid:** 24x24 viewBox
- **Stroke width:** 2px default (`vector-effect="non-scaling-stroke"`)
- **Stroke cap & join:** `round`
- **Color:** `currentColor` (inherits semantic/role color tokens automatically)
- **Accessibility:** `aria-hidden="true"` or paired with `<title>`/text labels

## Available Core Icons in `icons.svg`:
- **Status Icons:**
  - `clock`: Pending / "Still needs an answer"
  - `check`: Success / "This helped"
  - `eye`: Active / "Waiting for review"
  - `slash`: Danger / "Hidden or removed"
  - `dot`: Neutral / "Draft"
  - `shield`: Verified / "TRCN registered"
- **Feedback Icons:**
  - `alert-circle`: Error banner
  - `alert-triangle`: Warning banner
  - `info-circle`: Info banner
  - `check-circle`: Success banner
- **System & Navigation Icons:**
  - `globe`: Language selection (Hausa / English)
  - `x`: Modal / dialog close
  - `sun`: Light theme
  - `moon`: Dark theme
  - `monitor`: System theme
  - `chevron-down`: Form select indicators

## Usage

### Method 1: SVG Sprite with `<use>`
```html
<svg class="icon" aria-hidden="true" width="20" height="20">
  <use href="/design-system/icons/icons.svg#clock"></use>
</svg>
```

### Method 2: Inline SVG (Recommended for zero network requests & offline resilience in Astro)
```html
<svg class="icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="10"></circle>
  <polyline points="12 6 12 12 16 14"></polyline>
</svg>
```
