# Customization Guide

This guide will help you customize the DigiSphere landing page template to match your brand and requirements.

## 🎨 Brand Customization

### 1. Logo and Brand Name

#### Updating the Logo
Replace the DigiSphere logo in the navigation:

```html
<!-- In index.html, find the navigation section -->
<div class="flex items-center">
    <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        DigiSphere <!-- Replace with your brand name -->
    </div>
</div>
```

#### Adding a Custom Logo Image
To use an image logo instead of text:

```html
<div class="flex items-center">
    <img src="assets/images/your-logo.png" alt="Your Brand" class="h-8 w-auto">
</div>
```

### 2. Brand Colors

#### Primary Color Scheme
Update the CSS custom properties in the `<style>` section:

```css
:root {
  --primary-color: #3b82f6;     /* Blue - change to your primary color */
  --secondary-color: #8b5cf6;   /* Purple - change to your secondary color */
  --accent-color: #06b6d4;      /* Cyan - change to your accent color */
}
```

#### Gradient Backgrounds
Update gradient classes throughout the template:

```html
<!-- Hero section gradient -->
<div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">

<!-- Button gradients -->
<button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">

<!-- Feature card gradients -->
<div class="bg-gradient-to-br from-blue-500 to-purple-600">
```

### 3. Typography

#### Changing Fonts
Update the Google Fonts link in the `<head>` section:

```html
<!-- Replace Inter with your preferred font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font family in Tailwind classes:

```html
<!-- Change font-inter to your font name -->
<body class="font-poppins">
```

#### Font Sizes and Weights
Customize typography throughout the template:

```html
<!-- Hero heading -->
<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">

<!-- Section headings -->
<h2 class="text-3xl md:text-4xl font-bold">

<!-- Body text -->
<p class="text-lg text-gray-600 dark:text-gray-300">
```

## 🔧 Content Customization

### 1. Hero Section

#### Updating Headlines and Taglines
```html
<!-- Main headline -->
<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
    Your Brand Name <!-- Replace with your headline -->
</h1>

<!-- Tagline -->
<p class="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-8">
    Your Tagline Here <!-- Replace with your tagline -->
</p>

<!-- Description -->
<p class="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
    Your description here <!-- Replace with your description -->
</p>
```

#### Updating CTA Buttons
```html
<!-- Primary CTA -->
<button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
    Your CTA Text <!-- Replace with your call-to-action -->
</button>

<!-- Secondary CTA -->
<button class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
    Secondary Action <!-- Replace with secondary action -->
</button>
```

### 2. Features Section

#### Adding/Removing Features
To add a new feature card:

```html
<div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 hover:transform hover:scale-105 transition-all duration-300">
    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
        <i class="fas fa-your-icon text-white text-2xl"></i> <!-- Replace with your icon -->
    </div>
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Your Feature Title <!-- Replace with feature title -->
    </h3>
    <p class="text-gray-600 dark:text-gray-300">
        Your feature description here. <!-- Replace with feature description -->
    </p>
</div>
```

#### Updating Icons
Replace Font Awesome icons with your preferred icons:

```html
<!-- Font Awesome -->
<i class="fas fa-rocket text-white text-2xl"></i>

<!-- Or use SVG icons -->
<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
    <!-- Your SVG path here -->
</svg>
```

### 3. Pricing Section

#### Updating Pricing Plans
```html
<!-- Basic Plan -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Plan Name <!-- Replace with your plan name -->
    </h3>
    <div class="mb-6">
        <span class="text-4xl font-bold text-gray-900 dark:text-white">
            $29 <!-- Replace with your price -->
        </span>
        <span class="text-gray-600 dark:text-gray-400">/month</span>
    </div>
    <ul class="space-y-4 mb-8">
        <li class="flex items-center text-gray-600 dark:text-gray-300">
            <i class="fas fa-check text-green-500 mr-3"></i>
            Your feature here <!-- Replace with your features -->
        </li>
        <!-- Add more features as needed -->
    </ul>
</div>
```

#### Adding/Removing Pricing Tiers
To add a new pricing tier, duplicate an existing pricing card and update the content.

### 4. Testimonials Section

#### Updating Testimonials
```html
<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
    <div class="flex items-center mb-6">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
            JD <!-- Replace with user initials -->
        </div>
        <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
                John Doe <!-- Replace with user name -->
            </h4>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
                CEO, Company Name <!-- Replace with user title -->
            </p>
        </div>
    </div>
    <p class="text-gray-600 dark:text-gray-300 italic">
        "Your testimonial text here..." <!-- Replace with testimonial -->
    </p>
