# C2b Cafe Website

This is a modern, mobile-first website for C2b Cafe, designed to match the reference provided.

## Features
- **Responsive Design**: Looks great on mobile and desktop.
- **Quick Links**: Call, WhatsApp, Mail, Instagram, Facebook, and Location.
- **Share Button**: Easily share the website link (uses native sharing on mobile).
- **Custom Logo**: Includes a scalable SVG logo.

## customization

### 1. Update Links
Open `index.html` and verify the links:
- **Phone**: Update `href="tel:+919876543210"`
- **WhatsApp**: Update `href="https://wa.me/919876543210"`
- **Email**: Update `href="mailto:test@gmail.com"`
- **Social Media**: Update the Instagram and Facebook URLs.
- **Location**: The Google Maps link currently points to "Cheruthuruthy, Thrissur". You can replace this with your specific Google Maps share link.

### 2. Branding
- **Logo**: The current logo is drawn using SVG code in `index.html`. 
  - To use your own image file (e.g., `logo.png`), replace the `<svg>` block in `index.html` with:
    ```html
    <img src="assets/images/logo.png" alt="C2b Cafe Logo" class="logo">
    ```
    (Make sure to place your `logo.png` file inside the `assets/images` folder).

### 3. Colors
To change the color scheme, open `style.css` and edit the variables at the top:
```css
:root {
    --bg-color: #fdf6e7;       /* Background Color */
    --text-color: #5d4037;     /* Main Text/Icon Color */
    ...
}
```

## Running Locally
Simply open `index.html` in your web browser.
