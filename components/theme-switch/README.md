# Theme Switch Component

A reusable dark/light mode toggle switch component.

## Features

- Smooth transition between light and dark themes
- LocalStorage support to persist user preference
- Accessible with ARIA labels
- Icon-based visual feedback (sun/moon icons)
- Small, compact design (50x26px)

## Usage

### 1. Include the CSS

```html
<link rel="stylesheet" href="components/theme-switch/theme-switch.css">
```

### 2. Add the HTML

```html
<input type="checkbox" id="theme-switch" class="theme-switch" aria-label="Toggle dark mode">
```

### 3. Include the JavaScript

```html
<script src="components/theme-switch/theme-switch.js"></script>
```

### 4. Add dark mode styles to your main CSS

```css
body {
  background-color: #ffffff;
  color: #212529;
  transition: background-color 0.4s, color 0.4s;
}

body.dark {
  background-color: #323950;
  color: #ffffff;
}
```

## Customization

You can customize the switch appearance by modifying the CSS variables in `theme-switch.css`:

- Switch size: `width` and `height` properties
- Colors: `background-color` properties
- Animation speed: `transition` duration
- Icons: Update the `background-image` paths

## Icons

The component includes both SVG and PNG versions of the icons:

- **SVG (default)**: `light-icon.svg`, `dark-icon.svg` - Scalable, lightweight
- **PNG (backup)**: `light-icon.png`, `dark-icon.png` - Raster images

All icons are included in the component directory for portability.

## Browser Support

Works in all modern browsers that support CSS custom properties and ES6 classes.
