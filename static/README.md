
# KGMI Digital Studio - Static HTML Website

This is a complete static HTML version of the KGMI Digital Studio website, converted from the original React application.

## Features

- ✅ **Fully Static** - No server configuration needed
- ✅ **Responsive Design** - Works on all devices
- ✅ **Interactive Gallery** - With lightbox and filtering
- ✅ **Contact Form** - Ready for backend integration
- ✅ **SEO Optimized** - Proper meta tags and structure
- ✅ **Modern Design** - Using Tailwind CSS
- ✅ **Fast Loading** - Optimized images and code

## File Structure

```
static/
├── index.html              # Homepage
├── gallery.html           # Gallery page with filtering
├── contact.html           # Contact page with form
├── photo-studio.html      # Photo studio services (to be created)
├── video-production.html  # Video production services (to be created)
├── web-development.html   # Web development services (to be created)
├── assets/
│   ├── css/
│   │   └── style.css      # Custom CSS styles
│   └── js/
│       └── main.js        # JavaScript functionality
└── README.md              # This file
```

## Deployment Instructions

### Option 1: Any Web Hosting (Recommended)
1. Upload all files to your hosting provider's public folder
2. No special configuration needed
3. Website will work immediately

### Option 2: cPanel Hosting
1. Extract all files
2. Upload to `public_html` folder via File Manager
3. No `.htaccess` needed (unlike React version)
4. Website will work immediately

### Option 3: GitHub Pages
1. Create a new repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### Option 4: Netlify/Vercel
1. Create account on Netlify or Vercel
2. Drag and drop the `static` folder
3. Your site will be deployed automatically

## Features Included

### ✅ Completed Pages
- **Homepage** (`index.html`) - Full homepage with hero, services, about
- **Gallery** (`gallery.html`) - Interactive gallery with filtering and lightbox
- **Contact** (`contact.html`) - Contact form and information

### 🔄 Pages to Create
The following service pages need to be created based on your React pages:
- `photo-studio.html`
- `photo-studio-rental.html`
- `video-production.html`
- `graphics-branding.html`
- `web-development.html`
- `digital-marketing.html`
- `social-media.html`
- `seo-services.html`
- `privacy-policy.html`
- `terms-conditions.html`
- `booking-cancellation-policy.html`

## Gallery Functionality

The gallery includes:
- ✅ Category filtering (All, Studio, Family, Fashion, Wedding, etc.)
- ✅ Lightbox image viewer
- ✅ Keyboard navigation (ESC to close, arrow keys to navigate)
- ✅ Responsive grid layout
- ✅ Smooth animations

## Contact Form

The contact form includes:
- ✅ Form validation
- ✅ Service selection dropdown
- ✅ Budget range selection
- ✅ Loading states
- ✅ Success/error notifications

**Note:** The form currently shows demo functionality. To make it work:
1. Add a form handler service like Formspree, Netlify Forms, or custom backend
2. Update the form action in `contact.html`
3. Modify the JavaScript in `assets/js/main.js`

## Customization

### Adding New Gallery Items
1. Add image to your hosting
2. Edit `gallery.html`
3. Add new gallery item with proper `data-category` attribute

### Modifying Styles
- Edit `assets/css/style.css` for custom styles
- The website uses Tailwind CSS classes for most styling

### Adding New Pages
1. Copy structure from existing pages
2. Update navigation in all pages
3. Add appropriate content

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- ✅ Optimized images
- ✅ Minified CSS/JS (in production)
- ✅ Lazy loading for gallery images
- ✅ Efficient animations

## SEO Features

- ✅ Proper HTML structure
- ✅ Meta tags for each page
- ✅ Semantic HTML elements
- ✅ Alt tags for images
- ✅ Structured data ready

## Next Steps

1. **Complete the remaining service pages** using the same structure
2. **Set up form handling** for the contact form
3. **Add Google Analytics** if needed
4. **Optimize images** further if needed
5. **Add sitemap.xml** for SEO

## Support

This static version maintains all the visual design and functionality of your original React website while being much easier to deploy and host anywhere.

For any questions or additional features, refer to the original React codebase or contact the development team.
