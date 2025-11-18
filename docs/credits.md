# Credits

This document lists all the third-party resources, libraries, and assets used in the DigiSphere landing page template.

## 🎨 Design Framework

### Tailwind CSS
- **Version**: 3.3.0
- **License**: MIT License
- **Website**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Usage**: Primary CSS framework for styling and responsive design
- **CDN**: `https://cdn.tailwindcss.com`

## 🔤 Typography

### Google Fonts - Inter
- **Font Family**: Inter
- **Weights Used**: 300, 400, 500, 600, 700
- **License**: Open Font License (OFL)
- **Website**: [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter)
- **Usage**: Primary font family for all text content
- **CDN**: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

## 🎯 Icons

### Font Awesome
- **Version**: 6.4.0
- **License**: Font Awesome Free License
- **Website**: [https://fontawesome.com/](https://fontawesome.com/)
- **Usage**: Icons throughout the template including:
  - Navigation menu icons
  - Feature section icons
  - Social media icons
  - CTA button icons
  - Footer icons
- **CDN**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

### Specific Icons Used
- `fa-rocket` - Performance feature
- `fa-shield-alt` - Security feature
- `fa-chart-line` - Analytics feature
- `fa-users` - Team collaboration feature
- `fa-cog` - Automation feature
- `fa-mobile-alt` - Mobile optimization feature
- `fa-handshake` - Hire Us button
- `fa-calendar-alt` - Book Meeting button
- `fa-sun` - Light mode toggle
- `fa-moon` - Dark mode toggle
- `fa-bars` - Mobile menu toggle
- `fa-times` - Close mobile menu
- `fa-check` - Pricing features checkmarks
- `fa-star` - Testimonial ratings
- `fa-quote-left` - Testimonial quotes
- Social media icons: `fa-twitter`, `fa-linkedin`, `fa-github`, `fa-instagram`

## 🌈 Color Palette

### Primary Colors
- **Blue**: #3b82f6 (Tailwind blue-500)
- **Purple**: #8b5cf6 (Tailwind purple-500)
- **Cyan**: #06b6d4 (Tailwind cyan-500)

### Gradient Combinations
- **Primary Gradient**: Blue to Purple (`from-blue-600 to-purple-600`)
- **Hero Background**: Blue to Purple light (`from-blue-50 to-purple-50`)
- **Dark Mode Hero**: Gray dark (`from-gray-900 to-gray-800`)
- **Feature Cards**: Blue to Purple (`from-blue-500 to-purple-600`)

### Gray Scale (Tailwind)
- **Light Mode**: gray-50, gray-100, gray-200, gray-300, gray-600, gray-900
- **Dark Mode**: gray-700, gray-800, gray-900

## 🖼️ Images and Graphics

### Placeholder Images
- **Source**: Generated using CSS gradients and geometric shapes
- **License**: Custom created for this template
- **Usage**: 
  - Hero section background patterns
  - Feature section decorative elements
  - User avatar placeholders in testimonials

### SVG Graphics
- **Custom Created**: All decorative SVG elements
- **License**: MIT (included with template)
- **Usage**:
  - Background patterns
  - Decorative elements
  - Icon alternatives

## 💻 JavaScript Libraries

### Vanilla JavaScript
- **No External Dependencies**: All JavaScript functionality is written in vanilla JS
- **Features Implemented**:
  - Dark/Light mode toggle
  - Mobile menu toggle
  - Smooth scrolling navigation
  - Pricing toggle (monthly/yearly)
  - Form interactions
  - Scroll animations

## 🎭 Animation and Effects

### CSS Transitions
- **Tailwind Transition Classes**: Used for hover effects and state changes
- **Custom Animations**: Implemented using CSS keyframes
- **Effects Used**:
  - Hover scale transforms
  - Fade in/out transitions
  - Smooth color transitions
  - Backdrop blur effects (glassmorphism)

### Glassmorphism Effects
- **Implementation**: CSS backdrop-filter and transparency
- **Browser Support**: Modern browsers with backdrop-filter support
- **Fallback**: Solid backgrounds for unsupported browsers

## 🌐 CDN Resources

### Tailwind CSS CDN
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Google Fonts CDN
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Font Awesome CDN
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 📱 Responsive Design

### Breakpoints (Tailwind CSS)
- **Mobile**: Default (< 640px)
- **Small**: sm (≥ 640px)
- **Medium**: md (≥ 768px)
- **Large**: lg (≥ 1024px)
- **Extra Large**: xl (≥ 1280px)
- **2X Large**: 2xl (≥ 1536px)

## 🎨 Design Inspiration

### Design Principles
- **Apple Design Guidelines**: Clean, minimal aesthetic
- **Material Design**: Color theory and spacing
- **Modern SaaS Trends**: Glassmorphism, gradients, bold typography

### Layout Inspiration
- **Modern SaaS Landing Pages**: Contemporary layout patterns
- **Apple Product Pages**: Clean typography and spacing
- **Stripe Design System**: Professional color schemes

## 🔧 Development Tools

### Code Editor Recommendations
- **VS Code**: Recommended IDE
- **Extensions Used**:
  - Tailwind CSS IntelliSense
  - Live Server
  - Prettier
  - HTML CSS Support

### Browser Testing
- **Chrome**: Primary development browser
- **Firefox**: Cross-browser testing
- **Safari**: WebKit testing
- **Edge**: Microsoft browser testing

## 📄 License Information

### Template License
- **License**: MIT License
- **Commercial Use**: Allowed
- **Modification**: Allowed
- **Distribution**: Allowed
- **Private Use**: Allowed

### Third-Party Licenses
- **Tailwind CSS**: MIT License
- **Inter Font**: Open Font License (OFL)
- **Font Awesome Free**: Font Awesome Free License

## 🙏 Acknowledgments

### Special Thanks
- **Tailwind CSS Team**: For the amazing utility-first CSS framework
- **Google Fonts Team**: For providing high-quality web fonts
- **Font Awesome Team**: For the comprehensive icon library
- **Open Source Community**: For inspiration and best practices

### Community Resources
- **Tailwind UI**: Design inspiration
- **Heroicons**: Icon design inspiration
- **Headless UI**: Component behavior patterns

## 📞 Support and Attribution

### Required Attribution
When using this template, please consider:
- Keeping the credits in your documentation
- Following the licenses of included resources
- Attributing Font Awesome and Google Fonts if required by your use case

### Optional Attribution
```html
<!-- Optional: Add to your footer -->
<p class="text-sm text-gray-500">
  Built with <a href="https://tailwindcss.com" class="text-blue-500 hover:text-blue-600">Tailwind CSS</a>
</p>
```

## 🔄 Updates and Maintenance

### Keeping Dependencies Updated
- **Tailwind CSS**: Check for updates regularly
- **Font Awesome**: Monitor for new icon releases
- **Google Fonts**: Fonts are automatically updated via CDN

### Version Compatibility
- **Tailwind CSS**: Compatible with v3.x
- **Font Awesome**: Compatible with v6.x
- **Modern Browsers**: Supports ES6+ features

---

**Last Updated**: January 2024

**Template Version**: 1.0.0

**Need Help?** Check the other documentation files or contact support for assistance with third-party resources.