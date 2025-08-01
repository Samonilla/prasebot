# Prase.bot Website

A simple website with a spinning photograph that stops after the initial animation.

## Files
- `index.html` - Main HTML file
- `styles.css` - CSS styles and animations
- `script.js` - JavaScript for controlling the spin animation
- `photo.jpg` - Your photograph (you need to add this)

## Setup Instructions

1. **Add your photograph**: 
   - Place your photograph in the root directory
   - Name it `photo.jpg` (or update the src in index.html to match your filename)
   - Recommended size: 300x300 pixels or larger (it will be resized to fit)

2. **Deploy to Namecheap**:
   
   **Option A: Using Namecheap's Web Hosting**
   - Log into your Namecheap account
   - Go to "Hosting" → "Manage"
   - Use File Manager or FTP to upload all files to the `public_html` folder
   - Make sure `index.html` is in the root of `public_html`

   **Option B: Using Namecheap's Static Hosting**
   - Log into your Namecheap account
   - Go to "Static Hosting" → "Manage"
   - Upload all files to the hosting directory
   - Set `index.html` as your default page

   **Option C: Using GitHub Pages (Free)**
   - Push this repository to GitHub
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select main branch and root folder
   - Your site will be available at `https://yourusername.github.io/repository-name`
   - Point your domain to the GitHub Pages URL

## Customization

- **Change animation duration**: Edit the `setTimeout` value in `script.js` (currently 2000ms = 2 seconds)
- **Change photo size**: Modify the width/height in `.photo` class in `styles.css`
- **Change background**: Modify the `background` property in the `body` selector in `styles.css`
- **Change spin animation**: Modify the `@keyframes spin` in `styles.css`

## Features

- ✅ Responsive design
- ✅ Smooth spinning animation
- ✅ Hover effects
- ✅ Modern glassmorphism design
- ✅ Cross-browser compatible 