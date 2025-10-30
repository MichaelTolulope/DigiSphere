# Installation Guide

## Quick Setup

### 1. Download & Extract
1. Download the FlowEdge template package
2. Extract all files to your desired directory
3. Ensure the folder structure is intact:

```
flowedge-template/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── docs/
└── demo/
```

### 2. Open in Browser
1. Navigate to the template folder
2. Double-click `index.html` to open in your default browser
3. The page should load with the FlowEdge design

### 3. Test Functionality
- Toggle between light and dark modes using the theme switcher
- Test the pricing toggle (monthly/yearly)
- Verify mobile responsiveness by resizing the browser
- Check smooth scrolling navigation

## Development Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code, Sublime Text, Atom)
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development

#### Option 1: Simple File Server
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

#### Option 2: Live Server Extension
1. Install VS Code
2. Install the "Live Server" extension
3. Right-click on `index.html`
4. Select "Open with Live Server"

### File Structure Explanation

```
index.html          # Main landing page
assets/
├── css/
│   └── style.css   # Custom styles and Tailwind overrides
├── js/
│   └── main.js     # JavaScript functionality
└── images/         # Image assets and icons
docs/               # Documentation files
demo/               # Demo images and preview files
```

## Configuration

### 1. Basic Settings

Edit the `<head>` section in `index.html`:

```html
<title>FlowEdge - Your Workflow, Simplified</title>
<meta name="description" content="Streamline your workflow with FlowEdge">
<meta name="keywords" content="workflow, productivity, saas, automation">
```

### 2. Color Scheme

The template uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
}
```

### 3. Font Configuration

Fonts are loaded from Google Fonts. To change fonts, update the link in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Dark Mode Setup

### Automatic Detection
The template automatically detects the user's system preference:

```javascript
// Detects system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
```

### Manual Toggle
Users can manually switch themes using the toggle button in the navigation.

### Custom Dark Mode Colors
Dark mode colors are defined using Tailwind's dark mode classes:

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Content -->
</div>
```

## Mobile Optimization

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Testing Mobile View
1. Open browser developer tools (F12)
2. Click the device toggle icon
3. Select different device sizes
4. Test all functionality

## Performance Optimization

### Image Optimization
1. Compress images before adding them
2. Use WebP format when possible
3. Implement lazy loading for images below the fold

### CSS Optimization
1. Tailwind CSS is already optimized
2. Custom CSS is minified in production
3. Critical CSS is inlined

### JavaScript Optimization
1. Scripts are loaded at the bottom of the page
2. No external dependencies for faster loading
3. Code is minified in production

## Browser Compatibility

### Supported Browsers
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Fallbacks
- CSS Grid with Flexbox fallback
- CSS custom properties with fallback values
- Modern JavaScript with polyfills if needed

## Troubleshooting

### Common Issues

**1. Dark mode not working**
- Check if JavaScript is enabled
- Verify the theme toggle button is present
- Clear browser cache

**2. Animations not smooth**
- Ensure hardware acceleration is enabled
- Check for browser performance issues
- Reduce motion if user prefers reduced motion

**3. Mobile layout issues**
- Verify viewport meta tag is present
- Check CSS media queries
- Test on actual devices

**4. Fonts not loading**
- Check internet connection
- Verify Google Fonts link
- Ensure fallback fonts are specified

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are in the correct locations
3. Test in a different browser
4. Refer to the customization guide
5. Contact support if needed

## Next Steps

After installation:
1. Read the [Customization Guide](./customization.md)
2. Review the [Credits](./credits.md)
3. Check the [Changelog](./changelog.md) for updates

---

**Ready to customize your FlowEdge template!**