</div>
```

### 5. Call-to-Action Section

#### Updating CTA Buttons
```html
<!-- Hire Us Button -->
<button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
    <i class="fas fa-handshake mr-3"></i>
    Your Primary CTA <!-- Replace with your primary action -->
</button>

<!-- Book Meeting Button -->
<button class="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center">
    <i class="fas fa-calendar-alt mr-3"></i>
    Your Secondary CTA <!-- Replace with your secondary action -->
</button>
```

## 🎯 Layout Customization

### 1. Adding New Sections

To add a new section, use this template:

```html
<section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Section Title
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Section description
            </p>
        </div>
        
        <!-- Your section content here -->
        
    </div>
</section>
```

### 2. Removing Sections

To remove a section, simply delete the entire `<section>` block from the HTML.

### 3. Reordering Sections

Cut and paste entire `<section>` blocks to reorder them on the page.

## 🌙 Dark Mode Customization

### 1. Adding Dark Mode to New Elements

When adding new content, always include dark mode classes:

```html
<!-- Background colors -->
<div class="bg-white dark:bg-gray-800">

<!-- Text colors -->
<p class="text-gray-900 dark:text-white">
<p class="text-gray-600 dark:text-gray-300">

<!-- Border colors -->
<div class="border-gray-200 dark:border-gray-700">
```

### 2. Custom Dark Mode Colors

Define custom dark mode colors:

```css
.dark {
  --custom-bg: #1a1a1a;
  --custom-text: #e5e5e5;
}

.custom-dark-bg {
  background-color: var(--custom-bg);
}

.custom-dark-text {
  color: var(--custom-text);
}
```

## 📱 Responsive Customization

### 1. Breakpoint Classes

Tailwind CSS breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### 2. Mobile-First Approach

Always design for mobile first, then add larger screen styles:

```html
<!-- Mobile: text-2xl, Desktop: text-4xl -->
<h2 class="text-2xl lg:text-4xl">

<!-- Mobile: px-4, Desktop: px-8 -->
<div class="px-4 lg:px-8">

<!-- Mobile: grid-cols-1, Tablet: grid-cols-2, Desktop: grid-cols-3 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🔗 Navigation Customization

### 1. Adding Menu Items

```html
<nav class="hidden md:flex space-x-8">
    <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
        Home
    </a>
    <a href="#features" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
        Features
    </a>
    <!-- Add your new menu item -->
    <a href="#your-section" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
        Your Section
    </a>
</nav>
```

### 2. Mobile Menu

Update the mobile menu as well:

```html
<div class="md:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <a href="#home" class="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Home
        </a>
        <!-- Add your mobile menu items -->
    </div>
</div>
```

## 🎨 Animation Customization

### 1. Hover Effects

Customize hover animations:

```html
<!-- Scale on hover -->
<div class="transform hover:scale-105 transition-transform duration-300">

<!-- Fade on hover -->
<div class="opacity-80 hover:opacity-100 transition-opacity duration-300">

<!-- Shadow on hover -->
<div class="hover:shadow-xl transition-shadow duration-300">
```

### 2. Loading Animations

Add loading states:

```html
<div class="animate-pulse">
    <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div class="h-4 bg-gray-300 rounded w-1/2"></div>
</div>
```

## 📊 Performance Tips

### 1. Image Optimization

- Use WebP format when possible
- Compress images before adding
- Add `loading="lazy"` to images below the fold

```html
<img src="image.webp" alt="Description" loading="lazy" class="w-full h-auto">
```

### 2. CSS Optimization

- Remove unused Tailwind classes in production
- Use Tailwind's purge feature
- Minimize custom CSS

### 3. JavaScript Optimization

- Keep JavaScript minimal
- Use vanilla JavaScript when possible
- Load scripts at the bottom of the page

## 🚀 Advanced Customization

### 1. Custom Components

Create reusable components:

```html
<!-- Button Component -->
<button class="btn-primary">
    Click Me
</button>

<style>
.btn-primary {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300;
}
</style>
```

### 2. Custom Animations

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}
```

### 3. Integration with Build Tools

For advanced users, consider:
- Setting up Tailwind CLI for custom builds
- Using PostCSS for additional processing
- Implementing a build process for optimization

---

**Need more help?** Check out the other documentation files or contact support for advanced customization assistance.